'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ac9b3f9c463aa60f10b034ad0cd4bfb9",
".git/config": "402307ba4d0d60a2f9f2f73d632afdc0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "ac243abde6ec933355739beded0e21da",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8653b4bfaaac0ae778655ef931ba7cd7",
".git/logs/refs/heads/main": "479402e712ccdddea727d02fd70a6964",
".git/logs/refs/remotes/origin/main": "439aad6306b3d9b1c830fc031b28e5f0",
".git/objects/08/035124468fd4eb74f35560dfa5cb48e5bb4e3b": "4252c9c4dd7c3d1e170f14e253397294",
".git/objects/09/a182a7be33234dba7a1d1f9cc20e76dcc37f0b": "c7b6efca4fa2b66aeddad43c2cbcd2c4",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/18/6d79a08de5836c34b204bb9f8af69f3315cb93": "6a6b0d1db9d9cc239ed55920d3218c0c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/dec6a3f63fe82cad567a7d98abf727462d6766": "de80dffb1031d7e7b842b021fe49fd8c",
".git/objects/2f/a4c86e1f2c072d56709cf21a26282bd1eab0a5": "a6023ab99fe940b1054994f1132ddb8e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/fd123590d2e29367033278c91b6e422f6f5315": "b967d6d40803a7855c401d4b30150aa9",
".git/objects/37/ce273016279b2aab2bc6a7ed70ac7f5cb06a20": "bcbaaf87f685a12a4e228f717b8c11a7",
".git/objects/39/bbe94a318fdf28d4a3ed91c8d10dd455826724": "3cef6cd276f3fe894923e92faf5968ef",
".git/objects/3b/b4b92b39fa44f28541dc25d95424f7898683aa": "a0c8db67ec40dc0678313fce1e184595",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/42632dee94e5f806386867fdda312d84051449": "7e6457a5117ddb3f2cdb91b4a99e6859",
".git/objects/43/494c5ead20190376fab9621a967c3781b3c50e": "6a2f21e267ceeec9f6c8351a0c9eaf7f",
".git/objects/47/f40e78cb3247f069062f2a1385c9a2bb500208": "6e056003998b08f01c90c4920a8d8047",
".git/objects/4a/803c898efa6bcd4c33fc0b0c275c022f200e08": "22067b85df2a196b95d774ddab8709c8",
".git/objects/53/8d6d27172b59e46349ab5eb287ec385cd078ff": "2b7708c6ec6edba2f3caba73f342590f",
".git/objects/5a/7f1fc8cf6aacfd8a054ad4aa7422a1c6c4e170": "94cf59c3925a771292f2cc443c743b9b",
".git/objects/5e/b7dded7e0ccd264b420c28c7914354c894d4ac": "17875c39b14199fd2f5a81d469edec05",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/0c6c2c96b4d3b00de945579071f3d8e7c2edaa": "301716de462129e253efc696dda93763",
".git/objects/8d/8233c83782ad326bb57e290f4a3a0d542c02ed": "ff853063f5dc6d859a0223b27b56d15e",
".git/objects/92/169da29a7f8808b7c9c93b5040ed4ab2bb9116": "8502fdd7e3a1b81b39f29e31bb8aaaa9",
".git/objects/96/a379e03ad68598b175c947fce678a803829055": "2df68b25ad4fd14b55c2cf9a102d0a33",
".git/objects/97/8762224e570e443eae618366587e33efe9fac7": "4314d3b9e2386a18fd5e996b755fb200",
".git/objects/9a/02bc6d2a62b235485000b02fd03fa1b92498c2": "7ec2f0ce62219c8c7795cbe73c806e4b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/f770cbc0f2f37fae817816f292a54d7fa1e4b2": "99048738259965f99d9a2d233f4aaee9",
".git/objects/a2/c8dff56da0a696ab53892a8002a5179684a756": "91ab98d4d7f0a1a6c188866849994210",
".git/objects/a8/7ca2d1efbf0545733650652751389d47944877": "c19c9dd3a3ba6cc438c0346f2b8feb80",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/447e6f475734b7fbcc40c776c3ed7ee0d96c48": "3752c2588fa29a2f64ef02fd3d51201f",
".git/objects/ac/a33961e311a809fe218e6a9e95916a3901cad6": "2fc2f8963351beebb8ff97a8f61ec665",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b4/4f139b0ebadc8f994634a6dc409569205340c0": "3c2c31b2b2352b1fe1d44ba9a7da3f07",
".git/objects/b7/e5a99cb41c63d644abf3f9959bf0d7986453a6": "ad356d102f92934d4f83547115b181e8",
".git/objects/bb/70240f26750bbdcd5da35ed0272e07aa7d7e0f": "8a621cc562c8580ed933cc636fc02415",
".git/objects/c1/dd0dca8f07d24cc17de87b9d509ed4005d8ab2": "2b80e1eaa82410cb1880bf8f95c3d53b",
".git/objects/c9/869e3d92ae0f348068aff1b63706e04cb16442": "aba728ed87beeda50ce1376f1e7b83d7",
".git/objects/ca/9874317ed96da0429ff6cb3e74c4ee33c981cc": "08927fa5f643fcbbbb92d3d8d145ebea",
".git/objects/d2/969e157847851765fbe4bff3b00847474d6a2b": "657fa475e4e323b2dca10498f8cd1854",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/105b68779285e38328e784bcbb70c293875706": "cd5bbd4494a06f3ba40f83b8064a965a",
".git/objects/e8/9fadefc3c01fb9ae228d9db0642cf6b888e1d4": "cdb5a31f62d25b0328cdded2ed3d9b5e",
".git/objects/ea/0197e73153081f65ac13c388df8273b4b3274a": "68a9bd8977d650d97dbf66eb9d9676a5",
".git/objects/f3/3bdfb7c9facf2cc8de1512b746f08e69653766": "dd3c2a69171313b8419ddfaa5ca73bbd",
".git/refs/heads/main": "d6c07820eae2a329b2811aef898c7510",
".git/refs/remotes/origin/main": "d6c07820eae2a329b2811aef898c7510",
"assets/AssetManifest.json": "75e6f9caaf5b00e717e3269425dba0f7",
"assets/assets/fonts/KHMMOOL1.ttf": "2bdfb26ca7c50733b046a58739fce996",
"assets/assets/fonts/Siemreap.ttf": "01a09003da4063952afa7734f4f393af",
"assets/assets/images/logo.png": "14af76f06b506a91083a35a70326e7fa",
"assets/assets/json/db.json": "64169c11ba6875b48d84936aefdbe5ed",
"assets/FontManifest.json": "ee81c46d571a5cec139f8576e99ea322",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f8f424b323745be3f4d7f1fc2fc8e4aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "061d520af113e4ffe433d237de3f899f",
"icons/Icon-192.png": "061d520af113e4ffe433d237de3f899f",
"icons/Icon-512.png": "061d520af113e4ffe433d237de3f899f",
"icons/Icon-maskable-192.png": "061d520af113e4ffe433d237de3f899f",
"icons/Icon-maskable-512.png": "061d520af113e4ffe433d237de3f899f",
"ic_launcher.png": "061d520af113e4ffe433d237de3f899f",
"index.html": "b2898428a8f26361c0defa03affaa27d",
"/": "b2898428a8f26361c0defa03affaa27d",
"main.dart.js": "08f7dc61d5ccc75143a047427698b8b3",
"manifest.json": "3b9936d4d91dd06f6f54e98b04355d09",
"version.json": "63a147806435cbd85ce2b10b5ccf34ca"
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
