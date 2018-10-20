# SERVICE WORKER EXAMPLES

A collection of practical examples of using service workers

Live Demo: https://simple-pwa-wcouwbjvdp.now.sh/

#### Open your Developer Tools console and network tabs to view what each service worker is doing!


- [App Shell Cache](https://simple-pwa-wcouwbjvdp.now.sh/pages/app-shell/) - It precaches the app shell resources in a versioned cache. An application shell (or app shell) refers to the local resources that your web app needs to load the skeleton of your user interface (UI) [Source](https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-concepts/content/docs/introduction-to-progressive-web-app-architectures.html).

- [Offline First](https://simple-pwa-wcouwbjvdp.now.sh/pages/offline-first/) - It precaches the app shell resources in a versioned cache, and maintains another cache that's populated at runtime as additional resources are requested. If a resource is cached and available offline, return it first before trying to download it from the server. If it isn’t in the cache already, download it and cache it for future usage [Source](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Offline_Service_workers#Offline_First).

- [Online First](https://simple-pwa-wcouwbjvdp.now.sh/pages/online-first/) - It maintains a cache that's populated at runtime as additional resources are requested and serve the resource from the cache only when the user is offline or a network error occurs.

- [Offline First Update](https://simple-pwa-wcouwbjvdp.now.sh/pages/offline-first-update/) - Similar to the "Offline First" but the resource is updated in the cache on each request.
