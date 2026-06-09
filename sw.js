/**
 * PyroData CZ — Service Worker
 * Enables offline caching and resolves Lighthouse cache-control warnings
 */

const CACHE_NAME = 'pyrodata-cache-v1.2.8';
const ASSETS = [
  './',
  './index.html',
  './style.css?v=1.2.8',
  './db_data.js?v=1.2.8',
  './db_compositions.js?v=1.2.8',
  './script.js?v=1.2.8',
  './robots.txt',
  './sitemap.xml'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  
  // Only cache same-origin requests
  if (url.origin !== self.location.origin) return;

  if (url.pathname.endsWith('/') || url.pathname.endsWith('index.html')) {
    // Network-First for main page
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-First for assets
    e.respondWith(
      caches.match(e.request).then(cachedRes => {
        if (cachedRes) return cachedRes;
        return fetch(e.request).then(res => {
          if (!res || res.status !== 200 || res.type !== 'basic') return res;
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        });
      })
    );
  }
});