/* 甘犬 もか — 表示・メニュー・画像拡大・LIVE状態 */

(() => {
  'use strict';

  const config = window.MOKA_CONFIG || {};
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  function externalUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return '';

    try {
      const url = new URL(value);

      return url.protocol === 'https:' || url.protocol === 'http:'
        ? url.href
        : '';
    } catch {
      return '';
    }
  }

  function imageUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return '';

    try {
      const url = new URL(value, document.baseURI);

      return ['https:', 'http:', 'file:'].includes(url.protocol)
        ? url.href
        : '';
    } catch {
      return '';
    }
  }

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text !== undefined) element.textContent = String(text);

    return element;
  }

  function setExternalLink(element, value) {
    const url = externalUrl(value);

    if (!url) {
      element.hidden = true;
      return false;
    }

    element.href = url;
    element.target = '_blank';
    element.rel = 'noopener noreferrer';
    element.hidden = false;

    return true;
  }

  // 読み込みに失敗した画像は非表示にします。
  function loadOptionalImage(element, value, onSuccess, onError) {
    const url = imageUrl(value);

    if (!url || !element) return;

    const success = () => {
      element.hidden = false;
      if (onSuccess) onSuccess();
    };

    const failure = () => {
      element.hidden = true;
      if (onError) onError();
    };

    element.addEventListener('load', success, { once: true });
    element.addEventListener('error', failure, { once: true });

    element.src = url;

    if (element.complete) {
      if (element.naturalWidth > 0) {
        success();
      } else {
        failure();
      }
    }
  }

  // 名前・キャッチコピー
  if (config.name) {
    const parts = String(config.name).trim().split(/\s+/);

    $('#hero-title').replaceChildren(
      document.createTextNode(parts[0])
    );

    if (parts.length > 1) {
      $('#hero-title').append(
        document.createTextNode(' '),
        makeElement('span', '', parts.slice(1).join(' '))
      );
    }
  }

  if (config.tagline) {
    $('#hero-tagline').textContent =
      config.tagline.replace('。夜', '。\n夜');
  }

  $('#copyright-year').textContent =
    String(new Date().getFullYear());

  // SNSリンク
  $$('[data-social]').forEach((link) => {
    const key = link.dataset.social;

    if (config.links && Object.hasOwn(config.links, key)) {
      setExternalLink(link, config.links[key]);
    }
  });

  if (setExternalLink($('#fan-link'), config.links?.fanServer)) {
    $('#fan-pending').hidden = true;
  }

  // TOP画像・任意の画像
  const assets = config.images || {};
  const character = $('#character-image');

  if (assets.characterAlt) {
    character.alt = assets.characterAlt;
  }

  $('#hero-visual').classList.toggle(
    'cutout',
    assets.characterMode === 'cutout'
  );

  $('#hero-visual').classList.toggle(
    'portrait',
    assets.characterMode === 'portrait'
  );

  loadOptionalImage(
    character,
    assets.character,
    () => {
      $('#hero-visual').hidden = false;
      $('#home').classList.add('has-character');
    },
    () => {
      $('#hero-visual').hidden = true;
      $('#home').classList.remove('has-character');
    }
  );

  loadOptionalImage(
    $('#brand-image'),
    assets.logo,
    () => {
      $('#brand-type').hidden = true;
    },
    () => {
      $('#brand-type').hidden = false;
    }
  );

  loadOptionalImage($('#moon-image'), assets.moon);

  const wallpaperUrl = imageUrl(assets.wallpaper);

  if (wallpaperUrl) {
    const wallpaper = new Image();

    wallpaper.addEventListener(
      'load',
      () => {
        document.body.style.backgroundImage =
          `url(${JSON.stringify(wallpaperUrl)})`;

        document.body.classList.add('has-wallpaper');
      },
      { once: true }
    );

    wallpaper.src = wallpaperUrl;
  }

  // お知らせ
  if (
    Array.isArray(config.news) &&
    config.news.some((item) => item?.title)
  ) {
    const fragment = document.createDocumentFragment();

    config.news
      .filter((item) => item?.title)
      .forEach((item) => {
        const url = externalUrl(item.url);
        const row = makeElement(
          url ? 'a' : 'article',
          'news-item'
        );

        if (url) setExternalLink(row, url);

        if (/^\d{4}-\d{2}-\d{2}$/.test(item.date || '')) {
          const date = makeElement(
            'time',
            'news-date',
            item.date.replaceAll('-', '.')
          );

          date.dateTime = item.date;
          row.append(date);
        }

        row.append(
          makeElement(
            'span',
            'news-category',
            item.category || 'NEWS'
          )
        );

        row.append(
          makeElement('h3', 'news-title', item.title)
        );

        if (url) {
          const arrow = makeElement(
            'span',
            'news-arrow',
            '↗'
          );

          arrow.setAttribute('aria-hidden', 'true');
          row.append(arrow);
        }

        fragment.append(row);
      });

    $('#news-list').replaceChildren(fragment);
  }

  // 日時はタイムゾーンを明記したISO形式で入力します。
  function zonedTimestamp(value) {
    if (
      typeof value !== 'string' ||
      !/T.*(?:Z|[+-]\d{2}:\d{2})$/i.test(value)
    ) {
      return NaN;
    }

    return Date.parse(value);
  }

  const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    month: '2-digit',
    day: '2-digit',
  });

  const timeFormatter = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

  const scheduleContent = $('#schedule-content');
  const scheduleFallback = scheduleContent.firstElementChild;

  const scheduledItems = Array.isArray(config.schedule)
    ? config.schedule
        .filter(
          (item) =>
            item?.title &&
            Number.isFinite(zonedTimestamp(item.start))
        )
        .sort(
          (a, b) =>
            zonedTimestamp(a.start) -
            zonedTimestamp(b.start)
        )
    : [];

  function renderTextSchedule() {
    if (!scheduledItems.length) {
      scheduleContent.replaceChildren(scheduleFallback);
      return;
    }

    const fragment = document.createDocumentFragment();

    scheduledItems.forEach((item) => {
      const date = new Date(item.start);
      const url = externalUrl(item.url);

      const row = makeElement(
        url ? 'a' : 'article',
        'schedule-row'
      );

      if (url) setExternalLink(row, url);

      const time = makeElement(
        'time',
        'schedule-date',
        dateFormatter.format(date)
      );

      time.dateTime = item.start;

      time.append(
        makeElement(
          'small',
          '',
          timeFormatter.format(date)
        )
      );

      const details = makeElement(
        'div',
        'schedule-details'
      );

      details.append(
        makeElement('h3', '', item.title)
      );

      if (item.platform) {
        details.append(
          makeElement('p', '', item.platform)
        );
      }

      row.append(time, details);

      if (url) {
        const arrow = makeElement(
          'span',
          'news-arrow',
          '↗'
        );

        arrow.setAttribute('aria-hidden', 'true');
        row.append(arrow);
      }

      fragment.append(row);
    });

    scheduleContent.replaceChildren(fragment);
  }

  renderTextSchedule();

  // 任意のスケジュール画像
  const scheduleImageUrl = imageUrl(assets.schedule);

  if (scheduleImageUrl) {
    const link = makeElement(
      'a',
      'schedule-image-link'
    );

    link.href = scheduleImageUrl;
    link.dataset.lightbox = '';
    link.dataset.caption =
      assets.scheduleAlt || '配信スケジュール';

    const img = makeElement('img');

    img.alt =
      assets.scheduleAlt ||
      '甘犬 もかの配信スケジュール';

    img.loading = 'lazy';

    link.append(img);
    scheduleContent.replaceChildren(link);

    loadOptionalImage(
      img,
      scheduleImageUrl,
      null,
      renderTextSchedule
    );
  }

  // LIVE中の判定
  function isLiveNow(live, now) {
    if (
      !live ||
      live.enabled !== true ||
      !externalUrl(live.url)
    ) {
      return false;
    }

    const hasStart =
      typeof live.startsAt === 'string' &&
      live.startsAt.trim() !== '';

    const hasEnd =
      typeof live.endsAt === 'string' &&
      live.endsAt.trim() !== '';

    const start = hasStart
      ? zonedTimestamp(live.startsAt)
      : -Infinity;

    const end = hasEnd
      ? zonedTimestamp(live.endsAt)
      : Infinity;

    if (
      Number.isNaN(start) ||
      Number.isNaN(end) ||
      start >= end
    ) {
      return false;
    }

    return start <= now && now < end;
  }

  const liveElements = [
    $('#hero-live'),
    $('#schedule-live'),
  ];

  function refreshLiveStatus() {
    const live = (window.MOKA_CONFIG || {}).live;
    const active = isLiveNow(live, Date.now());

    liveElements.forEach((element) => {
      element.hidden = !active;

      if (active) {
        setExternalLink(element, live.url);

        element.querySelector(
          '[data-live-title]'
        ).textContent =
          live.title || '配信を見にいく';
      }
    });
  }

  refreshLiveStatus();

  if (config.live?.enabled === true) {
    window.setInterval(refreshLiveStatus, 15000);
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) refreshLiveStatus();
  });

  // ギャラリー
  if (Array.isArray(config.gallery)) {
    const gallery = $('#media-gallery');
    const fragment = document.createDocumentFragment();

    config.gallery.forEach((item, index) => {
      const url = imageUrl(item?.image);

      if (!url) return;

      const link = makeElement('a', 'media-card');

      link.hidden = true;
      link.href = url;
      link.dataset.lightbox = '';
      link.dataset.caption = item.title || 'Visual';

      const img = makeElement('img');

      img.alt =
        item.alt ||
        item.title ||
        '甘犬 もかのビジュアル';

      img.loading = 'eager';

      img.addEventListener(
        'load',
        () => {
          link.hidden = false;
          $('#media').hidden = false;
          $('#media-nav').hidden = false;
        },
        { once: true }
      );

      img.addEventListener(
        'error',
        () => {
          link.remove();

          if (
            !gallery.querySelector(
              '.media-card:not([hidden])'
            )
          ) {
            $('#media').hidden = true;
            $('#media-nav').hidden = true;
          }
        },
        { once: true }
      );

      img.src = url;

      const caption = makeElement(
        'span',
        'media-caption'
      );

      caption.append(
        makeElement(
          'span',
          '',
          `${String(index + 1).padStart(2, '0')} / ${
            item.title || 'VISUAL'
          }`
        )
      );

      const arrow = makeElement(
        'span',
        'media-open',
        '↗'
      );

      arrow.setAttribute('aria-hidden', 'true');

      caption.append(arrow);
      link.append(img, caption);
      fragment.append(link);
    });

    gallery.replaceChildren(fragment);
  }

  // PRODUCTION
  if (
    config.production?.text ||
    externalUrl(config.production?.url)
  ) {
    $('#production').hidden = false;
    $('#production-nav').hidden = false;

    $('#production-text').textContent =
      config.production.text || '';

    const link = $('#production-link');

    if (setExternalLink(link, config.production.url)) {
      link.textContent =
        `${config.production.label || '詳しく見る'} ↗`;
    }
  }

  // スマホ用メニュー
  const menuButton = $('#menu-toggle');
  const nav = $('#main-nav');

  const mobileQuery = window.matchMedia(
    '(max-width: 800px)'
  );

  function setMenu(open, returnFocus = false) {
    menuButton.setAttribute(
      'aria-expanded',
      String(open)
    );

    menuButton.setAttribute(
      'aria-label',
      open ? 'メニューを閉じる' : 'メニューを開く'
    );

    nav.hidden = mobileQuery.matches && !open;

    if (returnFocus) menuButton.focus();
  }

  function resetMenu() {
    menuButton.hidden = !mobileQuery.matches;
    setMenu(false);
  }

  menuButton.addEventListener('click', () => {
    setMenu(
      menuButton.getAttribute('aria-expanded') !== 'true'
    );
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a[href^="#"]')) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      menuButton.getAttribute('aria-expanded') === 'true'
    ) {
      setMenu(false, true);
    }
  });

  document.addEventListener('click', (event) => {
    if (
      mobileQuery.matches &&
      !$('#site-header').contains(event.target)
    ) {
      setMenu(false);
    }
  });

  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener('change', resetMenu);
  } else {
    mobileQuery.addListener(resetMenu);
  }

  document.documentElement.classList.add('js-menu');
  resetMenu();

  // 画像拡大
  const dialog = $('#image-dialog');
  let imageOpener = null;

  if (typeof dialog.showModal === 'function') {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('[data-lightbox]');

      if (
        !link ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const img = link.querySelector('img');

      if (!img) return;

      event.preventDefault();

      imageOpener = link;

      $('#dialog-image').src = link.href;
      $('#dialog-image').alt = img.alt;
      $('#dialog-caption').textContent =
        link.dataset.caption || '';

      document.body.classList.add('dialog-open');
      dialog.showModal();
    });

    $('#dialog-close').addEventListener('click', () => {
      dialog.close();
    });

    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;

      const box = dialog.getBoundingClientRect();

      if (
        event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom
      ) {
        dialog.close();
      }
    });

    dialog.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');

      if (imageOpener?.isConnected) {
        imageOpener.focus();
      }
    });
  }

  // スクロール時の表示演出
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  if (
    'IntersectionObserver' in window &&
    !reducedMotion.matches
  ) {
    const observer = new IntersectionObserver(
      (entries, current) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove('is-waiting');
          entry.target.classList.add('is-visible');

          current.unobserve(entry.target);
        });
      },
      { threshold: .06 }
    );

    $$('.reveal').forEach((element) => {
      if (!element.hidden) {
        observer.observe(element);
        element.classList.add('is-waiting');
      }
    });

    if (reducedMotion.addEventListener) {
      reducedMotion.addEventListener('change', (event) => {
        if (!event.matches) return;

        observer.disconnect();

        $$('.reveal').forEach((element) => {
          element.classList.remove('is-waiting');
        });
      });
    }
  }

  // 表示中のセクションをナビゲーションに反映
  if ('IntersectionObserver' in window) {
    const activeSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          $$('.main-nav a').forEach((link) => {
            if (link.hash === `#${entry.target.id}`) {
              link.setAttribute(
                'aria-current',
                'location'
              );
            } else {
              link.removeAttribute('aria-current');
            }
          });
        });
      },
      {
        rootMargin: '-15% 0px -65% 0px',
        threshold: 0,
      }
    );

    $$('main section[id]')
      .filter((section) => !section.hidden)
      .forEach((section) => {
        activeSectionObserver.observe(section);
      });
  }
})();
