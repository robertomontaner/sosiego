// Service worker mínimo: guarda la app en caché para que funcione sin conexión.
const CACHE = 'sosiego-v6';
const FILES = ['./', './index.html', './manifest.json', './icon.svg', './assets/earth.jpg', './assets/earth_maps.jpg', './assets/moon.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
