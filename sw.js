// Минимален service worker: позволява инсталиране като приложение.
// Не пази стари версии — всичко идва винаги от мрежата.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
