/* i4U guide — offline cache (screens only) */
const CACHE = 'i4u-guide-offline-v7';
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./sw.js", "./offline.html", "./i4u-mark.png", "./img/video_done.webp", "./img/ai0.webp", "./img/analysis.webp", "./img/w_efir.webp", "./img/group.webp", "./img/home_progress.webp", "./img/home.webp", "./img/efir_live.webp", "./img/ent.webp", "./img/w_wars.webp", "./img/efir_answer.webp", "./img/test_multi.webp", "./img/w_lesson.webp", "./img/news.webp", "./img/shop.webp", "./img/course_locked.webp", "./img/trainer_q.webp", "./img/coins.webp", "./img/w_schedule.webp", "./img/battle_info.webp", "./img/tourn.webp", "./img/test.webp", "./img/note_sheet.webp", "./img/efir_card.webp", "./img/schedule_week.webp", "./img/push.webp", "./img/w_games.webp", "./img/test_match.webp", "./img/battle_invite.webp", "./img/game.webp", "./img/result.webp", "./img/games.webp", "./img/w_home.webp", "./og.jpg", "./fonts/nunito.css", "./fonts/4b1116742a98.woff2", "./fonts/2019ed2c3ea9.woff2", "./fonts/231ef2633d05.woff2", "./fonts/ddf576f5c2b2.woff2", "./fonts/484dbd7665fb.woff2"];
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const url of ASSETS) { try { await cache.add(url); } catch (e) {} }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith((async () => {
    const u = new URL(req.url);
    const netFirst = /\.(js|css|html|webmanifest)$/.test(u.pathname) || u.pathname.endsWith('/');
    if (netFirst) {
      try {
        const res = await fetch(req);
        if (res.ok) { const c = await caches.open(CACHE); c.put(req, res.clone()); }
        return res;
      } catch (e) {
        return (await caches.match(req, { ignoreSearch: true })) || (await caches.match('./index.html')) || Response.error();
      }
    }
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res.ok && u.origin === self.location.origin) {
        (await caches.open(CACHE)).put(req, res.clone());
      }
      return res;
    } catch (e) {
      return (await caches.match('./index.html')) || Response.error();
    }
  })());
});
