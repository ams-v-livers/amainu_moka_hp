"use strict";

/* =========================
   編集用の基本設定
========================= */

const siteConfig = {
  images: {
    // 例： "./images/moka-main.png"
    main: "",

    // 空欄の場合は main の画像を使用します。
    profile: ""
  },

  partners: [
    {
      relation: "兄",
      name: "やまと",
      english: "Yamato",

      // 例： "./images/yamato.png"
      image: "",
      alt: "兄猫 やまと"
    },
    {
      relation: "妹",
      name: "はる",
      english: "Haru",

      // 例： "./images/haru.png"
      image: "",
      alt: "妹猫 はる"
    }
  ],

  gallery: [
    {
      title: "キャラクター紹介",
      image: "",
      alt: "甘犬もかのキャラクター紹介"
    },
    {
      title: "キャラクターデザイン",
      image: "",
      alt: "甘犬もかのキャラクターデザイン"
    },
    {
      title: "初期モデル / デザイン資料 01",
      image: "",
      alt: "甘犬もかの初期モデル デザイン資料1"
    },
    {
      title: "初期モデル / デザイン資料 02",
      image: "",
      alt: "甘犬もかの初期モデル デザイン資料2"
    }
  ],

  // コンタクトページ専用。リンクページには掲載しません。
  litlinkUrl: "https://lit.link/amainumoka",

  // 問い合わせフォームを用意したら、そのURLを記入してください。
  // 記入すると、コンタクトのリットリンクをフォームに切り替えます。
  businessFormUrl: ""
};

/* =========================
   プロフィール / リンク / タグ
========================= */

const youtubeChannelURL =
  "https://www.youtube.com/channel/UCH4GQz6j6P_DfWzfAFF0vpA";

const xAccountURL =
  "https://twitter.com/96moka_ocd";

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
  {
    label: "総合",
    tag: "#甘犬もか"
  },
  {
    label: "ファンアート",
    tag: "#甘犬いらすと"
  },
  {
    label: "配信",
    tag: "#甘犬LIVE"
  },
  {
    label: "動画・ショート",
    tag: "#甘犬VIDEO"
  },
  {
    label: "感想・見てほしいもの",
    tag: "#甘犬あのね"
  },
  {
    label: "切り抜き",
    tag: "#甘犬クリップ"
  }
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
  {
    id: "bgm",
    label: "BGM",
    english: "Music"
  },
  {
    id: "sound",
    label: "効果音",
    english: "Sound Effects"
  },
  {
    id: "visual",
    label: "画像・GIF素材",
    english: "Images & GIF"
  },
  {
    id: "other",
    label: "その他",
    english: "Other Credits"
  }
];

/* =========================
   共通処理
========================= */

const $ = selector => document.querySelector(selector);

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

const scriptBase = new URL(
  ".",
  document.currentScript?.src || document.baseURI
);

const dataState = {
  news: {
    items: [],
    loaded: false,
    error: false
  },
  schedule: {
    items: [],
    loaded: false,
    error: false
  },
  works: {
    items: [],
    loaded: false,
    error: false
  },
  credits: {
    items: [],
    loaded: false,
    error: false
  }
};

let selectedWorkCategory = "ALL";

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function safeURL(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  try {
    const url = new URL(value.trim());

    if (!["https:", "http:"].includes(url.protocol)) {
      return "";
    }

    return url.href;
  } catch {
    return "";
  }
}

function safeImageURL(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  try {
    const url = new URL(value.trim(), document.baseURI);

    if (!["https:", "http:", "file:"].includes(url.protocol)) {
      return "";
    }

    return url.href;
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
      ${
        text
          ? `<p class="empty-message">${escapeHTML(text)}</p>`
          : ""
      }
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

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return text.replaceAll("-", ".");
  }

  return text;
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
  const imageURL = safeImageURL(src);

  if (!container) {
    return;
  }

  container.replaceChildren();

  if (!imageURL) {
    container.innerHTML = fallbackHTML;
    return;
  }

  const image = document.createElement("img");

  image.alt = alt;
  image.decoding = "async";
  image.loading = eager ? "eager" : "lazy";

  image.addEventListener(
    "error",
    () => {
      container.innerHTML = fallbackHTML;
    },
    { once: true }
  );

  image.src = imageURL;
  container.append(image);
}

/* =========================
   専用データファイルの読込
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

      resolve(
        source.items.filter(
          item => item && typeof item === "object"
        )
      );
    };

    script.onerror = () => {
      reject(new Error(`${filename} を読み込めませんでした。`));
    };

    document.head.append(script);
  });
}

async function loadPageData() {
  const definitions = [
    {
      key: "news",
      filename: "news.js",
      globalName: "MOKA_NEWS",
      render: renderNews
    },
    {
      key: "schedule",
      filename: "schedule.js",
      globalName: "MOKA_SCHEDULE",
      render: renderSchedule
    },
    {
      key: "works",
      filename: "works.js",
      globalName: "MOKA_WORKS",
      render: renderWorks
    },
    {
      key: "credits",
      filename: "credits.js",
      globalName: "MOKA_CREDITS",
      render: renderCredits
    }
  ];

  await Promise.allSettled(
    definitions.map(async definition => {
      const state = dataState[definition.key];

      try {
        state.items = await loadDataScript(
          definition.filename,
          definition.globalName
        );
      } catch (error) {
        state.error = true;
        console.error(error);
      }

      state.loaded = true;
      definition.render();
    })
  );
}

/* =========================
   PROFILE
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
        <span class="cat-name-en">
          ${escapeHTML(partner.english)}
        </span>

        <h3>${escapeHTML(partner.name)}</h3>
      </div>
    `;

    insertImage(
      card.querySelector(".partner-image-slot"),
      partner.image,
      partner.alt || partner.name,
      `
        <div class="partner-placeholder">
          <span>${escapeHTML(partner.name)}の画像</span>
        </div>
      `
    );

    partnerList.append(card);
  });

  $("#creatorGrid").innerHTML = creatorData
    .map(creator => `
      <article class="panel creator-card">
        <p class="eyebrow">${escapeHTML(creator.role)}</p>
        <h3>${escapeHTML(creator.name)} 様</h3>

        <p class="creator-account">
          ${escapeHTML(creator.account)}
        </p>

        ${externalLink(creator.url, "Xアカウント")}
      </article>
    `)
    .join("");

  const galleryGrid = $("#galleryGrid");

  galleryGrid.replaceChildren();

  siteConfig.gallery.forEach(item => {
    const figure = document.createElement("figure");

    figure.className = "gallery-item";

    const frame = document.createElement("div");
    frame.className = "gallery-frame";

    const caption = document.createElement("figcaption");
    caption.textContent = item.title;

    figure.append(frame, caption);

    insertImage(
      frame,
      item.image,
      item.alt || item.title,
      createPlaceholder("Character Gallery", "画像準備中")
    );

    galleryGrid.append(figure);
  });
}

/* =========================
   LINKS / TAGS / CONTACT
========================= */

function renderLinks() {
  $("#linkGrid").innerHTML = linkData
    .map(item => {
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

          <p class="link-description">
            ${escapeHTML(item.description)}
          </p>

          <div class="link-card-footer">
            <span>Visit</span>
            ${paw()}
          </div>
        </a>
      `;
    })
    .join("");

  $("#tagGrid").innerHTML = tagData
    .map(item => `
      <article class="panel tag-card">
        <p class="eyebrow">${escapeHTML(item.label)}</p>
        <h3>${escapeHTML(item.tag)}</h3>
      </article>
    `)
    .join("");

  const formURL = safeURL(siteConfig.businessFormUrl);
  const litlinkURL = safeURL(siteConfig.litlinkUrl);

  $("#contactDescription").textContent = formURL
    ? "お仕事・コラボのご連絡は、下記の問い合わせフォーム、またはXのDMからお願いいたします。"
    : "お仕事・コラボのご連絡は、リットリンクに記載しているメールアドレス、またはXのDMからお願いいたします。";

  const contactLinks = [
    externalLink(xAccountURL, "Xで連絡する", "button")
  ];

  if (formURL) {
    contactLinks.push(
      externalLink(formURL, "お問い合わせフォーム", "button")
    );
  } else if (litlinkURL) {
    contactLinks.push(
      externalLink(litlinkURL, "リットリンク", "button")
    );
  }

  $("#contactButtons").innerHTML = contactLinks.join("");
}

/* =========================
   コピーできるURL
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

  container.innerHTML = resources
    .map(resource => `
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

        <p
          class="copy-status"
          role="status"
          aria-live="polite"
        ></p>
      </div>
    `)
    .join("");

  container.addEventListener("click", async event => {
    const button = event.target.closest("[data-copy-target]");

    if (!button || button.disabled) {
      return;
    }

    const input = document.getElementById(button.dataset.copyTarget);
    const status = button
      .closest(".copy-resource")
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

        const copied = document.execCommand("copy");

        if (!copied) {
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
   NEWS
========================= */

function getSortedNews() {
  return [...dataState.news.items].sort((a, b) => {
    const first = validDate(a.date)?.getTime() || 0;
    const second = validDate(b.date)?.getTime() || 0;

    return second - first;
  });
}

function renderNews() {
  const state = dataState.news;
  const fullContainer = $("#newsList");
  const homeContainer = $("#homeNews");

  if (!state.loaded) {
    fullContainer.innerHTML = emptyPanel(
      "Loading.",
      "お知らせを読み込んでいます。"
    );

    homeContainer.innerHTML =
      '<p class="empty-message">お知らせを読み込んでいます。</p>';

    return;
  }

  if (state.error) {
    fullContainer.innerHTML = emptyPanel(
      "お知らせを読み込めませんでした",
      "news.js の配置と記入内容をご確認ください。"
    );

    homeContainer.innerHTML =
      '<p class="empty-message">お知らせを読み込めませんでした。</p>';

    return;
  }

  const items = getSortedNews();

  if (!items.length) {
    fullContainer.innerHTML = emptyPanel(
      "Coming Soon.",
      "新しいお知らせは、こちらに掲載します。"
    );

    homeContainer.innerHTML =
      '<p class="empty-message">新しいお知らせは準備中です。</p>';

    return;
  }

  fullContainer.innerHTML = items
    .map(item => `
      <article class="panel news-card">
        <div class="news-meta">
          ${
            item.date
              ? `
                <span>
                  ${escapeHTML(formatNewsDate(item.date))}
                </span>
              `
              : ""
          }

          ${
            item.category
              ? `<span class="badge">${escapeHTML(item.category)}</span>`
              : ""
          }
        </div>

        <h2>${escapeHTML(item.title || "お知らせ")}</h2>

        ${
          item.text
            ? `<p class="news-body">${escapeHTML(item.text)}</p>`
            : ""
        }

        ${externalLink(item.url, item.linkLabel || "詳細を見る")}
      </article>
    `)
    .join("");

  homeContainer.innerHTML = items
    .slice(0, 3)
    .map(item => `
      <article class="home-news-item">
        <div class="news-meta">
          ${
            item.date
              ? `<span>${escapeHTML(formatNewsDate(item.date))}</span>`
              : ""
          }

          ${
            item.category
              ? `<span class="badge">${escapeHTML(item.category)}</span>`
              : ""
          }
        </div>

        <h3>${escapeHTML(item.title || "お知らせ")}</h3>

        ${externalLink(item.url, item.linkLabel || "詳細を見る")}
      </article>
    `)
    .join("");
}

/* =========================
   SCHEDULE
========================= */

function getUpcomingSchedule() {
  const now = Date.now();

  return dataState.schedule.items
    .filter(item => {
      const start = validDate(item.start);

      if (!start) {
        return false;
      }

      const end = validDate(item.end);
      const expiresAt = end
        ? end.getTime()
        : start.getTime() + 6 * 60 * 60 * 1000;

      return expiresAt >= now;
    })
    .sort((a, b) => {
      return validDate(a.start).getTime() -
        validDate(b.start).getTime();
    });
}

function renderSchedule() {
  const state = dataState.schedule;
  const fullContainer = $("#scheduleList");
  const homeContainer = $("#homeSchedule");

  if (!state.loaded) {
    fullContainer.innerHTML =
      '<p class="empty-message">スケジュールを読み込んでいます。</p>';

    homeContainer.innerHTML =
      '<p class="empty-message">スケジュールを読み込んでいます。</p>';

    return;
  }

  if (state.error) {
    fullContainer.innerHTML =
      '<p class="empty-message">スケジュールを読み込めませんでした。schedule.js の配置と記入内容をご確認ください。</p>';

    homeContainer.innerHTML =
      '<p class="empty-message">スケジュールを読み込めませんでした。</p>';

    return;
  }

  const items = getUpcomingSchedule();

  if (!items.length) {
    fullContainer.innerHTML = `
      <div class="schedule-empty">
        ${paw()}
        <h3>Next Stream, Coming Soon.</h3>
        <p>次回の配信は調整中です。</p>
        <p>配信のお知らせはXでもご案内します。</p>
        ${externalLink(xAccountURL, "Xでお知らせを見る", "button")}
      </div>
    `;

    homeContainer.innerHTML = `
      <div class="next-stream">
        <h3>Coming Soon.</h3>
        <p class="empty-message">次回の配信は調整中です。</p>
        ${externalLink(xAccountURL, "Xでお知らせを見る")}
      </div>
    `;

    return;
  }

  fullContainer.innerHTML = items
    .map(item => `
      <article class="schedule-item">
        <p class="schedule-time">
          ${escapeHTML(formatScheduleDate(item.start))}
          <span>JST / 日本時間</span>
        </p>

        <div class="schedule-content">
          ${
            item.platform
              ? `<span class="badge">${escapeHTML(item.platform)}</span>`
              : ""
          }

          <h3>${escapeHTML(item.title || "配信予定")}</h3>

          ${
            item.note
              ? `<p>${escapeHTML(item.note)}</p>`
              : ""
          }
        </div>

        ${externalLink(item.url, "配信ページ")}
      </article>
    `)
    .join("");

  const next = items[0];

  homeContainer.innerHTML = `
    <div class="next-stream">
      <div class="news-meta">
        <span>${escapeHTML(formatScheduleDate(next.start))}</span>

        ${
          next.platform
            ? `<span class="badge">${escapeHTML(next.platform)}</span>`
            : ""
        }
      </div>

      <h3>${escapeHTML(next.title || "配信予定")}</h3>

      ${
        next.note
          ? `<p>${escapeHTML(next.note)}</p>`
          : ""
      }

      ${externalLink(next.url, "配信ページ")}
    </div>
  `;
}

/* =========================
   WORKS
========================= */

function initializeWorksFilters() {
  const container = $("#worksFilters");

  container.innerHTML = workCategories
    .map(category => `
      <button
        class="category-button"
        type="button"
        data-work-category="${escapeHTML(category)}"
        aria-pressed="${category === selectedWorkCategory}"
      >
        ${escapeHTML(category)}
      </button>
    `)
    .join("");

  container.addEventListener("click", event => {
    const button = event.target.closest("[data-work-category]");

    if (!button) {
      return;
    }

    selectedWorkCategory = button.dataset.workCategory;

    container.querySelectorAll("[data-work-category]")
      .forEach(item => {
        item.setAttribute(
          "aria-pressed",
          String(item.dataset.workCategory === selectedWorkCategory)
        );
      });

    renderWorks();

    if (!reducedMotion.matches && $("#worksGrid").animate) {
      $("#worksGrid").getAnimations().forEach(animation => {
        animation.cancel();
      });

      $("#worksGrid").animate(
        [
          {
            opacity: 0,
            transform: "translateY(8px)"
          },
          {
            opacity: 1,
            transform: "translateY(0)"
          }
        ],
        {
          duration: 380,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)"
        }
      );
    }
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

    container.innerHTML = emptyPanel(
      "Loading.",
      "活動実績を読み込んでいます。"
    );

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

  container.innerHTML = items
    .map(item => {
      const links = Array.isArray(item.links)
        ? item.links
        : [];

      return `
        <article class="panel work-card">
          <div class="work-meta">
            ${getItemCategories(item)
              .map(category => `
                <span class="badge">${escapeHTML(category)}</span>
              `)
              .join("")}

            ${
              item.date
                ? `<span>${escapeHTML(item.date)}</span>`
                : ""
            }
          </div>

          ${
            item.client
              ? `
                <p class="work-client">
                  ${escapeHTML(item.client)}
                </p>
              `
              : ""
          }

          <h2>${escapeHTML(item.title || "活動実績")}</h2>

          ${
            item.text
              ? `<p class="work-body">${escapeHTML(item.text)}</p>`
              : ""
          }

          ${
            links.length
              ? `
                <div class="work-links">
                  ${links
                    .filter(link => link && typeof link === "object")
                    .map(link => {
                      return externalLink(
                        link.url,
                        link.label || "関連リンク"
                      );
                    })
                    .join("")}
                </div>
              `
              : ""
          }
        </article>
      `;
    })
    .join("");
}

/* =========================
   CREDITS
========================= */

function createCreditCard(item, category) {
  const title =
    String(item.title || "").trim() ||
    String(item.siteName || "").trim() ||
    "クレジット";

  const creator = String(item.creator || "").trim();
  const siteName = String(item.siteName || "").trim();
  const note = String(item.note || "").trim();

  const materialLink = category.id === "bgm"
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

      ${
        creator
          ? `
            <p class="credit-author">
              制作者：${escapeHTML(creator)}
            </p>
          `
          : ""
      }

      ${
        siteName
          ? `
            <p class="credit-author">
              サイト・チャンネル：${escapeHTML(siteName)}
            </p>
          `
          : ""
      }

      ${
        note
          ? `<p class="credit-note">${escapeHTML(note)}</p>`
          : ""
      }

      ${
        materialLink || siteLink
          ? `
            <div class="credit-links">
              ${materialLink}
              ${siteLink}
            </div>
          `
          : ""
      }
    </article>
  `;
}

function renderCredits() {
  const state = dataState.credits;
  const container = $("#creditSections");

  if (!state.loaded) {
    container.innerHTML = emptyPanel(
      "Loading.",
      "クレジットを読み込んでいます。"
    );

    return;
  }

  if (state.error) {
    container.innerHTML = emptyPanel(
      "クレジットを読み込めませんでした",
      "credits.js の配置と記入内容をご確認ください。"
    );

    return;
  }

  container.innerHTML = creditCategories
    .map(category => {
      const items = state.items.filter(item => {
        return item.category === category.id;
      });

      return `
        <section
          class="credit-section"
          aria-labelledby="credit-heading-${category.id}"
        >
          <div class="section-heading">
            <div>
              <p class="eyebrow">${escapeHTML(category.english)}</p>

              <h2 id="credit-heading-${category.id}">
                ${escapeHTML(category.label)}
              </h2>
            </div>
          </div>

          <div class="works-grid">
            ${
              items.length
                ? items
                    .map(item => createCreditCard(item, category))
                    .join("")
                : emptyPanel(
                    "Coming Soon.",
                    `${category.label}のクレジットは、掲載準備中です。`
                  )
            }
          </div>
        </section>
      `;
    })
    .join("");
}

/* =========================
   ページ切替 / 見出し演出
========================= */

function initializeNavigation() {
  const pages = [...document.querySelectorAll("[data-page]")];
  const nav = $("#siteNav");
  const menuButton = $("#menuButton");
  const headings = new WeakMap();

  function closeMenu() {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");
  }

  function animateHeading(heading) {
    if (!heading) {
      return;
    }

    if (!headings.has(heading)) {
      headings.set(heading, heading.textContent);
    }

    const text = headings.get(heading);

    heading.replaceChildren();

    if (reducedMotion.matches) {
      heading.textContent = text;
      heading.removeAttribute("aria-label");
      return;
    }

    heading.setAttribute("aria-label", text.trim());

    const fragment = document.createDocumentFragment();

    Array.from(text).forEach((character, index) => {
      const span = document.createElement("span");

      span.className = "heading-char";
      span.setAttribute("aria-hidden", "true");
      span.style.setProperty(
        "--char-delay",
        `${Math.min(index * 42, 600)}ms`
      );

      span.textContent = character === " " ? "\u00a0" : character;
      fragment.append(span);
    });

    heading.append(fragment);
  }

  function showPage(initial = false) {
    const requested = window.location.hash.slice(1) || "home";

    if (requested === "main") {
      $("#main").focus({ preventScroll: true });
      return;
    }

    const target = pages.find(page => {
      return page.dataset.page === requested;
    }) || pages.find(page => page.dataset.page === "home");

    pages.forEach(page => {
      page.hidden = page !== target;
      page.classList.remove("is-entering");
    });

    nav.querySelectorAll("a").forEach(link => {
      const active = link.hash === `#${target.dataset.page}`;

      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const heading = target.querySelector(".page-title");
    animateHeading(heading);

    if (!reducedMotion.matches) {
      void target.offsetWidth;
      target.classList.add("is-entering");
    }

    const pageName = target.dataset.page;
    const title = pageName === "home"
      ? "Official Website"
      : `${pageName.charAt(0).toUpperCase()}${pageName.slice(1)}`;

    document.title = `甘犬もか | ${title}`;

    closeMenu();

    if (!initial) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });

      if (heading) {
        heading.focus({ preventScroll: true });
      } else {
        $("#main").focus({ preventScroll: true });
      }
    }
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

  const desktopMenu = window.matchMedia("(min-width: 1201px)");

  desktopMenu.addEventListener("change", event => {
    if (event.matches) {
      closeMenu();
    }
  });

  pages.forEach(page => {
    page.addEventListener("animationend", event => {
      if (
        event.target === page &&
        event.animationName === "page-enter"
      ) {
        page.classList.remove("is-entering");
      }
    });
  });

  window.addEventListener("hashchange", () => showPage(false));

  showPage(true);
}

/* =========================
   マウスに追従する薄い肉球
========================= */

function initializeCursorPaws() {
  const layer = $("#cursorLayer");
  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  );

  const particles = [];
  const namespace = "http://www.w3.org/2000/svg";

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
      !document.hidden;
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

      const progress = Math.min(
        (now - particle.born) / lifetime,
        1
      );

      if (progress >= 1) {
        particle.active = false;
        particle.element.style.opacity = "0";
        return;
      }

      activeCount += 1;

      const opacity = 0.17 * (1 - progress);
      const scale = 0.8 + progress * 0.25;
      const y = particle.y - progress * 14;

      particle.element.style.opacity = String(opacity);
      particle.element.style.transform = `
        translate3d(${particle.x}px, ${y}px, 0)
        rotate(${particle.rotation}deg)
        scale(${scale})
      `;
    });

    if (activeCount) {
      frameID = requestAnimationFrame(animate);
    }
  }

  document.addEventListener(
    "pointermove",
    event => {
      if (!allowed() || event.pointerType !== "mouse") {
        return;
      }

      const now = performance.now();

      if (now - lastTime < 95) {
        return;
      }

      if (
        lastX !== null &&
        Math.hypot(
          event.clientX - lastX,
          event.clientY - lastY
        ) < 24
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
    },
    { passive: true }
  );

  document.documentElement.addEventListener(
    "pointerleave",
    clearParticles
  );

  window.addEventListener("blur", clearParticles);
  document.addEventListener("visibilitychange", clearParticles);
  finePointer.addEventListener("change", clearParticles);
  reducedMotion.addEventListener("change", clearParticles);
}

/* =========================
   初期化
========================= */

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

loadPageData();

window.setInterval(() => {
  if (
    dataState.schedule.loaded &&
    !dataState.schedule.error &&
    !document.hidden
  ) {
    renderSchedule();
  }
}, 60000);
