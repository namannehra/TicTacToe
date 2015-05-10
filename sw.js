// 0.2.2
importScripts('assets/cache-polyfill.js');
var toCache = [
	'.',
	'tic-tac-toe/tic-tac-toe.html',
	'icons/icon-1x.png',
	'icons/icon-2x.png',
	'icons/icon-3x.png',
	'icons/icon-4x.png'
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