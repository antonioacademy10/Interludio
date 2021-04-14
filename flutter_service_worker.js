'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5952ace92ea3386cbc2c57e97e2dfee2",
"index.html": "c7c87b74a342abe402db8d38b1b264b5",
"/": "c7c87b74a342abe402db8d38b1b264b5",
"main.dart.js": "29a41b110cec197af066e4e587269526",
"favicon.png": "ee656aea471dfb72b1f64747d0cb34d8",
"icons/Icon-192.png": "85aea0807e094a85176e54b2cb5424c1",
"icons/Icon-512.png": "7582ede61d94902c4108ba4e5bf45613",
"manifest.json": "158f46fd1d7d2970ae293139567b1c3b",
".git/config": "148c5714bc117a5b1639dabca185fcee",
".git/objects/0c/83bf24e8996e892dc5c226829fb151fcfd2b5e": "27ae10c7984039f056af0700b6c4c282",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/1dec4fc81de89e06b689381146e1b70d847fe8": "e8582f471063ed6f5e280cfe748e0d7a",
".git/objects/6a/093a509b0137f53ea14ee1ee6e5b0d8f40c12c": "06d23f5d0ba4b82c0dd1890941b88829",
".git/objects/56/f9f6194f3768364738dba3d7c0789a7293287e": "4ab75bb964a5f4066d256443a07489be",
".git/objects/51/57c82719c7f7a1370d5728d5b457ec2a4c224a": "3a028ea99cd948d0ed077c8f48f49e3b",
".git/objects/67/59ab3edefd01321a844d069b45301b705a8979": "a2bbb885e503673621228ddb03db966c",
".git/objects/93/2cdac6822cbb3e4300ebac52ff70970f62f503": "d24f9561ff480e36b60b7633b3e7990c",
".git/objects/94/6be16db71993753a128f4e3d9b088ebc8afdb1": "97002772bd60c90da86d75845a92b745",
".git/objects/60/5f4a43970a03b94d761daf4dc443851de663cc": "891f464a1e4d8452b67f4b8bcfbc47d5",
".git/objects/5a/cbf30ac74711afb6be016f4e5041fbbfbe95e5": "7b5cdb55c9fd6a05205278a1fdb1655f",
".git/objects/9d/e914fd91f8a519a8542ce9b5980650033f95f0": "c394c52454f25a0a8451b2bfbe6b5fc3",
".git/objects/9c/95946a6a7ed3ba25cbcc4637174fb0e16c810d": "08de843996198a3c950b2b6fbccf9b89",
".git/objects/02/0c372c13feac6cd9036d9cb928dc5d73148a3c": "02436fb47a28b5cf9dd28da6746b3356",
".git/objects/a3/6d59b6bbd7021b2d7e51c4280c02a04b266d4f": "5202d4a01a216409299662f3f1e9a0fc",
".git/objects/b2/440305294bcdf4de7f47bb45271860a253a8db": "63ff98419b675cf153717b96ad181a5d",
".git/objects/d7/090267e0b3a69687ddda3d4592ceb6963d5166": "a99aff9a6a45d0a23ba278ae1ef969c6",
".git/objects/df/3bb49fedbdd798e929634b8f3d51139a0b8726": "b3427cfebce9ce592d22b942a09c39c3",
".git/objects/df/33085e762d2d7453d2ecaad2645ea1c7b8048c": "6b450f160dff43ff5b62d3db07488cdd",
".git/objects/da/5310bbc0036d13738affd57afb701616bbdcca": "7486428f39bf300f047070ddb9e117d2",
".git/objects/b4/71032b7aa9da9d8fca2216e02b863abcf23430": "5cd194ca83ad859be8c2b8911f7ee62c",
".git/objects/a2/a6daafe2b25d63742869bead29d4f5a7b4f0dc": "0163788b8ae9bff77b2633a73609dae1",
".git/objects/d1/3c604f162e7139bf2398e7e18a06b359dbd495": "9139a1d866efc1c10bc870eb7b253749",
".git/objects/ae/fe6278e8382d404024b2cf671e71287191cb4f": "60610af11bb60ad4c0745d8f688b9219",
".git/objects/d8/77f20b032b234a7465618d3bcca7c223c9a0af": "a937f00a2ca2745975ed5577e012ca8c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/e8fe729dc3aa8b24527b45075868cd469b497c": "be645f160e31b322a683681d700aad08",
".git/objects/c7/b7f6c2b280066b8b229c385dcecf2f6090d987": "f623db1ae9a29cee4f73deaf507a9563",
".git/objects/fd/573de8ccef798b9cc8e84232f3e349e675c302": "bb9dede2fe144b69e5ddaefe29a0582d",
".git/objects/f2/a8ea1d649b9515b3375770f520fb6d0f3edb90": "a896ce537c8e7c134857d7c3981dc2ef",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/8114adeed80c153dd17b98b540e044c1f78db5": "288807912e73a27e953ca2e9e7d4fbfd",
".git/objects/ca/b2239b606d43e2b85dd8e4232f4970a05a3953": "23a5db0b3b27606551da76676fca6f91",
".git/objects/e4/243a93edb77165c8491d37dbb9f0ba7dd97fed": "6b9faaea99bd80936a3af30f60d76213",
".git/objects/c1/2779c534477c417e8320de25febef9ecf2adab": "199a50fd083d0586e134da8709118f91",
".git/objects/c6/22ea955e130475970f1bbde1e86a5433109abe": "1aabfbbb4a647e7934a8534664c5c302",
".git/objects/ec/9940d484a66659fb068de1be1b08f6fc82eed0": "03761187ce1ea2595ef65ac8ffbc987c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/41a43821f53b90006702d8035c4b4966de3d2f": "bfc271c1d7e623292ce2b0bb0b1df306",
".git/objects/29/b4dd316d65a1bf0718d5635129508503abc7ed": "531effacbc54801f8e57c9c343314569",
".git/objects/29/a0f75cfcdb07a6b44992496f537e97b66ce73c": "7d7012a5e838f76f2d2f8cca9a26ab7d",
".git/objects/29/abb72879be66239211061858bab0420f26e7d8": "2ec3884a7751dde3d63ff556ad46367c",
".git/objects/89/33cd3795f4b35510e2c9dd7f6fba79ee84f592": "916194fa79ba5e603d27f240691ec4bc",
".git/objects/45/49f6a7a69fa05c534590904d780adfed81ce23": "61a04040acaeba75f3ad7625abfdbb2e",
".git/objects/87/7789669e1786b9d2464b365b996751a4155e08": "de67340ca673af586696d8f264525e3b",
".git/objects/80/5866e62c172a02093dfa0b499e65746b65ab3c": "efcc071c7eed06a67c4453d03d04f697",
".git/objects/74/991607227f7c36949b9ee4e36eee5d99c1a1fa": "f6122b9e4500fb2a8ef22444cebe6c9e",
".git/objects/28/a2efcd66358e0d8c23f004819a772a15d09532": "b8218c9bc55b52e5b34838c5818d5362",
".git/objects/7b/df0529f9486beb9a0a82a374052e0a0b467686": "4b05224b45fffb45751c95e1d28c4b83",
".git/objects/8f/35c79486337a540be2080bf6cd645dc28b68ee": "7cfb4440fad0e6b3d48bd7ca6dd68573",
".git/objects/8a/cd02fcf5062ce675c13b7e2ce9535482d55fba": "99963cc3ad6a2a53211586aedb88bb0b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a9918e4c74717ad046ec0b0a0fb8cae1b60cde": "d0a7f262aeff2709084b70d852a2939b",
".git/objects/26/283e06c64bd6cb59b7cce218f5992525dfbab8": "1c5af52e10bb3f1afd1d423037a5eae4",
".git/objects/26/169ee0d17952f0590380df320fda2e433fb4d2": "734ffcdac0dae3d07c0840fb0f5c06fd",
".git/objects/21/7e7faddb4db5e0f642ef3dab1cc3f66fffc543": "a3399c8880abc6f0a25229a10dfdee55",
".git/objects/72/8c4b5d8d1dfe3cf28102a10cc72c86249cdf7c": "88ae56c9c1bc8a4e7d1db7a147910a26",
".git/objects/44/6d7c8f2436ec18fd7ba4d5057b59570a330f5f": "9f4d80d309a63facae5a69c28b5e3e47",
".git/objects/2a/17a09a7ea2f38e8b164965a9e06e8d0b6861eb": "a0b2522ed66833a0a4f6ac9fd0975ec6",
".git/objects/2a/bc40b6cd6625b289290e4a3917956cfcaebb9b": "637e251f7553104a58a33845b18885a7",
".git/objects/2f/863efc96f724a8bfb4b3f787060100d5a0d0d8": "4790a32b081d2e56ddaca01c1d17737a",
".git/objects/88/8d41ae17640b200bf84091e2de7f13b4cae1d5": "ce913a25fe7c518dd9c1d628e51b2c20",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ca83af54d11c9d10c1e0ce90edda8b91ee8cd3": "4ece6318b3534c82154e82f515e680e8",
".git/objects/9f/70c46c92a721b7caeeaf60d25e3af244895d5e": "776bbd74d7bf6b2965a326367e04181f",
".git/objects/6b/22a6feeafb1d833ce4ad4db4a944b5cbc3a820": "4bfbab29a355141f062d1215f98c7055",
".git/objects/6b/1869a8360f5cf03eab274e115961f5791b0196": "a0b3aea3bd4ef001a58ec6e2a03ea5db",
".git/objects/07/39ce865bfeb2917f79924f71da50615a0b0597": "803e1017f4a99ebeadaf67f34e721eea",
".git/objects/00/abec8468d1f53d3f51a6da0f086334f517fdab": "923692197e42deddda75cdc1bd6b7d59",
".git/objects/6e/48bd2a3be24fa6d844c465376e61a11064bc5f": "a516e3919b5c5eb7144a9078218b7309",
".git/objects/9a/c92050e40cc2531a8a09f9ef72f79520976871": "6fd7751e54ca50a9e49a376abb7a120e",
".git/objects/31/f399ffe8f465d0f39c19c484f4a3db28eb1cb8": "7e6cfc785c350e20aeb82e56d2225c8f",
".git/objects/31/cd6cc4cd5ea207bf0205f9745ba1e4cf00d0c2": "56f286bc512106a14e77916ed63b059f",
".git/objects/91/39a432c8e49596de261bfec68e10496f394d0b": "e9675e3f55956998b7f2bb6ab3acaa09",
".git/objects/3a/69eabd70030f3d11aa5250cd4343656bd807e1": "cc97baf74a93b337f855998230a4a4a6",
".git/objects/5e/0e8384861931f26c032137439b5d832050c96c": "250ef45e45525b13843e89640eb2771d",
".git/objects/5b/c6343000924589f26ed4c71e31f134873af843": "c15db6e67cdd19dd8d0776f37ca04f33",
".git/objects/6d/277e58e633d1b2a359d73fb7d8e115f84c12a7": "87cf12bbc3197ff6db68b3921f8da52a",
".git/objects/01/b50737128f4bd0b41a90df936f4cb91d7ab996": "4c95418de293cd79abb533220b26b293",
".git/objects/06/89e8306c11383f8b6292007b4d6444d972b723": "8a62d031f4f81dd457e7f920495808d1",
".git/objects/97/16437d4a56d2eac16f1135bb1963e0efc5ccd2": "6f164565e505ec75c3444548234bae76",
".git/objects/97/4fe05eb517debf85c2eb081195bd403571c114": "fc7ce978d5525b0c370788e67184f6e5",
".git/objects/63/e055c3f27ae19e06712608f106f446482f7c35": "27ef570ceac88f025a7b300e40011467",
".git/objects/63/e28961b5f4513b62d2dec3e71906987312eb82": "6b404f2b90b332248a4e8da920a3db9f",
".git/objects/64/10eaa68e6b634d569e769a9dcb6553d552a8f1": "171ea4648b88a2bd24b3a820216b515e",
".git/objects/64/83150a53bd6ed6d0b4c87ea4e9d85b73b9f1f5": "cd80351f9709443f90245275e5a1db47",
".git/objects/d3/83cb1cb7cde2ccfeff1564f480c55231f20cc0": "8e95e45e2f66bd12fe841aa252262a65",
".git/objects/dd/464ac4a4f07ec56a484cbe37bac167c480132e": "f8a311f6de016403f8a31627aa70ef3f",
".git/objects/dd/df67da1ab911dc7d9e141945616088ea16de2b": "710e24f87bc0b35abffc578f6cbc484c",
".git/objects/b6/34b0e2f1f059fa92266a7d1c6c4cc3d4c1afec": "9d088230626f736776d5f66b0edea4a6",
".git/objects/d5/aa41087dfc1bd8da2ed242d144c75865c27c46": "7bc7b494f690033c7ac0dd3b4c1d5bc9",
".git/objects/d5/19e22a8edb02fd7d0e3bcb8623f7b222bccfd4": "efaa600203175d41f65480963302e49b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/b9be235c51cb2c0e90cd2495287fc1422d5960": "fa9f807bffea2f4b859612f0236448cd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/62d3c45d42822ced3190cbf939315304393a36": "f967c73d747147b8fd04c2ed2d4966d5",
".git/objects/e6/c2ccbeeb44392b4352774d5cff06865a7d6c87": "1e03ebb0557733e384c5f41503dff8e7",
".git/objects/e0/fd6145c30356d495f909fb5804c2cb2a015a62": "88ca488a7bf31c6e931658dca7007fa7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/2a01c4bcf74c03d0d30b5449c61de264c7451a": "47f1e79ae20ae67ffa30a805f8b279a3",
".git/objects/41/3f1d183cbd74e49a03c44a93f9763cd4f105c6": "26611916be9e966f1ba4dc3152330291",
".git/objects/83/41a7494e4dc63862d5add9d6aa3365d9a8d733": "3e2ccb261501fb87f328f4bb95d7d867",
".git/objects/1e/d257843092aa2cb161c023a593d9de96108140": "f6212b3bfa746eb9d0af7892d25cbb0a",
".git/objects/1e/0969b4b4084d353aff63e80293a685473821cc": "4788cfa536a099af1bf50121fd184ae0",
".git/objects/4a/1aa5b10b2df9e9907fe83c0cd6618d03899fc7": "038faf9447733171a3399e63e5772897",
".git/objects/24/4e3e3467820963a1b0dbe055d1198b4dc37f83": "c9f868a94cf0129270f1b4ee319a967f",
".git/objects/12/98321d1e38b5e0827eddea87ae406c50279db2": "c3e5cbe20efabd6316617089a8f51643",
".git/objects/76/51d71ed9a66a30159c576fab02fded774a4854": "ebd1d1fc341f4ffa8b35168a3b12bc49",
".git/objects/1c/94559baa09cc3f45eda294561215a8201416fe": "b2c769ebb5d60ac315faeeaeb4973494",
".git/objects/40/c2c43c3f13fb17e3a4a5150d548840a5c83070": "9a615d33bf48c15eaa1c3d37929f8c67",
".git/objects/47/8e2e84bfde8a3feb345db0344d7050c18c7983": "2763934976988679f37bfa6bac2527b6",
".git/objects/78/8e03bab76b8743341334430d3a36d953d9baaf": "b0d5760ce36d7ff3da7cbcbc494a8ab1",
".git/objects/14/07ae099b8481fb1a7dcaa81e5872c251214f1d": "26e01c740e73294b8db489cd8c7997b6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d984fcd6ef74656a4662487d108f4c38",
".git/logs/refs/heads/master": "d984fcd6ef74656a4662487d108f4c38",
".git/logs/refs/remotes/origin/master": "540c9e5e34d5acd66c9617b13775db53",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "80aaa87699e7fe9ef8e450865a7d738b",
".git/refs/remotes/origin/master": "80aaa87699e7fe9ef8e450865a7d738b",
".git/index": "457a96b356c970f91e98dbf4428b2b5d",
".git/COMMIT_EDITMSG": "5163b4b159da6327e75cac55a2f818d9",
".git/FETCH_HEAD": "39aca3b046864af589d7b973d9c9ead6",
"assets/AssetManifest.json": "d05b0f8fcbc1eea6cb6e6a00b9e3abf6",
"assets/NOTICES": "952434f1b76cd680c7c8add0bd10bf8b",
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
"assets/Assets/Frame/iphone_frame.png": "f10092aef21f98cf931070541da99332",
"assets/Assets/News/4.png": "2da18a0b752d0aceb82b84c9225dd11c",
"assets/Assets/News/2.png": "5b8032fb36a361843814dc8ea5098349",
"assets/Assets/News/3.png": "0828d2583c2af23b62242ee5e99853c4",
"assets/Assets/News/1.png": "89a5e32338aa10d2576b7aac2cf6f54c",
"assets/Assets/Icons/person-male.png": "aaf7d0d9c1350a4945d92218feb1ea9f",
"assets/Assets/Icons/fabrizio.jpeg": "2a93f8fb085938678768a1e8e2ed2139",
"assets/Assets/Icons/ChatbotIcon.png": "6b711b82732df8670a9d515ba0cfa2ac",
"assets/Assets/Icons/ChatbotIcon_1.png": "c25476985602e46b8d4f2325a24d933f",
"assets/Assets/google_fonts/Jost/Jost-VariableFont_wght.ttf": "2cda2bbc3a42cea8ad339e53420110a1",
"assets/Assets/google_fonts/Jost/static/Jost-BoldItalic.ttf": "8d34e9fd494dc090057f2b38c0f537ee",
"assets/Assets/google_fonts/Jost/static/Jost-Bold.ttf": "90fc0121ac53dbe0b32eada18636660b",
"assets/Assets/google_fonts/Jost/static/Jost-ThinItalic.ttf": "7b25755b3660b3d119b9ce51e6090233",
"assets/Assets/google_fonts/Jost/static/Jost-ExtraLight.ttf": "80b98f22bd6831cd2d803ffeec021ad8",
"assets/Assets/google_fonts/Jost/static/Jost-BlackItalic.ttf": "4044db1344a9542546416d5e97876a09",
"assets/Assets/google_fonts/Jost/static/Jost-ExtraBoldItalic.ttf": "981789381ceca1af0d035bb1781dd254",
"assets/Assets/google_fonts/Jost/static/Jost-Thin.ttf": "f1a0dadc29c2b1e21b822ce294a64a3d",
"assets/Assets/google_fonts/Jost/static/Jost-LightItalic.ttf": "e01067ed8787ca7dc793e0e1aa2532bc",
"assets/Assets/google_fonts/Jost/static/Jost-Black.ttf": "4bfa22c31b712bf94869db11a0f68ad2",
"assets/Assets/google_fonts/Jost/static/Jost-ExtraLightItalic.ttf": "fe54badb871a3f16e367927bee6a2f0a",
"assets/Assets/google_fonts/Jost/static/Jost-Medium.ttf": "55e94bca0c5df2836080235f138a0308",
"assets/Assets/google_fonts/Jost/static/Jost-Regular.ttf": "31693d0bf15b75c9d0baf033edfeb00f",
"assets/Assets/google_fonts/Jost/static/Jost-ExtraBold.ttf": "620b052a42968e4e7e40c82b64168b8f",
"assets/Assets/google_fonts/Jost/static/Jost-Light.ttf": "7f98a7858a75c5aebdc5281eff4e6b5a",
"assets/Assets/google_fonts/Jost/static/Jost-Italic.ttf": "5be78235cb8343126b817af2130f3aed",
"assets/Assets/google_fonts/Jost/static/Jost-SemiBoldItalic.ttf": "0e055181230b32d54b456732b15caece",
"assets/Assets/google_fonts/Jost/static/Jost-SemiBold.ttf": "d5a291dd16dbe334f56a12ad53b6a058",
"assets/Assets/google_fonts/Jost/static/Jost-MediumItalic.ttf": "4e8825ca7111b81ba659e9093f0f88f9",
"assets/Assets/google_fonts/Jost/OFL.txt": "c70ba67cf144d7c048640599505d590d",
"assets/Assets/google_fonts/Jost/Jost-Italic-VariableFont_wght.ttf": "15bebf10c32e1ffc69dbe30de41c97a8",
"assets/Assets/google_fonts/Jost/README.txt": "af7280ddd0bd720a20e5c04317bc1e83"
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
