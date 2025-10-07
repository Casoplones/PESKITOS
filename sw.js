// sw.js - Service Worker básico para caching
const CACHE_NAME = 'peskitos-v1';
const urlsToCache = [
  '/',
  '/css/style.css',
  '/js/script.js',
  '/img/equipos/escudo-peskitos.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});