const CACHE_NAME = 'suki-store-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/katalog.html',
  '/manifest.json',
  '/Profil admin/Banner1.jpg',
  '/Profil admin/Banner2.jpg',
  '/Profil admin/Banner3.jpg',
  '/Profil admin/Profil Suki.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
