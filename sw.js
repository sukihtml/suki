const CACHE_NAME = 'suki-store-v4';
const ASSETS = [
  '/',
  '/index.html',
  '/katalog.html',
  '/menu.html',
  '/profil.html',
  '/card.html',
  '/cheatproject.html',
  '/manifest.json',
  '/suki1.png',
  '/suki2.png',
  '/Profil admin/Banner1.jpg',
  '/Profil admin/Banner2.jpg',
  '/Profil admin/Banner3.jpg',
  '/Profil admin/Profil Suki.jpg',
  '/Profil admin/Profil design logo.png',
  '/Profil admin/Profil webstore.png',
  '/Profil admin/japost.png',
  '/Profil admin/jasa gendong ml.png',
  '/Profil admin/produk1.jpg',
  '/Profil admin/produk2.jpg',
  '/Profil admin/produk3.png',
  '/Profil admin/produk4.jpg',
  '/Profil admin/produk5.jpg',
  '/Profil admin/produk6.png',
  '/Profil admin/suki.jpg',
  '/Profil game/Suki plane 2.jpg',
  '/Profil game/Tictactoe pro.jpg',
  '/Profil game/balap suki.jpg',
  '/Profil game/pvp.png',
  '/Profil game/survival.png',
  '/Game/Balap suki.html',
  '/Game/Suki plane 2.html',
  '/Game/Tictactoe pro.html',
  '/Game/wg of archer PVP.html',
  '/Game/wg of archer survival.html'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(ASSETS.map((url) => cache.add(url).catch(() => {})))
    )
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
