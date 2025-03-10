const CACHE_NAME = 'v26'; // Increment cache version

const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './images/icon-192x192.png',
  './images/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting(); // Forces immediate activation of new SW
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME]; // Add the current cache name to the whitelist
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Delete old caches that don't match the current cache
          }
        })
      );
    })
  );
  return self.clients.claim(); // Ensure the service worker controls all clients immediately
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('index.html')) {
    // Force a network-first strategy for HTML files
    event.respondWith(
      fetch(event.request).then(response => {
        // Update the cache with the latest index.html
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone()); // Update the cache with new response
        });
        return response;
      }).catch(() => {
        // Fallback to cache if offline
        return caches.match(event.request);
      })
    );
  } else {
    // Default caching strategy for other resources (use cache-first)
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});


self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
