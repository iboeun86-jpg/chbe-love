// CH🤍BE 알림 받기
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("push",e=>{let d={};try{d=e.data?e.data.json():{};}catch(_){d={title:"CH🤍BE",body:e.data&&e.data.text()};}
  e.waitUntil(self.registration.showNotification(d.title||"CH🤍BE",{body:d.body||"",icon:"icon-192.png",badge:"icon-192.png",data:{url:self.registration.scope},tag:d.tag}));});
self.addEventListener("notificationclick",e=>{e.notification.close();const url=(e.notification.data&&e.notification.data.url)||self.registration.scope;
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(cs=>{for(const c of cs){if("focus" in c)return c.focus();}return self.clients.openWindow(url);}));});
