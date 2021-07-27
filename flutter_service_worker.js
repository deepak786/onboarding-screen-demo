'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8953ece705ba0e1519e05d9fd14e520f",
"index.html": "6e204b2374183b2ea099b6cb958b1a4a",
"/": "6e204b2374183b2ea099b6cb958b1a4a",
"main.dart.js": "fbd10b837b0b71e5fe3e4ebc4e019829",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c6207957e17d7f3ee64c822c77c7e723",
".git/config": "e8476f8709d50cc397c5e7ab361a062b",
".git/objects/50/517fcf9dd34dae3f71f574eea57bc2eee52030": "9ccd6eeedec4d01c0c921767e4fd00da",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/c1898b1b722fb5ca8740ec492f9819489fbbe7": "ac44198b16975e467d22a558fe85f7e0",
".git/objects/3c/dbb7de12213bbd3978a0ecd94f2d5e32508ae8": "c1c567b96ab1518011577368785a2402",
".git/objects/56/9281e108cf2b9f9dd31d73c3a6c9587f0c8284": "05b75b5abc2b2bf4802f220b0fcddaa5",
".git/objects/94/83457ad309f3f5565f251f70ebdf295557bd2e": "10621e38c1ad390f74393cc3fe54a9cb",
".git/objects/05/53532963160f480eab4d51b6569c1ac856de35": "f2c620caa483329b9d458fe35b16cae3",
".git/objects/05/36fe83dfc54307d5726c459bfa7033eb59d0cd": "e323eab1353fc0e04041b30bceb44b24",
".git/objects/02/9efce7eb90cf7a8231c917c7aa75cb2e0006cd": "18848104156ac764880f893315b23e5c",
".git/objects/ac/8873cb232c22667914dc05d6d6116c2efa4e6b": "7cf85a1c843b8152cc67048888152d29",
".git/objects/bb/a5c5a02f7fb284a7694455aa5b2770133445c8": "f2e96965e47aa136f59b76b746baeb24",
".git/objects/be/30bc81aea0f0f5561bd94de08db31b9c8f2a90": "39a9c05e376efc66b0ee52551bd74433",
".git/objects/d1/36c2d4e034add6609254b58dad2de43860932f": "117443127cf9a3f28631e544fc3222fa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/dfbb7a462ae12fbb5de8a325cf232d8d8719f4": "79647b8ac025613c3a5ecf5db4021de1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4e/96477012edf7f2ec6faf052711bd626d7cdcee": "7b6fd9047c6b19c5e25bd0fd73514852",
".git/objects/42/de36058b01105ca006b71db2ea4f7b4b35f5d2": "7975434012ec81cdf067fc8ac6530a7c",
".git/objects/80/fb791fc0bea592f902b49ca7d2229e71404c2d": "214b5693288a454a6c28071593fdebdc",
".git/objects/74/f56e11b2e0b2df4db472097621e42751a94335": "664cc6faa4ed73979ec354acc39f2885",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/d7fa5f27ce561ec6ddb8def829728e5a828a54": "2d16d08a94b9475750e46a0d9a7b180c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/ed325f67bde707f48c616355a6ccc8307159a2": "1cda9516a6fae52aa3da863fcb896e83",
".git/objects/53/48841a0d7361482abf54e9b7347bf15efc5eae": "68582ff3ad5c1fdcf413c0738e9b0098",
".git/objects/63/5bd5858291600103c09ac5ce16a222a9c8fc96": "b2410ce96e6b295e7fc3993c22fbb705",
".git/objects/d4/be837686e3fbf373b2515699fa46217c44a03e": "8eec3ebf6832dcf511c84f1df0050999",
".git/objects/b1/39906037b470d5bf41672b1090196e4c3a68fd": "34faee23be58f8f38ef0c0f7fd4a3978",
".git/objects/dd/0923e0679ba7a938d99143061600a602f13520": "2dd961572d0b184fd2e5562530e02a60",
".git/objects/af/d1eabe810968d972a417bb14184023e99a082a": "5143651380712aab0d41df693a2c20f4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/2987cdbc5f6f732fc239c40fcd100c9c52257a": "0ef336b50cfe2a49ad47dd796d11ffd9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f0/45b6360d8c4df8d40203390c5b5173360459d8": "3ac88e281180108eb9e9297fa2b4ae82",
".git/objects/c5/a7ca73bbdfa8c62c331df9970c591f1eae17e1": "4a684d809167aa1c82a462c8ce5d442a",
".git/objects/e0/892b479146cd4e575db147aeb6437c563042dc": "01482a064e3b914a07755502ef774845",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/d003d4bae32e1ae0100d050d72c10814cf1afb": "7660e3530b8247453604303a8381b7e4",
".git/objects/12/81d5994937b9db5d73b3f53d790c8db7cdaec7": "b32fca25ca2332083b3e57464be62832",
".git/objects/49/f5c57feb06b3785a3be894e55a650459d0ae65": "f8e1d6c8c03604e0494266ad51fbae88",
".git/objects/2e/23c9baf127e025e8869ef6957c94bdc78dd2d0": "a0ed79012f93d2625fe68a04e55455fa",
".git/objects/2e/7cc9dc6e3e23075eb0d077228bafeddec9646c": "bd8dbda26c9b2e1ba219f6bb61b5f852",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c16de66184620c6109157eaf262c9d0",
".git/logs/refs/heads/master": "2c16de66184620c6109157eaf262c9d0",
".git/logs/refs/remotes/origin/master": "2b2bdef09f13860fe50c053ed9534908",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "c2d637e3620dfc56e16627d451a47343",
".git/refs/remotes/origin/master": "c2d637e3620dfc56e16627d451a47343",
".git/index": "0a392638d97badd5ee33ebd82d909831",
".git/COMMIT_EDITMSG": "f2284b1978beaa735c4fe866601f8093",
"assets/AssetManifest.json": "a4dff91ee081865c705fee5927326190",
"assets/NOTICES": "9fe18fa94947ca4ce91d7407fac65962",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/onboarding_2.svg": "3468c686d86cdbc3daab5a2785a6de12",
"assets/assets/onboarding_3.svg": "97c008cbd4c98463341a3d899f233091",
"assets/assets/onboarding_1.svg": "9437d8d2cd27f487f97d65f93153c4d3",
"assets/assets/logo.svg": "f0b2555ad4d7843a049b66156b297bab"
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
