import { generateSW } from 'workbox-build';

generateSW({
  globDirectory: 'dist',
  globPatterns: ['**/*.{html,js,css,woff2,webp,avif}'],
  swDest: 'dist/sw.js',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: ({request}) => request.destination === 'image',
    handler: 'CacheFirst',
    options: { cacheName: 'images', expiration: { maxEntries: 50 } }
  }]
});
