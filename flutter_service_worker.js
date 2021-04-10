'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5952ace92ea3386cbc2c57e97e2dfee2",
"index.html": "4d1cf463ba3d4f7019aa5cebbbf66a84",
"/": "4d1cf463ba3d4f7019aa5cebbbf66a84",
"main.dart.js": "2534e4b7148dc2acc8a585ad30ef2446",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "158f46fd1d7d2970ae293139567b1c3b",
"assets/AssetManifest.json": "eb6de638dafcea1ce3c9f75dd305044e",
"assets/NOTICES": "1a07dcf62aad825c260309a4a5ddf29c",
"assets/FontManifest.json": "e97bc08ebbe0be38ae7b33bf0d817887",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/credit_card_slider/images/virgin.png": "3fddbd290c137caaa8433bf595ce03d2",
"assets/packages/credit_card_slider/images/axis_bank_logo.png": "b19449f26064c33b2b7e54074e0a1148",
"assets/packages/credit_card_slider/images/indusland.png": "be11d2ec4e464f001c9600c842576d1b",
"assets/packages/credit_card_slider/images/kotak_logo.png": "954a4baa3216253c8405c4624ccf452b",
"assets/packages/credit_card_slider/images/sbi_card.gif": "e825a0d61b053f89ca7b08ae0d9fe60e",
"assets/packages/credit_card_slider/images/sbi.png": "e53e57b58679a9dcdf4b8d4833448fef",
"assets/packages/credit_card_slider/images/visa.jpeg": "fd458b62a70c134dc034d4d0bc5e0056",
"assets/packages/credit_card_slider/images/hdfc_logo.png": "77a805e30111caed8290efca4012ee03",
"assets/packages/credit_card_slider/images/chip.png": "edb7b051472347589711a5a350907362",
"assets/packages/credit_card_slider/images/hsbc_logo.png": "32413de84f88d98aa2e1c9d4e4ccd98b",
"assets/packages/credit_card_slider/images/yes_bank_logo.png": "dac5adb6d0eef54d1523ceeef5f2df51",
"assets/packages/credit_card_slider/images/visa_basic.png": "c4bd375e38d9eec842b9cd15607e233b",
"assets/packages/credit_card_slider/images/rupay_logo.png": "a64ed263f7e8c2698910d56a23ea03d2",
"assets/packages/credit_card_slider/images/icici_bank_logo.png": "cc9de696b8c129043351755572e43fe3",
"assets/packages/credit_card_slider/images/mastercard.png": "f18574dd3f2b0e94c33039c6704897a2",
"assets/packages/credit_card_slider/images/citibank_logo.png": "2265e52f93d5f5690fd8f7b96a714192",
"assets/packages/credit_card_slider/fonts/creditcard.ttf": "e0bb952bb60c78585664820b81be7466",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/Assets/Images/3x/Home1.png": "c91aca90426c85c420ccef9dde77bf01",
"assets/Assets/Images/Home1.png": "e55ba3e51b8bb5fd344d0368239a5790",
"assets/Assets/Images/2x/Home1.png": "395a41346044ed04336a04255cafd8ea",
"assets/Assets/ProfileImages/francesco_tirsi.jpeg": "09eb2374b7f18bf65f451edc3eb0f558",
"assets/Assets/ProfileImages/fabrizio_pezzella.jpeg": "2a93f8fb085938678768a1e8e2ed2139",
"assets/Assets/ProfileImages/eleonora_della_torta.jpeg": "15a32efd9617219ec8be054244c37cb3",
"assets/Assets/ProfileImages/luigi_barretta.jpeg": "257a6272ed2ee2fae60ee237a7a3dd7f",
"assets/Assets/ProfileImages/antonio_elefante.jpeg": "addf0a8fd689cbcfa006b65f3aebc111",
"assets/Assets/News/4.png": "2da18a0b752d0aceb82b84c9225dd11c",
"assets/Assets/News/2.png": "5b8032fb36a361843814dc8ea5098349",
"assets/Assets/News/3.png": "0828d2583c2af23b62242ee5e99853c4",
"assets/Assets/News/1.png": "89a5e32338aa10d2576b7aac2cf6f54c",
"assets/Assets/Icons/person-male.png": "aaf7d0d9c1350a4945d92218feb1ea9f",
"assets/Assets/Icons/fabrizio.jpeg": "2a93f8fb085938678768a1e8e2ed2139",
"assets/Assets/Icons/ChatbotIcon.png": "c25476985602e46b8d4f2325a24d933f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
