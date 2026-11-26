/* i4U guide — offline cache */
const CACHE = 'i4u-guide-offline-v6';
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./sw.js", "./offline.html", "./mock/", "./mock/index.html", "./i4u-mark.png", "./img/video_done.webp", "./img/ai0.webp", "./img/analysis.webp", "./img/w_efir.webp", "./img/group.webp", "./img/home_progress.webp", "./img/home.webp", "./img/efir_live.webp", "./img/ent.webp", "./img/w_wars.webp", "./img/efir_answer.webp", "./img/test_multi.webp", "./img/w_lesson.webp", "./img/news.webp", "./img/shop.webp", "./img/course_locked.webp", "./img/trainer_q.webp", "./img/coins.webp", "./img/w_schedule.webp", "./img/battle_info.webp", "./img/tourn.webp", "./img/test.webp", "./img/note_sheet.webp", "./img/efir_card.webp", "./img/schedule_week.webp", "./img/push.webp", "./img/w_games.webp", "./img/test_match.webp", "./img/battle_invite.webp", "./img/game.webp", "./img/result.webp", "./img/games.webp", "./img/w_home.webp", "./og.jpg", "./fonts/nunito.css", "./fonts/4b1116742a98.woff2", "./fonts/2019ed2c3ea9.woff2", "./fonts/231ef2633d05.woff2", "./fonts/ddf576f5c2b2.woff2", "./fonts/484dbd7665fb.woff2", "./mock/README.md", "./mock/css/app.css", "./mock/js/probnik.js", "./mock/js/data.js", "./mock/js/i18n.js", "./mock/js/app.js", "./mock/fonts/oswald.css", "./mock/fonts/af00f7774b2e.woff2", "./mock/fonts/5930b85bd671.woff2", "./mock/fonts/material-icons-outlined.woff2", "./mock/fonts/69f8ada8b1da.woff2", "./mock/fonts/material-icons-round.css", "./mock/fonts/material-icons-round.woff2", "./mock/fonts/0665b4b4e153.woff2", "./mock/fonts/c27e7c116ee8.woff2", "./mock/fonts/material-icons-outlined.css", "./mock/assets/subjectsv2.png", "./mock/assets/shopv2.png", "./mock/assets/math.png", "./mock/assets/testv2.png", "./mock/assets/analyticsv2.png", "./mock/assets/profv2.png", "./mock/assets/math_2.png", "./mock/assets/tournament/duel.svg", "./mock/assets/tournament/games_line.svg", "./mock/assets/tournament/battle_line.png", "./mock/assets/tournament/cup_line.svg", "./mock/assets/tournament/register.svg", "./mock/assets/tournament/cup_line.png", "./mock/assets/tournament/battle_line.svg", "./mock/assets/tournament/games_line.png", "./mock/assets/tournament/trophy.svg", "./mock/assets/tournament/tournament_line.png", "./mock/assets/tournament/clash_line.png", "./mock/assets/tournament/clash_line.svg", "./mock/assets/tournament/medal.svg", "./mock/assets/tournament/tournament_line.svg", "./mock/assets/tournament/belt_icon.png", "./mock/assets/tournament/belt.png", "./mock/assets/v2/news.png", "./mock/assets/v2/upload_file.png", "./mock/assets/v2/history_kz.png", "./mock/assets/v2/notification copy.png", "./mock/assets/v2/history_world.png", "./mock/assets/v2/law.png", "./mock/assets/v2/subjectsv2.png", "./mock/assets/v2/courses.png", "./mock/assets/v2/chemistry.png", "./mock/assets/v2/home.png", "./mock/assets/v2/eng.png", "./mock/assets/v2/shopv2.png", "./mock/assets/v2/physics.png", "./mock/assets/v2/ai_chat_icon.png", "./mock/assets/v2/eng_uk.png", "./mock/assets/v2/math.png", "./mock/assets/v2/testv2.png", "./mock/assets/v2/video.png", "./mock/assets/v2/analyticsv2.png", "./mock/assets/v2/informatics.png", "./mock/assets/v2/bio.png", "./mock/assets/v2/geo.png", "./mock/assets/v2/history_kz_berkut.png", "./mock/assets/v2/profv2.png", "./mock/assets/v2/combov2.png", "./mock/assets/v2/notification.png", "./mock/assets/v2/send.png", "./mock/assets/v2/math_2.png", "./mock/assets/v2/kaz_lang.png", "./mock/assets/coin/coin.svg", "./mock/assets/coin/coin.png", "./mock/assets/logo/ai3.png", "./mock/assets/live/news.png", "./mock/assets/live/home_scroll.png", "./mock/assets/live/shop_buy.jpg", "./mock/assets/live/shop_frames.png", "./mock/assets/live/shop_titles.png", "./mock/assets/live/courses.png", "./mock/assets/live/professions2.png", "./mock/assets/live/tournament_detail.jpg", "./mock/assets/live/uni_list.png", "./mock/assets/live/home.jpg", "./mock/assets/live/courses_week_cal.png", "./mock/assets/live/lesson_video.png", "./mock/assets/live/tournaments.png", "./mock/assets/live/news2.png", "./mock/assets/live/professions.png", "./mock/assets/live/home_full.jpg", "./mock/assets/live/groups2.png", "./mock/assets/live/tournament_table.png", "./mock/assets/live/staff_home.jpg", "./mock/assets/live/shop_inv.png", "./mock/assets/live/profile.jpg", "./mock/assets/live/analytics_week.png", "./mock/assets/live/shop_themes.png", "./mock/assets/live/analytics.png", "./mock/assets/live/shop_gifts.jpg", "./mock/assets/live/subjects.png", "./mock/assets/live/shop_titles2.png", "./mock/assets/live/groups.png", "./mock/assets/live/courses_week.png", "./mock/assets/live/battle_hist.png", "./mock/assets/live/trainer.png", "./mock/assets/live/courses_month.png", "./mock/assets/live/analytics_score.png", "./mock/assets/avatar/me.jpg", "./mock/assets/champion/belt.png", "./mock/assets/fonts/Roboto-Medium.ttf", "./mock/assets/fonts/Roboto-Regular.ttf", "./mock/assets/fonts/Roboto-Bold.ttf", "./mock/vendor/katex/auto-render.min.js", "./mock/vendor/katex/katex.min.css", "./mock/vendor/katex/katex.min.js", "./mock/vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Main-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_Main-BoldItalic.woff", "./mock/vendor/katex/fonts/KaTeX_AMS-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Size3-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Main-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff2", "./mock/vendor/katex/fonts/KaTeX_Typewriter-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_Main-Italic.woff", "./mock/vendor/katex/fonts/KaTeX_SansSerif-Bold.woff2", "./mock/vendor/katex/fonts/KaTeX_Math-Italic.woff2", "./mock/vendor/katex/fonts/KaTeX_Size4-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Fraktur-Bold.woff2", "./mock/vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff", "./mock/vendor/katex/fonts/KaTeX_Fraktur-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_SansSerif-Italic.woff2", "./mock/vendor/katex/fonts/KaTeX_Main-Bold.woff2", "./mock/vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Size2-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_Main-BoldItalic.woff2", "./mock/vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Script-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Size4-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_Size3-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_AMS-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_Main-Bold.woff", "./mock/vendor/katex/fonts/KaTeX_Size1-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_SansSerif-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_Math-Italic.woff", "./mock/vendor/katex/fonts/KaTeX_Math-BoldItalic.woff2", "./mock/vendor/katex/fonts/KaTeX_SansSerif-Italic.woff", "./mock/vendor/katex/fonts/KaTeX_Main-Italic.woff2", "./mock/vendor/katex/fonts/KaTeX_Size1-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Fraktur-Bold.woff", "./mock/vendor/katex/fonts/KaTeX_Script-Regular.woff", "./mock/vendor/katex/fonts/KaTeX_Math-BoldItalic.woff", "./mock/vendor/katex/fonts/KaTeX_Size2-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff2", "./mock/vendor/katex/fonts/KaTeX_SansSerif-Bold.woff"];
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
    // network-first for JS so admin-panel fixes appear immediately
    const u = new URL(req.url);
    const isJs = u.pathname.endsWith('.js') || u.pathname.endsWith('.css') || u.pathname.endsWith('.html') || u.pathname.endsWith('/');
    if (isJs) {
      try {
        const res = await fetch(req);
        if (res.ok) {
          const cache = await caches.open(CACHE);
          cache.put(req, res.clone());
          // also store without query for ignoreSearch fallbacks
          try { cache.put(u.pathname.replace(/\/i4u-guide/, '.') /* noop */, res.clone()); } catch (e) {}
        }
        return res;
      } catch (e) {
        const cached = await caches.match(req, { ignoreSearch: true });
        if (cached) return cached;
        return (await caches.match('./index.html')) || Response.error();
      }
    }
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res.ok && u.origin === self.location.origin) {
        const cache = await caches.open(CACHE);
        cache.put(req, res.clone());
      }
      return res;
    } catch (e) {
      return (await caches.match('./index.html')) || Response.error();
    }
  })());
});
