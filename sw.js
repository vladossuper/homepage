/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/DonaldTramp.jpg",
    "revision": "8d36f19dafed703a8e7141ef3f05f49b"
  },
  {
    "url": "assets/images/flagUSA.jpg",
    "revision": "fc36ff0029b1687c6648a481685f6730"
  },
  {
    "url": "assets/stylesheet/style.css",
    "revision": "c6b9feea24b154d5740e082d384b2b14"
  },
  {
    "url": "index.html",
    "revision": "f1aacbf6f86e7449765255b759905dd8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
