//nome de seu cache, geralmente utiliza uma versão
var CACHE_NAME = 'app-shell';

var CACHE_FILES = [
    './',
    '/js/main.js',
    '/css/style.css',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
    'https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css',
    'https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js',
    'https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js',
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js',
    'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js'
]

self.addEventListener('install', event => {
    console.log('[ServiceWorker] Installed');

    event.waitUntil(async function () {
        const cache = await caches.open(CACHE_NAME);
        console.log('[ServiceWorker] Caching Files');
        return cache.addAll(CACHE_FILES);
    }());
});


self.addEventListener('activate', event => {
    console.log('[ServiceWorker] Activated');

    event.waitUntil(async function () {
        const cachesKeys = await caches.keys();
        const deletePromises = cachesKeys.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
                console.log('[ServiceWorker] Removing Cached Files from Cache - ', cacheName);
                return caches.delete(cacheName);
            }
        })

        return await Promise.all(deletePromises);
    }());
});


self.addEventListener('fetch', event => {
    console.log('[ServiceWorker] Fetch', event.request.url);

    event.respondWith(async function () {
        try {
            //Realiza a requisição no servidor caso falhe busca no cache
            return await fetch(event.request);
        } catch (err) {            
            const cachedResponse = await caches.match(event.request);

            if (cachedResponse) {
                console.log("[ServiceWorker] App Shell Found in Cache", event.request.url, cachedResponse);
                return cachedResponse;
            }
        }
    }());
});