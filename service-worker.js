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
    "url": "404.html",
    "revision": "795e64ef58f74a2883d4b21488063321"
  },
  {
    "url": "assets/css/0.styles.d77a2691.css",
    "revision": "91fad5192abeb2b01383b31c81af3dc5"
  },
  {
    "url": "assets/img/add-user.722a8c13.png",
    "revision": "722a8c137faeacef84edb12f510c7519"
  },
  {
    "url": "assets/img/add-user.997428a5.png",
    "revision": "997428a5e07993bc87f5627d7b473e12"
  },
  {
    "url": "assets/img/delete-user.2183a0dd.png",
    "revision": "2183a0ddf4994fb64a8a6e01144a6b25"
  },
  {
    "url": "assets/img/delete-user.9c5d0283.png",
    "revision": "9c5d02831e1174e89ef82184d348f681"
  },
  {
    "url": "assets/img/get-all-users.4f3c1ae1.png",
    "revision": "4f3c1ae19a01f0922f44e1b076af0766"
  },
  {
    "url": "assets/img/get-all-users.e7df4305.png",
    "revision": "e7df4305ffdf790cdc361923853a9cb9"
  },
  {
    "url": "assets/img/get-user-by-id.8d07fa7c.png",
    "revision": "8d07fa7c3ab207e751a1e55b18d1b79a"
  },
  {
    "url": "assets/img/get-user-by-id.98b683ad.png",
    "revision": "98b683ada6b4a4b69889238f66bb61fa"
  },
  {
    "url": "assets/img/logo.21fcc4f4.svg",
    "revision": "21fcc4f485f8d8cd95ab594fcdc39a0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update-user.23fdd778.png",
    "revision": "23fdd7784c40ee0138d0df5cef43aa41"
  },
  {
    "url": "assets/img/update-user.4f44010d.png",
    "revision": "4f44010dc99bcc600fe4b3ef70bc3b30"
  },
  {
    "url": "assets/js/10.e6d186d0.js",
    "revision": "5577c34bb06ea495cbd5b0ff179c0e0f"
  },
  {
    "url": "assets/js/11.3ef95339.js",
    "revision": "5c1a5e44a92ea9fcdc8a43ef0f74dab7"
  },
  {
    "url": "assets/js/12.54855c33.js",
    "revision": "10a87746a5689015946971beefc182ff"
  },
  {
    "url": "assets/js/13.4092852d.js",
    "revision": "f775fbf858fe71204200230363f85b73"
  },
  {
    "url": "assets/js/14.82b0bc53.js",
    "revision": "630e959d9f1bec10e7ad5d11b34fd4d5"
  },
  {
    "url": "assets/js/15.cc114a8c.js",
    "revision": "613c50f9a28273cd9dc680268c611fc6"
  },
  {
    "url": "assets/js/16.ed98b386.js",
    "revision": "135540c74e52abe8bc7794ec3f18c8f0"
  },
  {
    "url": "assets/js/17.8f3f7a35.js",
    "revision": "3257d92d444f94809de6e85085ca296d"
  },
  {
    "url": "assets/js/18.eb6e660c.js",
    "revision": "0615ee0965783ae98898761992e61d64"
  },
  {
    "url": "assets/js/19.9ef82e01.js",
    "revision": "7b475b8147e8ae7df2e58afdb13e923c"
  },
  {
    "url": "assets/js/2.b15a7bbf.js",
    "revision": "1758eb7c996145e6b62a8f2ae74eee1e"
  },
  {
    "url": "assets/js/20.0b39370d.js",
    "revision": "5405978b13ca221150ce5157cfe4e5ff"
  },
  {
    "url": "assets/js/21.1c83cfbb.js",
    "revision": "392c031478b5bbd530a5f56342fe90a0"
  },
  {
    "url": "assets/js/22.0ed16bf6.js",
    "revision": "2e38baa52efd8caeea1c0a0b454fa189"
  },
  {
    "url": "assets/js/23.1da58cb8.js",
    "revision": "93dff34984f96a556447d3e9ad442c9b"
  },
  {
    "url": "assets/js/24.7b46e91b.js",
    "revision": "54b903042f745350f2a9c98b5ad9e900"
  },
  {
    "url": "assets/js/26.0e2b4074.js",
    "revision": "fe7a56c53e2b539b59b35ab0f179ffd7"
  },
  {
    "url": "assets/js/3.13375ee6.js",
    "revision": "e57950e4d01b3bb2cd9879f2c6eb2615"
  },
  {
    "url": "assets/js/4.6a999665.js",
    "revision": "a951d5243f5a28337d052febd196213d"
  },
  {
    "url": "assets/js/5.f1643cc1.js",
    "revision": "a9f6f99837a95e9204752d2833197b10"
  },
  {
    "url": "assets/js/6.d3ff944c.js",
    "revision": "4d6a1934b8290eb06c2a3fe73d71a3cc"
  },
  {
    "url": "assets/js/7.f2395080.js",
    "revision": "97427aaca99556e3fc1e095e1d416767"
  },
  {
    "url": "assets/js/8.03ba19a7.js",
    "revision": "5ac4791ec537ae3f18b563e30d5a7919"
  },
  {
    "url": "assets/js/9.d28acf72.js",
    "revision": "61efeabdf64052253864e05c76f6f621"
  },
  {
    "url": "assets/js/app.f44fbb9e.js",
    "revision": "17d7f1465ceae439f785b74f08406739"
  },
  {
    "url": "conclusion/index.html",
    "revision": "93cd1c7f338c0b5be060ff6f234cf662"
  },
  {
    "url": "design/index.html",
    "revision": "bf867c57d0a24f178f93a0260e3dcb9c"
  },
  {
    "url": "index.html",
    "revision": "64125346de4b3e514811a7c2cf271182"
  },
  {
    "url": "intro/index.html",
    "revision": "6d7c3624e190e9cac78248f514f16012"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1c4a5d9889488d11dccdcbd03dd032f7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e373412ff5c168c47731c52a74a6a0ab"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ea6022a97a2262e7504fdd4a1b0105a8"
  },
  {
    "url": "software/index.html",
    "revision": "868a7dc097d8ff3d48e356ef529d4623"
  },
  {
    "url": "test/index.html",
    "revision": "9ff7945673890f4513e2d8ea4eb89580"
  },
  {
    "url": "use cases/index.html",
    "revision": "eccf3e0f0cae69d512818a91d60fbd20"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
