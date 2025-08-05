// Service Worker for Unmesh Achar's Portfolio
// Provides offline functionality and performance optimization

const CACHE_NAME = 'unmesh-portfolio-v1.0.0';
const STATIC_CACHE_NAME = `${CACHE_NAME}-static`;
const DYNAMIC_CACHE_NAME = `${CACHE_NAME}-dynamic`;

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/mobile-fix.css',
  '/script.js',
  '/manifest.json',
  '/profile-photo.jpg',
  '/resume-unmesh-achar.pdf',
  // External CDN resources
  'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

// Network-first assets (always try network first)
const NETWORK_FIRST_PATTERNS = [
  '/api/',
  'https://api.github.com/',
  'https://leetcode.com/'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Service worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - handle requests with appropriate caching strategy
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http(s) schemes
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Network-first strategy for API calls and dynamic content
  if (NETWORK_FIRST_PATTERNS.some(pattern => request.url.includes(pattern))) {
    event.respondWith(networkFirst(request));
    return;
  }
  
  // Cache-first strategy for static assets
  if (STATIC_ASSETS.some(asset => {
    if (asset.startsWith('http')) {
      return request.url === asset;
    }
    return url.pathname === asset || url.pathname === asset.replace('/', '');
  })) {
    event.respondWith(cacheFirst(request));
    return;
  }
  
  // Stale-while-revalidate for other requests
  event.respondWith(staleWhileRevalidate(request));
});

// Cache-first strategy
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache-first failed:', error);
    return new Response('Offline content not available', { status: 503 });
  }
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Content not available offline', { status: 503 });
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Silently fail network requests in background update
    return null;
  });
  
  return cachedResponse || fetchPromise || new Response('Content not available', { status: 503 });
}

// Background sync for form submissions (future enhancement)
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(handleContactFormSync());
  }
});

async function handleContactFormSync() {
  // Future implementation for offline form submissions
  console.log('[SW] Background sync for contact form');
}

// Push notification handler (future enhancement)
self.addEventListener('push', event => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/android-chrome-192x192.png',
    badge: '/android-chrome-192x192.png',
    vibrate: [200, 100, 200],
    data: data.url,
    actions: [
      {
        action: 'open',
        title: 'View',
        icon: '/android-chrome-192x192.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data || '/')
    );
  }
});

console.log('[SW] Service worker script loaded');