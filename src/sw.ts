workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp('https:\/\/api.nytimes.com\/svc\/topstories\/v2\/.*'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'network-call-cache'
  })
);

workbox.routing.registerRoute(
  new RegExp('https:\/\/static01.nyt.com\/images.*thumbStandard.*.jpg'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'image-cache'
  })
)

workbox.routing.registerRoute(
  new RegExp('https:\/\/static01.nyt.com\/images.*mediumThreeByTwo210.*.jpg'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'image-cache'
  })
)