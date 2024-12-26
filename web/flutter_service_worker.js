'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "76bd9e5bab986a99092634ed93418ab1",
"assets/AssetManifest.bin.json": "31c388fe11098cd28b78d4d18a941914",
"assets/AssetManifest.json": "6f6bfd9f9dddb638d0c37d1691276e3d",
"assets/assets/app_icons/logo.png": "55a942b9dda6058698db5b60f4c8918e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/icons/cash-register.png": "9e4eaf56dc27bb69338f449fd233a9d9",
"assets/assets/icons/category_comp.png": "47cf463b8542d17141d0af86c2853608",
"assets/assets/icons/current_offers.png": "377002ea670d9064ccf5e808a74bb937",
"assets/assets/icons/current_stock.png": "3df9e8ea097815c75a5a8be01408ca38",
"assets/assets/icons/customer_out.png": "21074197e5f292e3e2949d2f168bd836",
"assets/assets/icons/dead_stock.png": "cfb85f4d2529f46bcaa151eaa9624d89",
"assets/assets/icons/discount.png": "d4b87a1b6d1d854ee3d7300b150de805",
"assets/assets/icons/excess%2520stock.png": "b5620f01e3136353e67d8e0c1cb30792",
"assets/assets/icons/expense.png": "45d29779b0021c3d720dab7793a510a6",
"assets/assets/icons/fast_moving.png": "133774e46ace886b12caff86af8c98c7",
"assets/assets/icons/item_purchased.png": "7d9b2fb0d2f8f978e2e413a111d1f7d0",
"assets/assets/icons/low_rate_finder.png": "5a9cd8f57543514c6fa0d8a981cd3ee4",
"assets/assets/icons/low_stock_finder.png": "4393d12d3b5dbc76347c1f4622f1e7b2",
"assets/assets/icons/offline.gif": "88e602f922d867cdddfb06c6f2c21ab1",
"assets/assets/icons/price.png": "7e8f4547d66a97d8ff6194f725139cf6",
"assets/assets/icons/purchase_wise_gp.png": "ca2f02f54529b503c219e3ab9a2a683a",
"assets/assets/icons/reminder.png": "fe2662d6aafd315e1899f992317778fc",
"assets/assets/icons/reorder.png": "82f88793871d4bf72e1dc9df62ccc16d",
"assets/assets/icons/report.png": "904738643f032fa194dba93d391cb921",
"assets/assets/icons/rupeesOutLine.png": "6ad181e48d479d22d8d1f30ad2b99baf",
"assets/assets/icons/sales_activity.png": "19eadd96fd3c218643d49702c1a329e8",
"assets/assets/icons/session_register.png": "f5865c476314013755e49f0dafb88599",
"assets/assets/icons/sold_item.png": "c75a4b7a274bb2036c4ae0954323b165",
"assets/assets/icons/suppliers_out.png": "0aa60b5112b9c03b2b9b62c55f2a013d",
"assets/assets/icons/todays_cheque.png": "87c864488b85e23f1d66e859fe14cad6",
"assets/assets/icons/todays_client.png": "d375f35f4ff5277d195685c1d3473717",
"assets/assets/icons/today_summary.png": "4c70a6330540cd97686f19419e40c658",
"assets/assets/icons/voucher.png": "edaf77dd539948def82473218b92cfdb",
"assets/assets/images/nodata.jpg": "8e4fc66239aa51ef68b7f9700a4eefa9",
"assets/assets/images/page.png": "23d9365d1147202e52b6f1fd8e14acde",
"assets/assets/images/rupee-sign.png": "661a2897a6de7f6f6a71bce53fb84539",
"assets/assets/lottiesIcons/offline.json": "6f36f5c6191f2b330e853e6f792e5365",
"assets/assets/lottiesIcons/warning.json": "e2e2f3523c39248d81ad43662792dbbe",
"assets/FontManifest.json": "3e9c4cccea28fb5395d56150202bfb81",
"assets/fonts/MaterialIcons-Regular.otf": "635fbed8a63c0319825ea828f4ae5abc",
"assets/NOTICES": "e01cb5476b8600d16ae321c28b8f6cf6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_neumorphic_plus/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9b2f5aee132ef5c4e9a56c3524c6b274",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "308e9f27d62d74ffb594a8b070a08af5",
"/": "308e9f27d62d74ffb594a8b070a08af5",
"main.dart.js": "da3ddeda513bb6d1588e1f4853cdf2d1",
"manifest.json": "a1cad64b59d5894854d038ff6e3689fc",
"splash/img/dark-1x.png": "928454f000648e1977c192c4b2abd316",
"splash/img/dark-2x.png": "a69040c7c35873599ca33fcb3b917638",
"splash/img/dark-3x.png": "99aaf228eaaa48bab06fbd42f7f21dde",
"splash/img/dark-4x.png": "df451fd133ee788fec557d25d42fe924",
"splash/img/light-1x.png": "928454f000648e1977c192c4b2abd316",
"splash/img/light-2x.png": "a69040c7c35873599ca33fcb3b917638",
"splash/img/light-3x.png": "99aaf228eaaa48bab06fbd42f7f21dde",
"splash/img/light-4x.png": "df451fd133ee788fec557d25d42fe924",
"version.json": "8e31a3e6c83552ee96aaf498a1341331"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
