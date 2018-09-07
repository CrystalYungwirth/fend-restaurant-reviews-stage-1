// Capturing current date to use to create caches version name.
// Using .toLocaleDateString to shorten version name.
const date = new Date().toLocaleDateString();
const cacheName = `v.${date}`;

/**
 *@description cache entire response
 */
self.addEventListener('install', (e) => {
  e.respondWith(
    fetch(e.request)
    .then(response => {
      const responseClone = response.clone();
      caches
        .open(cacheName)
        .then(cache => {
          cache.put(e.request, responseClone);
        });
      return response;
    }).catch(error => caches.match(e.request).then(response => response))
  );
});

/**
 *@description deletes prior cache
 */
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
