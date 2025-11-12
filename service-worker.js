self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("mini-app").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/GAME.HTML",
        "/LION.HTML"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
