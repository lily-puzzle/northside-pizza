/* NORTHSIDE PIZZA offline app. Increment CACHE_VERSION when deploying changes. */
const CACHE_VERSION='northside-pizza-v44-pwa-20261121-1';
const CORE_FILES=[
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png',
  './icons/apple-touch-icon.png'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache=>cache.addAll(CORE_FILES)).then(()=>self.skipWaiting())
  );
});
self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('northside-pizza-')&&key!==CACHE_VERSION).map(key=>caches.delete(key)))).then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const uri=new URL(request.url);
  if(uri.origin!==self.location.origin)return;
  const scopePath=new URL('./',self.location.href).pathname;
  if(!uri.pathname.startsWith(scopePath))return;
  if(request.mode==='navigate'){
    event.respondWith(
      fetch(request).then(async response=>{
        if(response.ok){const cache=await caches.open(CACHE_VERSION);await cache.put('./index.html',response.clone());}
        return response;
      }).catch(async()=>{
        const cache=await caches.open(CACHE_VERSION);
        return (await cache.match('./index.html'))||(await cache.match('./'))||Response.error();
      })
    );
    return;
  }
  event.respondWith(
    caches.match(request).then(cached=>cached || fetch(request).then(response=>{
      if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE_VERSION).then(cache=>cache.put(request,copy)));}
      return response;
    }))
  );
});
