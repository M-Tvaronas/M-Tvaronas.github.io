'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "807fea0a06f9339a1b001cc66d1841ef",
"version.json": "a8497d2b097122f68dd635573acb718b",
"index.html": "afa1895848d49e2a1f7d89ae41205673",
"/": "afa1895848d49e2a1f7d89ae41205673",
"main.dart.js": "3c6ea52e555ebb5601743b1b0d02201b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4a9852929465af10b2d0eb46053c03b1",
".git/config": "508ff9df391a795a13ad87fe75e34a92",
".git/objects/0d/011e36f180a25d674b4a2ca9c1d977d65e1475": "36a3290423df11b508f54542235a1201",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "9ff992df45cf072fcf4e00d974b9363c",
".git/objects/92/f8dafa1b82e0d6ef6cbeca6f73472cea7186bb": "9e4ab47b0f67711f82a437f5ba066a58",
".git/objects/50/e8eb54a022c23573997b09298c5b46ced7442f": "e14dcd89666af268277d038653ea70c3",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/90bc23f7525fabf9997fc0beba4adc5fa347e0": "97d44a9e28e4bdf9b64fbccaa337c6b2",
".git/objects/03/0bf7109998c7db883d8c3a178b1cd27d4de85c": "463b2d37c73486afde7ec37bf43cd9b7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/5ca919fcb12e6a54850f07b6fcae82f1898ab3": "c95e3e4897825a8ca742853a4e4fe040",
".git/objects/6a/7f2c3031304a83e3594b8ab735f1894e03b393": "1336b08b6560a569eb78f51418174ea5",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/a153f752595f2e6e8c309a190a772276df7131": "9feacca64410baf1d97a255aea19c8ee",
".git/objects/69/c36a91ec8eba62fc8758d3e5d346935c977222": "f5665cb092649411dc4bf06f6f8d3f4f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/60/7cc6604f61b5bc4fa2c94a347246cc79f56474": "e48e6ca96c4a902bff0b213a84cd77f4",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9c/aef1f1fbaac978fa2c21c2ce64b6390bfc8332": "a592573d1a70f763f74353ac31eb5aa8",
".git/objects/02/d8444579a55cc8cfe8d703d4cd58468fdd3f80": "0c499c24dd51cdd56a496f7bf72d622e",
".git/objects/a3/70ad71fffbd9869714fd0ccc318774a51b856a": "a837311129d230666b74caff5e65cb26",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/f2e4eb093dd6f3d1fed2a0fdb23cde80b52b79": "02ee039bb0a08bfc8ccb23312ab2682b",
".git/objects/bb/053132bd3324625001b9ed1db8063692e33279": "0a43d95e04296b8bdec99651e070240a",
".git/objects/bb/0d65a0a9d6e007abe47bcdcf2f850125f1663c": "011b5a9b9c0836080e0022947a9e2f8b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5aeb7a2cf06a6aec1029c836dd358374dafcd1": "25994a643dfaa1c431fe2b865448ec00",
".git/objects/ab/986cd0fa1f720be2d917f0f99f6d09a2c4d216": "2d150a5782b5309401502f1fd45d3b20",
".git/objects/e2/efc4c7a82895d2e27629d2f39f93fc17226096": "b32a993be9e0031c7d7cf2e4d4433895",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/c6/97f5cc135b312df1114962ab065283ca0b94c3": "aac855bcd070ec34fd5ad94128fe4752",
".git/objects/4b/3a5b5b07472ac345ef68ade13a3091169e120a": "b465132f338254ee127257f438324f87",
".git/objects/1f/a684a15f79ac9695b68838bf6e0a0e40464ef1": "ebc336f9b8cb2d3422944225a688f939",
".git/objects/1f/866c695d710f25db8471f412177f36bf999513": "ef5a87be46311030a18a1c5992b0d3a5",
".git/objects/73/017640ff61946458e99babbc5b8f44540c94ca": "75712ee3805d7801416663a0f0c79195",
".git/objects/74/751b444ba1ef2797e0a91bf2b208a8e568f216": "fcd97d9b901ad3d8d8fd191bd8f9b2f8",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6f9522614773aa46c24541b4ad473574be5182": "912bec6d40692d50144db7e062edcb7e",
".git/objects/26/9a0eb2f00fde51411450cd67c1b4b628a09b8f": "f5d3c6fd1b139e66b3594637916910eb",
".git/objects/81/715485e064834fa379f71cc2f66b533f951b54": "2bd366dc335817513e505dddd65c12ce",
".git/objects/86/a13d564680793110585f1ddfde1fffaa2c597f": "a450c6324848558a5ddaefa4c0299f3c",
".git/objects/86/0c35742d2aa6e480b754d54d47bafd66ecc3c0": "f48959de061fe477c18a9bfbcbdda26f",
".git/objects/2a/f3829bfbc254ce1682cb27054587e26db817f5": "0bd2e1a2516911ae158898f7dfef55c3",
".git/objects/2f/0556d917653a9211134704464ce7827de7de22": "b023c8a8c765ed66c23a6ec778f6a98f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/4dc51d1c9e0db7b0112e7e6209083edbdd44e5": "bfc46af42a2465eab1b7302c91ce319b",
".git/objects/36/bffdaafdba9489903a764028aba7b2fc41d4f9": "07de5f7a3f0a9fc9f79dd2b1d943f702",
".git/objects/5d/7a2311ff3f31fc39446a70d0a278fe90eaa281": "472c6e281ad0e51e591389307bb7ba4f",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/d33fde2e098ad36f202c371ee16fa3396b80c1": "cc395dbbb7f2344df1db6323d9a304fb",
".git/objects/96/a31d06a3bd14b870d8615da339716391c10aa2": "0ee5d88c210fc00e83ed1519bd22e7f6",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/5e/1097c45c005e3a4d4404dccf74e1496f6f77bd": "207afa2f595814b9f3bca94fa6fb1a2e",
".git/objects/6d/e9befb51b4eeacf207798f28d7273643741a05": "440ebf1568ef50183f6c619cd199d7eb",
".git/objects/55/93529aa8de1f8dab4d58ca4fd639c07f4737dc": "b0f70e54f40f37a1769635848a7eaa91",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/04ec21675a600884eebfacf6cf43ac9eea9ee9": "69be896a675b6e98f15170eaf9efe61c",
".git/objects/d4/0c04050a0c4bc217fd763d5ed0f7577dea5d97": "93d9834d565b31460af7a8f16a72b54c",
".git/objects/a7/9262c4d9746ed3534ae517c996d20b7fcedb3a": "ef8aa5f6151b31d05d9da99255936982",
".git/objects/a7/13714a8fd3a167d6d66d8e049b6470372b55a2": "312b6e11c6f7b01ccf1af8738588ab5c",
".git/objects/b1/ad17882c7061c3a83fac16514f221905c29eff": "c87ef9318e7c908e1582dabdee3739d9",
".git/objects/b1/9f061b03a7c1ebd491995d16d7b5afa9ac7a58": "87ed3f11e6919198e45b1940f2634e04",
".git/objects/dc/14069eb57ce02bfb3716c8b41e4d2cc0155ce9": "6a22772a6f37967af4a8516b7219b224",
".git/objects/dc/1249d15bc86c57484bd547b9093077fbc4c866": "1119ac9eb4aba280ef5225b07756e666",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/a2f963e39787e118540b5beee0a4e13db5de3b": "5c29c6211124990ae7dbf718ee787360",
".git/objects/de/02eafe6e20d673e596e2cb7e770f6f423fafc7": "a224a1f6ef2fad65ca644870ba20a62e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/0ebc92e1fbd7103261a220e31c0de815659ed6": "7964d6501c534c798126ac358958a7d0",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/d67ee2e34fc35ddcd3ec7a575336acdb573040": "cd62a75c4cc7bf16f06c198b251d12c0",
".git/objects/ea/a47bad0952c9f6aad871e7ec2495fab88e92ad": "d1b4259c9ad7aad79951aa61d4efa485",
".git/objects/e1/fe36afa29570ae72ab8593866672c3d8a355e0": "0f6d5f109c022149837faa0f1937760d",
".git/objects/e6/f8f05114cbe291414436c646289e65d6af6df4": "91ac46550caa99a8a0a8487b3242506e",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/e6/8fcdbb31890507dbb39368ab3648e7bcfb660c": "a5725c4df27a19fdfb9c181d3006c857",
".git/objects/f9/0e393996346c4de26961263bdce7e6b592d103": "5e32685c9aafd634798df9c47e6f9fe7",
".git/objects/ff/2d163f322b42aea1f0a9d9e8e573891f5655d3": "90695a0d5422a722e1a2fad91ab244f7",
".git/objects/c5/e88e1d26dfd7c476d93904b13348e1e13407d6": "d69125b41d82fe994a3e4c8bf57c26f5",
".git/objects/e9/4b567f045ac818bd4fa845523768d43a12a15e": "18eca9fd1b0efeade2a79ba65f1ceae4",
".git/objects/e9/438624071fe5578b9bb38ce8231e108a60ae64": "3361c3f5358334fb0cd3b5b96340356d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/a988e39095239be58199422c5e5e118a564fd5": "199f8be8adc6af693820a71b5d318dd8",
".git/objects/cb/16fd6fb37c406470a4dee15713658c4b74eed1": "604e69e37b283ceb58e9fad756efb48e",
".git/objects/f8/81d4c49ce562ababc224c2c4b5924219e80231": "0d5c5be76067e9fd708333661b667e62",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/e9b62dfba9bb187056586b53dfe23d44287389": "01a0f0dd1a98a7421fdda8066f80d4ca",
".git/objects/70/b2133819b83364acc622618ff751610bd7cc00": "7e7c2f0a46bb69d495ad1835ceb098ea",
".git/objects/1e/d1a484d2328a38f9c763143022eaf831b64a6d": "df2d766a401244cd684f0ddfd22686b9",
".git/objects/4a/8e0941b3f4f191c7501475fc29a9be4b21023f": "29ef796c1a8ac6ca4347b1af67be1047",
".git/objects/8d/728924274d14e6e1feb42ee5f4037331e30f2b": "a9737b85d404dc30452bfaf37ec7313c",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/76/60eb476192675f643023af403f3f502a763b54": "be3f6810278252aa632467c4f0a0d539",
".git/objects/82/824ddabe0b836c269a0d9e08250433b267bfd2": "39d21c58210ffbb3ce827b48667ce4ac",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/8b/b145fcacf53301cd040b2158f22951d665cfaa": "6d90b5d5f51d36f4705d13353a49d5a7",
".git/objects/13/cad6dbc8ba6391b9d8a2f718da69bd195c17ff": "349cc3013647d5811c52f7ffaec32831",
".git/objects/7f/db7b7d4947d26dc8f875952d90868c071bd926": "6047ff719f1c94f2e37d6d2df993e0d9",
".git/objects/7f/2605b9da56b3a7243097823fc0842ebc9ef26e": "79b708df6fa4aa42e73dd81f94d9e25e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c28d96b56408c83a6bbb64f45954ff4c",
".git/logs/refs/heads/main": "7d7f0ffe04082bb89d79fc31257ce44b",
".git/logs/refs/remotes/origin/main": "a1239ad6b36bf9fb9d3b03a9d7b80fdc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3bb98ff2b7d9ad255417b43bf434ae24",
".git/refs/remotes/origin/main": "3bb98ff2b7d9ad255417b43bf434ae24",
".git/index": "899cfd0ab0a8bd2f3737502c84014737",
".git/COMMIT_EDITMSG": "10db97338a3490e1ba6048a01ac5e2b9",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "44137e8225f40ceb680ff9d68631466c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "0a27bdf269a5eb88fc2c3a6c990bd668",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
