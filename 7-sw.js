const C='cacc-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest'])).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET'||new URL(r.url).origin!=location.origin)return;
 e.respondWith(fetch(r).then(x=>{const y=x.clone();caches.open(C).then(c=>c.put(r,y));return x}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))))});
