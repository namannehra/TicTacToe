// 0.2.0
importScripts('assets/cache-polyfill.js');
var toCache = [
	'.',
	'tic-tac-toe/tic-tac-toe.html'
];
self.addEventListener('install', function(e) {
	e.waitUntil(caches.open('cache').then(function(cache) {
		return cache.addAll(toCache);
	}));
});
self.addEventListener('fetch', function(e) {
	e.respondWith(caches.match(e.request).then(function(res) {
		if (res) {
			return res;
		}
		return fetch(e.request);
	}));
});