const CACHE_NAME = 'v78'; // Increment this to force a cache update
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './images/app-icon.png',
  './images/apple-touch-icon.png',
  './images/favicon-96x96.png',
  './images/favicon.ico',
  './images/favicon.svg',
  './images/icon-dark-192x192.png',
  './images/icon-dark-512x512.png',
  './images/icon-light-192x192.png',
  './images/icon-light-512x512.png'
];

// Install event: Cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting(); // Activate new service worker immediately
});

// Fetch event: Cache-first for all assets, network-first for index.html
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.pathname === '/' || url.pathname.endsWith('index.html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Activate event: Delete old caches and take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Handle update trigger from client
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
