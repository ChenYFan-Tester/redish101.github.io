if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>a(e,r),l={module:{uri:r},exports:c,require:f};i[r]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(d(...e),c)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/01/hello-world/index.html",revision:"6f7684fbed8f95242073c8fae614a506"},{url:"2022/03/05/docsify/index.html",revision:"b02a9293435d1e991565520cff4adabd"},{url:"2022/03/08/pyinstaller/index.html",revision:"17e1b9de57c4a3301c6e48270ea56077"},{url:"2022/03/12/fluid-config/index.html",revision:"17c43b9fbbd149e87ebff6a911821865"},{url:"404.html",revision:"bd0b3e1cc96355c4b277505b4073c34d"},{url:"archives/2022/03/index.html",revision:"704697131db247551255f33202bba7ae"},{url:"archives/2022/index.html",revision:"d418cca2a647ba80bd005720ab0b2f40"},{url:"archives/index.html",revision:"2108866137a43f1ce898f60371a4f61d"},{url:"categories/index.html",revision:"2fbbe6e84e757b0ae77eca7918efee13"},{url:"categories/教程/index.html",revision:"e327e01e30ea66f2ec2b4db530b35a42"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/mac.css",revision:"b767e9e92dfa6163a6f0f22616daf04a"},{url:"css/main.css",revision:"18cb051c33f547c8f5ec2afdc833086c"},{url:"go.html",revision:"0c55af851dbfd4f5503598e8eba5136a"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"3029f16f44f99b2b273ad34178906ead"},{url:"js/boot.js",revision:"9a954f041665f6c6dd239e94803cd150"},{url:"js/color-schema.js",revision:"6552e853a9a711bc68ba3319a7ddfdff"},{url:"js/events.js",revision:"035809ecd3b1aa9612c11c9b0bf71387"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"26ff27e9c7abf1d66d5bf0acab1a5d76"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"017e220f2a03605608af09e6f8464323"},{url:"js/utils.js",revision:"8a0ef4d80a973a1514c6d22a24fac883"},{url:"links/index.html",revision:"88032aa3dc3f16e15b5c783f20515aef"},{url:"music/index.html",revision:"d93eed78cf85a90d7f651c2887ed2b84"},{url:"tags/docsify/index.html",revision:"27e3813d41023b8ee518d60067284e0f"},{url:"tags/Fluid/index.html",revision:"7d43a5c65a7ba33a9274230f87d59a5f"},{url:"tags/Hexo/index.html",revision:"77a2baf180f6a72393ec3cc231f7e22c"},{url:"tags/index.html",revision:"5def2ecee9c3aba5c0e9f101744db528"},{url:"tags/pyinstaller/index.html",revision:"23e4db036cbf7b9f2aaac179e5f7b4ea"},{url:"tags/静态博客/index.html",revision:"3121e264db6638f7addfd9ebf7f9f491"},{url:"tags/静态站点/index.html",revision:"b3229b99b1b901b06369d2cebb2459d8"}],{})}));
//# sourceMappingURL=service-worker.js.map
