"use strict";

/* =========================
   実際のdistの画像名に合わせた設定
========================= */

const siteConfig = {
  logo: "./dist/logo.png",

  images: {
    // 拡張子は大文字の .PNG
    main: "./dist/moka-main.PNG",
    profile: "./dist/moka-profile.png"
  },

  partners: [
    {
      relation: "兄",
      name: "やまと",
      english: "Yamato",
      image: "./dist/yamato.png",
      alt: "兄猫 やまと"
    },
    {
      relation: "妹",
      name: "はる",
      english: "Haru",
      image: "./dist/haru.png",
      alt: "妹猫 はる"
    }
  ],

  gallery: [
    {
      title: "キャラクター紹介",
      image: "./dist/character-01.png",
      alt: "甘犬もかのキャラクター紹介"
    },
    {
      title: "キャラクターデザイン",
      image: "./dist/character-02.png",
      alt: "甘犬もかのキャラクターデザイン"
    },
    {
      title: "初期モデル / デザイン資料 01",
      image: "./dist/character-03.png",
      alt: "甘犬もかの初期モデル デザイン資料1"
    },
    {
      title: "初期モデル / デザイン資料 02",
      image: "./dist/character-04.png",
      alt: "甘犬もかの初期モデル デザイン資料2"
    }
  ],

  // コンタクトページにのみ掲載
  litlinkUrl: "https://lit.link/amainumoka",

  // 入力するとコンタクトのリットリンクをフォームに切り替えます。
  businessFormUrl: ""
};

/* =========================
   プロフィール・リンク・タグ
========================= */

const youtubeChannelURL =
  "https://www.youtube.com/channel/UCH4GQz6j6P_DfWzfAFF0vpA";

const xAccountURL = "https://twitter.com/96moka_ocd";

const creatorData = [
  {
    role: "キャラクターデザイン",
    name: "りなる",
    account: "@Orinaru_pipi",
    url: "https://x.com/Orinaru_pipi"
  },
  {
    role: "イラスト担当 / ママ",
    name: "とまつかぜ",
    account: "@tomatsukaze",
    url: "https://x.com/tomatsukaze"
  },
  {
    role: "モデリング担当 / パパ",
    name: "INO",
    account: "@ino_artworks",
    url: "https://x.com/ino_artworks"
  }
];

const linkData = [
  {
    name: "YouTube",
    description: "配信・動画・ショート",
    url: "https://youtube.com/@amainu_moka"
  },
  {
    name: "Twitch",
    description: "ライブ配信",
    url: "https://www.twitch.tv/amainu_moka"
  },
  {
    name: "TikTok",
    description: "ショート動画",
    url: "https://www.tiktok.com/@amainu.moka"
  },
  {
    name: "Instagram",
    description: "写真・お知らせ",
    url: "https://www.instagram.com/moka_ocd/"
  },
  {
    name: "X",
    description: "活動のお知らせ・日常",
    url: xAccountURL
  },
  {
    name: "FANBOX",
    description: "活動の応援・限定コンテンツ",
    url: "https://amainu-moka.fanbox.cc"
  },
  {
    name: "BOOTH",
    description: "オリジナルグッズ",
    url: "https://ama-moka.booth.pm"
  },
  {
    name: "ファンサーバー",
    description: "Discordコミュニティ",
    url: "https://discord.gg/sE7q4yhxyq"
  },
  {
    name: "ほしいものリスト",
    description: "活動への贈りもの",
    url: "https://amazon.jp/hz/wishlist/ls/3KU6RL19LZI7U?ref_=wl_share"
  }
];

const tagData = [
  { label: "総合", tag: "#甘犬もか" },
  { label: "ファンアート", tag: "#甘犬いらすと" },
  { label: "配信", tag: "#甘犬LIVE" },
  { label: "動画・ショート", tag: "#甘犬VIDEO" },
  { label: "感想・見てほしいもの", tag: "#甘犬あのね" },
  { label: "切り抜き", tag: "#甘犬クリップ" }
];

const workCategories = [
  "ALL",
  "メディア",
  "PR",
  "グッズ",
  "イベント",
  "ビジョン・広告"
];

const creditCategories = [
  { id: "bgm", label: "BGM", english: "Music" },
  { id: "sound", label: "効果音", english: "Sound Effects" },
  { id: "visual", label: "画像・GIF素材", english: "Images & GIF" },
  { id: "other", label: "その他", english: "Other Credits" }
];

/* =========================
   共通処理
========================= */

const $ = selector => document.querySelector(selector);

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

// script.js が置かれた場所を基準にします。
const scriptBase = new URL(
  ".",
  document.currentScript?.src || document.baseURI
);

const dataState = {
  news: { items: [], loaded: false, error: false },
  schedule: { items: [], loaded: false, error: false },
  works: { items: [], loaded: false, error: false },
  credits: { items: [], loaded: false, error: false }
};

let selectedWorkCategory = "ALL";

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[character];
  });
}

function safeURL(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  try {
    const url = new URL(value.trim());
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function safeImageURL(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  try {
    const url = new URL(value.trim(), scriptBase);

    return ["https:", "http:", "file:"].includes(url.protocol)
      ? url.href
      : "";
  } catch {
    return "";
  }
}

function paw(className = "paw-icon") {
  return `
    <svg
      class="${escapeHTML(className)}"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <use href="#icon-paw"></use>
    </svg>
  `;
}

function externalLink(url, label, className = "text-link") {
  const href = safeURL(url);

  if (!href) {
    return "";
  }

  return `
    <a
      class="${escapeHTML(className)}"
      href="${escapeHTML(href)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>${escapeHTML(label)}</span>
      ${paw()}
    </a>
  `;
}

function emptyPanel(title, text = "") {
  return `
    <div class="panel">
      <h2>${escapeHTML(title)}</h2>
      ${text ? `<p class="empty-message">${escapeHTML(text)}</p>` : ""}
    </div>
  `;
}

function validDate(value) {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatNewsDate(value) {
  const text = String(value || "");

  return /^\d{4}-\d{2}-\d{2}$/.test(text)
    ? text.replaceAll("-", ".")
    : text;
}

function formatScheduleDate(value) {
  const date = validDate(value);

  if (!date) {
    return "日時調整中";
  }

  const dateText = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
    day: "numeric",
    weekday: "short"
  }).format(date);

  const timeText = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);

  return `${dateText} ${timeText}`;
}

function createPlaceholder(title, label = "画像準備中") {
  return `
    <div class="image-placeholder">
      ${paw()}
      <p class="placeholder-title">${escapeHTML(title)}</p>
      <p class="placeholder-label">${escapeHTML(label)}</p>
    </div>
  `;
}

function insertImage(container, src, alt, fallbackHTML, eager = false) {
  if (!container) {
    return null;
  }

  const imageURL = safeImageURL(src);
  container.replaceChildren();

  if (!imageURL) {
    container.innerHTML = fallbackHTML;
    return null;
  }

  const image = document.createElement("img");
  image.alt = alt;
  image.decoding = "async";
  image.loading = eager ? "eager" : "lazy";

  image.addEventListener("error", () => {
    container.innerHTML = fallbackHTML;
    console.warn("画像を読み込めませんでした:", imageURL);
  }, { once: true });

  image.src = imageURL;
  container.append(image);

  return image;
}

async function playAnimation(element, frames, options) {
  if (
    !element ||
    reducedMotion.matches ||
    typeof element.animate !== "function"
  ) {
    return;
  }

  const animation = element.animate(frames, options);

  try {
    await animation.finished;
  } catch {
    // 連続操作で取り消された場合。
  }
}

/* =========================
   共通ロゴ
========================= */

function renderLogos() {
  const fallback = `<span class="logo-fallback">${paw()}</span>`;

  insertImage($("#headerLogo"), siteConfig.logo, "", fallback, true);
  insertImage($("#startupLogo"), siteConfig.logo, "", fallback, true);
}

/* =========================
   起動：肉球の足あとライン
========================= */

function initializeStartup() {
  const screen = $("#startupScreen");

  if (reducedMotion.matches) {
    screen.hidden = true;
    return;
  }

  const surfaces = [
    $(".site-header"),
    $("#main"),
    $(".site-footer")
  ];

  let finished = false;
  let started = false;
  const timers = [];

  function finish() {
    if (finished) {
      return;
    }

    finished = true;
    timers.forEach(timer => clearTimeout(timer));

    screen.hidden = true;
    screen.classList.remove("is-playing", "is-leaving");
    document.body.classList.remove("startup-active");

    surfaces.forEach(surface => {
      if (surface) {
        surface.inert = false;
      }
    });

    reducedMotion.removeEventListener("change", onMotionChange);
    window.removeEventListener("pagehide", finish);
  }

  function onMotionChange(event) {
    if (event.matches) {
      finish();
    }
  }

  function start() {
    if (started || finished) {
      return;
    }

    started = true;
    screen.classList.add("is-playing");

    timers.push(setTimeout(() => {
      if (!finished) {
        screen.classList.add("is-leaving");
      }
    }, 1600));

    timers.push(setTimeout(finish, 2200));
  }

  screen.hidden = false;
  document.body.classList.add("startup-active");

  surfaces.forEach(surface => {
    if (surface) {
      surface.inert = true;
    }
  });

  reducedMotion.addEventListener("change", onMotionChange);
  window.addEventListener("pagehide", finish, { once: true });

  // ロード失敗などでも起動画面を残し続けません。
  timers.push(setTimeout(finish, 3500));

  const image = $("#startupLogo img");

  if (image && !image.complete) {
    image.addEventListener("load", start, { once: true });
    image.addEventListener("error", start, { once: true });
    timers.push(setTimeout(start, 700));
  } else {
    start();
  }
}

/* =========================
   専用データの読込
========================= */

function loadDataScript(filename, globalName) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = new URL(filename, scriptBase).href;
    script.async = true;

    script.onload = () => {
      const source = window[globalName];

      if (!source || !Array.isArray(source.items)) {
        reject(new Error(`${filename} の items が見つかりません。`));
        return;
      }

      resolve(source.items.filter(
        item => item && typeof item === "object"
      ));
    };

    script.onerror = () => {
      reject(new Error(`${filename} を読み込めませんでした。`));
    };

    document.head.append(script);
  });
}

async function loadPageData() {
  const definitions = [
    ["news", "news.js", "MOKA_NEWS", renderNews],
    ["schedule", "schedule.js", "MOKA_SCHEDULE", renderSchedule],
    ["works", "works.js", "MOKA_WORKS", renderWorks],
    ["credits", "credits.js", "MOKA_CREDITS", renderCredits]
  ];

  await Promise.allSettled(definitions.map(async definition => {
    const [key, filename, globalName, render] = definition;
    const state = dataState[key];

    try {
      state.items = await loadDataScript(filename, globalName);
    } catch (error) {
      state.error = true;
      console.error(error);
    }

    state.loaded = true;
    render();
  }));
}

/* =========================
   プロフィール
========================= */

function renderProfile() {
  insertImage(
    $("#heroImage"),
    siteConfig.images.main,
    "甘犬もか",
    createPlaceholder("Amainu Moka"),
    true
  );

  insertImage(
    $("#profileImage"),
    siteConfig.images.profile || siteConfig.images.main,
    "甘犬もかのプロフィール画像",
    createPlaceholder("Amainu Moka")
  );

  const partnerList = $("#partnerList");
  partnerList.replaceChildren();

  siteConfig.partners.forEach(partner => {
    const card = document.createElement("article");
    card.className = "cat-card";

    card.innerHTML = `
      <p class="cat-relation">${escapeHTML(partner.relation)}</p>
      <div class="partner-image-slot"></div>

      <div class="cat-name">
        <span class="cat-name-en">${escapeHTML(partner.english)}</span>
        <h3>${escapeHTML(partner.name)}</h3>
      </div>
    `;

    insertImage(
      card.querySelector(".partner-image-slot"),
      partner.image,
      partner.alt || partner.name,
      `<div class="partner-placeholder">${escapeHTML(partner.name)}の画像</div>`
    );

    partnerList.append(card);
  });

  $("#creatorGrid").innerHTML = creatorData.map(creator => `
    <article class="panel creator-card">
      <p class="eyebrow">${escapeHTML(creator.role)}</p>
      <h3>${escapeHTML(creator.name)} 様</h3>
      <p class="creator-account">${escapeHTML(creator.account)}</p>
      ${externalLink(creator.url, "Xアカウント")}
    </article>
  `).join("");

  const galleryGrid = $("#galleryGrid");
  galleryGrid.replaceChildren();

  siteConfig.gallery.forEach(item => {
    const figure = document.createElement("figure");
    const frame = document.createElement("div");
    const caption = document.createElement("figcaption");

    figure.className = "gallery-item";
    frame.className = "gallery-frame";
    caption.textContent = item.title;

    figure.append(frame, caption);

    insertImage(
      frame,
      item.image,
      item.alt || item.title,
      createPlaceholder("Character Gallery")
    );

    galleryGrid.append(figure);
  });
}

/* =========================
   リンク・タグ・コンタクト
========================= */

function renderLinks() {
  $("#linkGrid").innerHTML = linkData.map(item => {
    const href = safeURL(item.url);

    if (!href) {
      return "";
    }

    return `
      <a
        class="link-card"
        href="${escapeHTML(href)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>${escapeHTML(item.name)}</h2>
        <p class="link-description">${escapeHTML(item.description)}</p>
        <div class="link-card-footer"><span>Visit</span>${paw()}</div>
      </a>
    `;
  }).join("");

  $("#tagGrid").innerHTML = tagData.map(item => `
    <article class="panel tag-card">
      <p class="eyebrow">${escapeHTML(item.label)}</p>
      <h3>${escapeHTML(item.tag)}</h3>
    </article>
  `).join("");

  const formURL = safeURL(siteConfig.businessFormUrl);
  const litlinkURL = safeURL(siteConfig.litlinkUrl);

  $("#contactDescription").textContent = formURL
    ? "お仕事・コラボのご連絡は、下記の問い合わせフォーム、またはXのDMからお願いいたします。"
    : "お仕事・コラボのご連絡は、リットリンクに記載しているメールアドレス、またはXのDMからお願いいたします。";

  const links = [
    externalLink(xAccountURL, "Xで連絡する", "button")
  ];

  if (formURL) {
    links.push(externalLink(
      formURL,
      "お問い合わせフォーム",
      "button"
    ));
  } else if (litlinkURL) {
    links.push(externalLink(litlinkURL, "リットリンク", "button"));
  }

  $("#contactButtons").innerHTML = links.join("");
}

/* =========================
   コピー用URL
========================= */

function renderCopyResources() {
  const resources = [
    {
      id: "clipYoutubeURL",
      label: "YouTubeチャンネルURL",
      url: youtubeChannelURL
    },
    {
      id: "clipXURL",
      label: "XアカウントURL",
      url: xAccountURL
    }
  ];

  const container = $("#clipResources");

  container.innerHTML = resources.map(resource => `
    <div class="copy-resource">
      <label for="${escapeHTML(resource.id)}">
        ${escapeHTML(resource.label)}
      </label>

      <div class="copy-controls">
        <input
          id="${escapeHTML(resource.id)}"
          class="copy-url"
          type="text"
          readonly
          spellcheck="false"
          value="${escapeHTML(resource.url)}"
        >

        <button
          class="copy-button"
          type="button"
          data-copy-target="${escapeHTML(resource.id)}"
        >
          URLをコピー
        </button>
      </div>

      <p class="copy-status" role="status" aria-live="polite"></p>
    </div>
  `).join("");

  container.addEventListener("click", async event => {
    const button = event.target.closest("[data-copy-target]");

    if (!button || button.disabled) {
      return;
    }

    const input = document.getElementById(button.dataset.copyTarget);
    const status = button.closest(".copy-resource")
      .querySelector(".copy-status");

    button.disabled = true;
    status.textContent = "";

    try {
      if (window.isSecureContext && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(input.value);
      } else {
        input.focus();
        input.select();
        input.setSelectionRange(0, input.value.length);

        if (!document.execCommand("copy")) {
          throw new Error("コピーできませんでした。");
        }
      }

      status.textContent = "URLをコピーしました。";
    } catch {
      input.focus();
      input.select();
      input.setSelectionRange(0, input.value.length);

      status.textContent =
        "URLを選択しました。端末のコピー操作でコピーしてください。";
    } finally {
      button.disabled = false;
    }
  });
}

/* =========================
   お知らせ
========================= */

function renderNews() {
  const state = dataState.news;
  const full = $("#newsList");
  const home = $("#homeNews");

  if (!state.loaded) {
    full.innerHTML = emptyPanel("Loading.", "お知らせを読み込んでいます。");
    home.innerHTML = '<p class="empty-message">お知らせを読み込んでいます。</p>';
    return;
  }

  if (state.error) {
    full.innerHTML = emptyPanel(
      "お知らせを読み込めませんでした",
      "news.js の配置と記入内容をご確認ください。"
    );
    home.innerHTML = '<p class="empty-message">お知らせを読み込めませんでした。</p>';
    return;
  }

  const items = [...state.items].sort((a, b) => {
    return (validDate(b.date)?.getTime() || 0) -
      (validDate(a.date)?.getTime() || 0);
  });

  if (!items.length) {
    full.innerHTML = emptyPanel(
      "Coming Soon.",
      "新しいお知らせは、こちらに掲載します。"
    );
    home.innerHTML = '<p class="empty-message">新しいお知らせは準備中です。</p>';
    return;
  }

  const meta = item => `
    <div class="news-meta">
      ${item.date ? `<span>${escapeHTML(formatNewsDate(item.date))}</span>` : ""}
      ${item.category ? `<span class="badge">${escapeHTML(item.category)}</span>` : ""}
    </div>
  `;

  full.innerHTML = items.map(item => `
    <article class="panel news-card">
      ${meta(item)}
      <h2>${escapeHTML(item.title || "お知らせ")}</h2>
      ${item.text ? `<p class="news-body">${escapeHTML(item.text)}</p>` : ""}
      ${externalLink(item.url, item.linkLabel || "詳細を見る")}
    </article>
  `).join("");

  home.innerHTML = items.slice(0, 3).map(item => `
    <article class="home-news-item">
      ${meta(item)}
      <h3>${escapeHTML(item.title || "お知らせ")}</h3>
      ${externalLink(item.url, item.linkLabel || "詳細を見る")}
    </article>
  `).join("");
}

/* =========================
   スケジュール
========================= */

function getUpcomingSchedule() {
  const now = Date.now();

  return dataState.schedule.items.filter(item => {
    const start = validDate(item.start);

    if (!start) {
      return false;
    }

    const end = validDate(item.end);

    const expires = end
      ? end.getTime()
      : start.getTime() + 6 * 60 * 60 * 1000;

    return expires >= now;
  }).sort((a, b) => {
    return validDate(a.start).getTime() -
      validDate(b.start).getTime();
  });
}

function renderSchedule() {
  const state = dataState.schedule;
  const full = $("#scheduleList");
  const home = $("#homeSchedule");

  if (!state.loaded) {
    full.innerHTML = '<p class="empty-message">スケジュールを読み込んでいます。</p>';
    home.innerHTML = full.innerHTML;
    return;
  }

  if (state.error) {
    full.innerHTML = '<p class="empty-message">スケジュールを読み込めませんでした。schedule.js の配置と記入内容をご確認ください。</p>';
    home.innerHTML = '<p class="empty-message">スケジュールを読み込めませんでした。</p>';
    return;
  }

  const items = getUpcomingSchedule();

  if (!items.length) {
    full.innerHTML = `
      <div class="schedule-empty">
        ${paw()}
        <h3>Next Stream, Coming Soon.</h3>
        <p>次回の配信は調整中です。</p>
        <p>配信のお知らせはXでもご案内します。</p>
        ${externalLink(xAccountURL, "Xでお知らせを見る", "button")}
      </div>
    `;

    home.innerHTML = `
      <div class="next-stream">
        <h3>Coming Soon.</h3>
        <p class="empty-message">次回の配信は調整中です。</p>
        ${externalLink(xAccountURL, "Xでお知らせを見る")}
      </div>
    `;
    return;
  }

  full.innerHTML = items.map(item => `
    <article class="schedule-item">
      <p class="schedule-time">
        ${escapeHTML(formatScheduleDate(item.start))}
        <span>JST / 日本時間</span>
      </p>

      <div class="schedule-content">
        ${item.platform ? `<span class="badge">${escapeHTML(item.platform)}</span>` : ""}
        <h3>${escapeHTML(item.title || "配信予定")}</h3>
        ${item.note ? `<p>${escapeHTML(item.note)}</p>` : ""}
      </div>

      ${externalLink(item.url, "配信ページ")}
    </article>
  `).join("");

  const next = items[0];

  home.innerHTML = `
    <div class="next-stream">
      <div class="news-meta">
        <span>${escapeHTML(formatScheduleDate(next.start))}</span>
        ${next.platform ? `<span class="badge">${escapeHTML(next.platform)}</span>` : ""}
      </div>

      <h3>${escapeHTML(next.title || "配信予定")}</h3>
      ${next.note ? `<p>${escapeHTML(next.note)}</p>` : ""}
      ${externalLink(next.url, "配信ページ")}
    </div>
  `;
}

/* =========================
   実績
========================= */

function initializeWorksFilters() {
  const container = $("#worksFilters");

  container.innerHTML = workCategories.map(category => `
    <button
      class="category-button"
      type="button"
      data-work-category="${escapeHTML(category)}"
      aria-pressed="${category === selectedWorkCategory}"
    >
      ${escapeHTML(category)}
    </button>
  `).join("");

  container.addEventListener("click", event => {
    const button = event.target.closest("[data-work-category]");

    if (!button) {
      return;
    }

    selectedWorkCategory = button.dataset.workCategory;

    container.querySelectorAll("[data-work-category]").forEach(item => {
      item.setAttribute(
        "aria-pressed",
        String(item.dataset.workCategory === selectedWorkCategory)
      );
    });

    const grid = $("#worksGrid");

    grid.getAnimations?.().forEach(animation => animation.cancel());
    renderWorks();

    void playAnimation(
      grid,
      [
        { opacity: 0, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 380,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    );
  });
}

function getItemCategories(item) {
  if (Array.isArray(item.category)) {
    return item.category.filter(value => typeof value === "string");
  }

  return item.category ? [String(item.category)] : [];
}

function renderWorks() {
  const state = dataState.works;
  const container = $("#worksGrid");
  const count = $("#worksCount");

  if (!state.loaded) {
    count.textContent = "";
    container.innerHTML = emptyPanel("Loading.", "活動実績を読み込んでいます。");
    return;
  }

  if (state.error) {
    count.textContent = "";
    container.innerHTML = emptyPanel(
      "活動実績を読み込めませんでした",
      "works.js の配置と記入内容をご確認ください。"
    );
    return;
  }

  const items = state.items.filter(item => {
    return selectedWorkCategory === "ALL" ||
      getItemCategories(item).includes(selectedWorkCategory);
  });

  count.textContent = `${selectedWorkCategory} / ${items.length}件`;

  if (!items.length) {
    container.innerHTML = emptyPanel(
      "Coming Soon.",
      "このカテゴリーの実績は、掲載準備中です。"
    );
    return;
  }

  container.innerHTML = items.map(item => {
    const links = Array.isArray(item.links) ? item.links : [];

    return `
      <article class="panel work-card">
        <div class="work-meta">
          ${getItemCategories(item).map(category =>
            `<span class="badge">${escapeHTML(category)}</span>`
          ).join("")}
          ${item.date ? `<span>${escapeHTML(item.date)}</span>` : ""}
        </div>

        ${item.client ? `<p class="work-client">${escapeHTML(item.client)}</p>` : ""}
        <h2>${escapeHTML(item.title || "活動実績")}</h2>
        ${item.text ? `<p class="work-body">${escapeHTML(item.text)}</p>` : ""}

        ${
          links.length
            ? `
              <div class="work-links">
                ${links
                  .filter(link => link && typeof link === "object")
                  .map(link => externalLink(link.url, link.label || "関連リンク"))
                  .join("")}
              </div>
            `
            : ""
        }
      </article>
    `;
  }).join("");
}

/* =========================
   クレジット
========================= */

function createCreditCard(item, category) {
  const title = String(item.title || "").trim() ||
    String(item.siteName || "").trim() ||
    "クレジット";

  const creator = String(item.creator || "").trim();
  const siteName = String(item.siteName || "").trim();
  const note = String(item.note || "").trim();

  const contentLink = category.id === "bgm"
    ? externalLink(item.musicUrl, "楽曲を聴く")
    : externalLink(item.materialUrl, "素材ページ");

  const siteLink = externalLink(
    item.siteUrl,
    siteName || "サイト・チャンネル"
  );

  return `
    <article class="panel credit-card">
      <p class="eyebrow">${escapeHTML(category.label)}</p>
      <h3>${escapeHTML(title)}</h3>

      ${creator ? `<p class="credit-author">制作者：${escapeHTML(creator)}</p>` : ""}
      ${siteName ? `<p class="credit-author">サイト・チャンネル：${escapeHTML(siteName)}</p>` : ""}
      ${note ? `<p class="credit-note">${escapeHTML(note)}</p>` : ""}

      ${
        contentLink || siteLink
          ? `<div class="credit-links">${contentLink}${siteLink}</div>`
          : ""
      }
    </article>
  `;
}

function renderCredits() {
  const state = dataState.credits;
  const container = $("#creditSections");

  if (!state.loaded) {
    container.innerHTML = emptyPanel("Loading.", "クレジットを読み込んでいます。");
    return;
  }

  if (state.error) {
    container.innerHTML = emptyPanel(
      "クレジットを読み込めませんでした",
      "credits.js の配置と記入内容をご確認ください。"
    );
    return;
  }

  container.innerHTML = creditCategories.map(category => {
    const items = state.items.filter(item =>
      item.category === category.id
    );

    return `
      <section
        class="credit-section"
        aria-labelledby="credit-heading-${category.id}"
      >
        <div class="section-heading">
          <div>
            <p class="eyebrow">${escapeHTML(category.english)}</p>
            <h2 id="credit-heading-${category.id}">${escapeHTML(category.label)}</h2>
          </div>
        </div>

        <div class="works-grid">
          ${
            items.length
              ? items.map(item => createCreditCard(item, category)).join("")
              : emptyPanel(
                  "Coming Soon.",
                  `${category.label}のクレジットは、掲載準備中です。`
                )
          }
        </div>
      </section>
    `;
  }).join("");
}

/* =========================
   ページ切替：足あとクロスフェード
========================= */

function initializeNavigation() {
  const pages = [...document.querySelectorAll("[data-page]")];
  const nav = $("#siteNav");
  const menuButton = $("#menuButton");
  const main = $("#main");
  const layer = $("#pageTransition");

  const headingTexts = new WeakMap();

  let currentPage = null;
  let transitionToken = 0;
  let activeAnimations = [];

  function closeMenu() {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");
  }

  function cancelTransition() {
    transitionToken += 1;
    activeAnimations.forEach(animation => animation.cancel());
    activeAnimations = [];
    layer.replaceChildren();
    main.style.minHeight = "";
    return transitionToken;
  }

  function animateElement(element, frames, options) {
    if (
      reducedMotion.matches ||
      typeof element.animate !== "function"
    ) {
      return Promise.resolve();
    }

    const animation = element.animate(frames, options);
    activeAnimations.push(animation);
    return animation.finished.catch(() => {});
  }

  function animateHeading(heading) {
    if (!heading) {
      return;
    }

    if (!headingTexts.has(heading)) {
      headingTexts.set(heading, heading.textContent.trim());
    }

    const text = headingTexts.get(heading);
    heading.replaceChildren();

    if (reducedMotion.matches) {
      heading.textContent = text;
      heading.removeAttribute("aria-label");
      return;
    }

    heading.setAttribute("aria-label", text);

    const fragment = document.createDocumentFragment();

    Array.from(text).forEach((character, index) => {
      const span = document.createElement("span");
      span.className = "heading-char";
      span.setAttribute("aria-hidden", "true");
      span.style.setProperty("--char-delay", `${Math.min(index * 42, 600)}ms`);
      span.textContent = character === " " ? "\u00a0" : character;
      fragment.append(span);
    });

    heading.append(fragment);
  }

  function updateNavigation(page) {
    nav.querySelectorAll("a").forEach(link => {
      if (link.hash === `#${page.dataset.page}`) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const name = page.dataset.page;
    const title = name === "home"
      ? "Official Website"
      : `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

    document.title = `甘犬もか | ${title}`;
  }

  function activatePage(page, focus = false) {
    pages.forEach(item => {
      item.hidden = item !== page;
    });

    currentPage = page;
    updateNavigation(page);
    animateHeading(page.querySelector(".page-title"));

    if (focus) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      (page.querySelector(".page-title") || main)
        .focus({ preventScroll: true });
    }
  }

  function createTransitionPaws() {
    const headerHeight = $(".site-header").getBoundingClientRect().height;
    const availableHeight = Math.max(window.innerHeight - headerHeight, 180);
    const width = window.innerWidth;

    const animations = [];

    for (let index = 0; index < 5; index += 1) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = paw("transition-paw");

      const svg = wrapper.firstElementChild;
      const size = Math.min(Math.max(width * 0.03, 24), 34);
      const rotation = index % 2 ? 12 : -12;

      svg.style.left =
        `${width * (0.14 + 0.65 * index / 4) - size / 2}px`;

      svg.style.top =
        `${headerHeight + availableHeight * (0.73 - 0.4 * index / 4) - size / 2}px`;

      layer.append(svg);

      animations.push(animateElement(
        svg,
        [
          {
            opacity: 0,
            transform: `translateY(4px) rotate(${rotation}deg)`
          },
          {
            opacity: 0.28,
            offset: 0.4,
            transform: `translateY(0) rotate(${rotation}deg)`
          },
          {
            opacity: 0,
            transform: `translateY(-4px) rotate(${rotation}deg)`
          }
        ],
        {
          duration: 520,
          delay: index * 90,
          easing: "ease",
          fill: "both"
        }
      ));
    }

    return Promise.all(animations);
  }

  async function showPage(initial = false) {
    const requested = window.location.hash.slice(1) || "home";

    if (requested === "main") {
      main.focus({ preventScroll: true });
      return;
    }

    const target = pages.find(page => page.dataset.page === requested) ||
      pages.find(page => page.dataset.page === "home");

    closeMenu();

    // 戻る操作などで、切替途中に現在のページへ戻った場合も復元。
    if (target === currentPage) {
      cancelTransition();
      return;
    }

    const token = cancelTransition();

    if (
      initial ||
      !currentPage ||
      reducedMotion.matches ||
      typeof main.animate !== "function"
    ) {
      activatePage(target, !initial);
      return;
    }

    const oldPage = currentPage;

    main.style.minHeight = `${main.getBoundingClientRect().height}px`;

    const pawsFinished = createTransitionPaws();

    await animateElement(
      oldPage,
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 300, easing: "ease", fill: "both" }
    );

    if (token !== transitionToken) {
      return;
    }

    activatePage(target, true);

    await Promise.all([
      pawsFinished,
      animateElement(
        target,
        [
          { opacity: 0, transform: "translateY(5px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 600,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both"
        }
      )
    ]);

    if (token !== transitionToken) {
      return;
    }

    activeAnimations.forEach(animation => animation.cancel());
    activeAnimations = [];
    layer.replaceChildren();
    main.style.minHeight = "";
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    nav.classList.toggle("is-open", !isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "メニューを開く" : "メニューを閉じる"
    );
  });

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", event => {
    if (
      nav.classList.contains("is-open") &&
      !event.target.closest(".site-header")
    ) {
      closeMenu();
    }
  });

  window.matchMedia("(min-width: 1201px)")
    .addEventListener("change", event => {
      if (event.matches) {
        closeMenu();
      }
    });

  reducedMotion.addEventListener("change", () => {
    cancelTransition();

    const requested = window.location.hash.slice(1) || "home";
    const target = pages.find(page => page.dataset.page === requested) ||
      currentPage || pages[0];

    activatePage(target);
  });

  window.addEventListener("hashchange", () => {
    void showPage(false);
  });

  void showPage(true);
}

/* =========================
   カーソルの薄い肉球
========================= */

function initializeCursorPaws() {
  const layer = $("#cursorLayer");
  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  );

  const namespace = "http://www.w3.org/2000/svg";
  const particles = [];

  let nextIndex = 0;
  let frameID = 0;
  let lastTime = 0;
  let lastX = null;
  let lastY = null;

  const lifetime = 850;

  for (let index = 0; index < 7; index += 1) {
    const svg = document.createElementNS(namespace, "svg");
    const use = document.createElementNS(namespace, "use");

    svg.classList.add("cursor-paw");
    svg.setAttribute("viewBox", "0 0 32 32");
    svg.setAttribute("aria-hidden", "true");
    use.setAttribute("href", "#icon-paw");

    svg.append(use);
    layer.append(svg);

    particles.push({
      element: svg,
      active: false,
      born: 0,
      x: 0,
      y: 0,
      rotation: 0
    });
  }

  function allowed() {
    return finePointer.matches &&
      !reducedMotion.matches &&
      !document.hidden &&
      !document.body.classList.contains("startup-active");
  }

  function clearParticles() {
    cancelAnimationFrame(frameID);
    frameID = 0;

    particles.forEach(particle => {
      particle.active = false;
      particle.element.style.opacity = "0";
    });

    lastX = null;
    lastY = null;
    lastTime = 0;
  }

  function animate(now) {
    frameID = 0;
    let activeCount = 0;

    particles.forEach(particle => {
      if (!particle.active) {
        return;
      }

      const progress = Math.min((now - particle.born) / lifetime, 1);

      if (progress >= 1) {
        particle.active = false;
        particle.element.style.opacity = "0";
        return;
      }

      activeCount += 1;

      particle.element.style.opacity = String(0.17 * (1 - progress));

      particle.element.style.transform = `
        translate3d(${particle.x}px, ${particle.y - progress * 14}px, 0)
        rotate(${particle.rotation}deg)
        scale(${0.8 + progress * 0.25})
      `;
    });

    if (activeCount) {
      frameID = requestAnimationFrame(animate);
    }
  }

  document.addEventListener("pointermove", event => {
    if (!allowed() || event.pointerType !== "mouse") {
      return;
    }

    const now = performance.now();

    if (now - lastTime < 95) {
      return;
    }

    if (
      lastX !== null &&
      Math.hypot(event.clientX - lastX, event.clientY - lastY) < 24
    ) {
      return;
    }

    lastTime = now;
    lastX = event.clientX;
    lastY = event.clientY;

    const particle = particles[nextIndex];
    nextIndex = (nextIndex + 1) % particles.length;

    particle.active = true;
    particle.born = now;
    particle.x = event.clientX + 18;
    particle.y = event.clientY + 22;
    particle.rotation = -20 + Math.random() * 40;

    if (!frameID) {
      frameID = requestAnimationFrame(animate);
    }
  }, { passive: true });

  document.documentElement.addEventListener("pointerleave", clearParticles);
  window.addEventListener("blur", clearParticles);
  document.addEventListener("visibilitychange", clearParticles);
  finePointer.addEventListener("change", clearParticles);
  reducedMotion.addEventListener("change", clearParticles);
}

/* =========================
   初期化
========================= */

renderLogos();
initializeStartup();

renderProfile();
renderLinks();
renderCopyResources();
initializeWorksFilters();

renderNews();
renderSchedule();
renderWorks();
renderCredits();

initializeNavigation();
initializeCursorPaws();

$("#copyrightYear").textContent = new Date().getFullYear();

void loadPageData();

window.setInterval(() => {
  if (
    dataState.schedule.loaded &&
    !dataState.schedule.error &&
    !document.hidden
  ) {
    renderSchedule();
  }
}, 60000);
