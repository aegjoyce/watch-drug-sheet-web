const CACHE_NAME = 'v33'; // Increment this every time you update files
const urlsToCache = [
  './', // Cache the root URL
  './index.html', // Ensure index.html is cached properly
  './styles.css',
  './script.js',
  './manifest.json',
  './images/icon-192x192.png',
  './images/icon-512x512.png'
];

// Install event: Cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Activate new service worker immediately
});

// Fetch event: Serve from cache first, except for index.html
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always fetch index.html from network to ensure latest content
  if (url.pathname === '/' || url.pathname.endsWith('index.html')) {
    event.respondWith(
      fetch(event.request).then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone()); // Update cache with latest HTML
          return response;
        });
      }).catch(() => caches.match(event.request)) // If offline, use cache
    );
    return;
  }

  // For other assets, use cache-first strategy
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Activate event: Clean up old caches and take control
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Delete old caches
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of pages immediately
});

// Listen for SKIP_WAITING message (to update SW without reload)
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
