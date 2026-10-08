
"use strict";

/* ==================================================
   画像・リンク設定

   画像例：
   main: "dist/moka-top-lying.png"
   image: "dist/yamato.png"

   空欄の場合は画像枠を表示します。
   ================================================== */

const siteConfig = {
  /* 画像の場所：dist にある場合は "dist/名前.png" と記入 */
  images: {
    logo: "logo.png",      // 左上・起動時・ブラウザタブで共用
    main: "",      // 例: "dist/moka-top-lying.png"
    profile: "",   // 空欄なら main と同じ
  },

  /* 各画像の調整。位置=CSS object-position、倍率=1が標準 */
  imageStyles: {
    /* TOPは寝転び画像用。腰あたりから見えるように cover で調整 */
    main: { fit: "cover", position: "center 32%", scale: 1.22 },
    profile: { fit: "contain", position: "center", scale: 1 },
    yamato: { fit: "contain", position: "center", scale: 1 },
    haru: { fit: "contain", position: "center", scale: 1 },
    gallery: { fit: "contain", position: "center", scale: 1 },
  },

  partners: [
    {
      relation: "兄",
      name: "やまと",
      english: "YAMATO",
      image: "",
      alt: "やまと",
      styleKey: "yamato",
    },
    {
      relation: "妹",
      name: "はる",
      english: "HARU",
      image: "",
      alt: "はる",
      styleKey: "haru",
    },
  ],

  gallery: [
    {
      title: "キャラクター紹介",
      image: "",
      alt: "甘犬もか キャラクター紹介",
    },
    {
      title: "キャラクター設定資料",
      image: "",
      alt: "甘犬もか キャラクター設定資料",
    },
    {
      title: "初期モデル・キャラクターデザイン 01",
      image: "",
      alt: "甘犬もか 初期モデルのキャラクターデザイン",
    },
    {
      title: "初期モデル・キャラクターデザイン 02",
      image: "",
      alt: "甘犬もか 初期モデルのキャラクターデザイン",
    },
  ],

  litlinkUrl: "https://lit.link/amainumoka",

  /*
    問い合わせフォームを公開したらURLを設定してください。
    設定すると、コンタクトのリットリンクボタンを
    問い合わせフォームのボタンへ切り替えます。

    リットリンク閉鎖時は litlinkUrl を空欄にしてください。
  */
  businessFormUrl: "",
};

/* ==================================================
   クレジット

   BGMの追加例：
   {
     title: "曲名",
     creator: "作曲者名",
     siteName: "サイト・チャンネル名",
     musicUrl: "https://楽曲URL",
     siteUrl: "https://サイト・チャンネルURL",
     note: ""
   }

   効果音・画像・GIF・その他の追加例：
   {
     title: "素材名",
     creator: "制作者名",
     siteName: "サイト名",
     materialUrl: "https://素材URL",
     siteUrl: "https://サイトURL",
     note: ""
   }

   各 [] 内に追加します。
   複数項目はカンマで区切ってください。
   空欄のリンクは表示しません。
   ================================================== */

const creditData = {
  bgm: [],
  sound: [],
  visual: [],
  other: [],
};

function populateCreditData() {
  ["bgm", "sound", "visual", "other"].forEach((key) => {
    creditData[key] = [];
  });

  const source = window.MOKA_CREDITS;
  if (!source || !Array.isArray(source.items)) return;

  source.items.forEach((item) => {
    if (!item || typeof item !== "object") return;

    const key = String(item.category || "").trim();
    if (!Object.prototype.hasOwnProperty.call(creditData, key)) return;

    creditData[key].push(item);
  });
}

const youtubeChannelURL =
  "https://www.youtube.com/channel/UCH4GQz6j6P_DfWzfAFF0vpA";

const xAccountURL = "https://twitter.com/96moka_ocd";

const creatorData = [
  {
    role: "キャラクターデザイン",
    name: "りなる様",
    account: "@Orinaru_pipi",
    url: "https://x.com/Orinaru_pipi",
  },
  {
    role: "イラスト担当 / ママ",
    name: "とまつかぜ様",
    account: "@tomatsukaze",
    url: "https://x.com/tomatsukaze",
  },
  {
    role: "モデリング担当 / パパ",
    name: "INO様",
    account: "@ino_artworks",
    url: "https://x.com/ino_artworks",
  },
];

const linkData = [
  {
    title: "YouTube",
    label: "配信・動画・ショート",
    url: "https://youtube.com/@amainu_moka",
  },
  {
    title: "Twitch",
    label: "ライブ配信",
    url: "https://www.twitch.tv/amainu_moka",
  },
  {
    title: "TikTok",
    label: "ライブ配信・動画",
    url: "https://www.tiktok.com/@amainu.moka",
  },
  {
    title: "Instagram",
    label: "写真・日々の投稿",
    url: "https://www.instagram.com/moka_ocd/",
  },
  {
    title: "X",
    label: "活動のお知らせ・日々の投稿",
    url: xAccountURL,
  },
  {
    title: "FANBOX",
    label: "活動のご支援",
    url: "https://amainu-moka.fanbox.cc",
  },
  {
    title: "BOOTH",
    label: "オリジナルグッズ",
    url: "https://ama-moka.booth.pm",
  },
  {
    title: "どねる",
    label: "活動のご支援・ドネーション",
    url: "https://doneru.jp/amainu_moka",
  },
  {
    title: "ファンサーバー",
    label: "Discord / あまりすのコミュニティ",
    url: "https://discord.gg/sE7q4yhxyq",
  },
  {
    title: "Wishlist",
    label: "ほしいものリスト",
    url: "https://amazon.jp/hz/wishlist/ls/3KU6RL19LZI7U?ref_=wl_share",
  },
];

const tagData = [
  ["総合", "#甘犬もか"],
  ["ファンアート", "#甘犬いらすと"],
  ["配信", "#甘犬LIVE"],
  ["動画・ショート", "#甘犬VIDEO"],
  ["感想・見てほしいもの", "#甘犬あのね"],
  ["切り抜き", "#甘犬クリップ"],
];

/* ==================================================
   共通処理
   ================================================== */

const $ = (selector, scope = document) =>
  scope.querySelector(selector);

const escapeHTML = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);

const reducedMotion = matchMedia(
  "(prefers-reduced-motion: reduce)"
);

const scriptBase = new URL(
  ".",
  document.currentScript?.src || document.baseURI
);

const dataState = {
  news: { items: [], error: false, loaded: false },
  schedule: { items: [], error: false, loaded: false },
  works: { items: [], error: false, loaded: false },
};

function safeURL(value) {
  if (!value) return "";

  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol)
      ? url.href
      : "";
  } catch {
    return "";
  }
}

function safeImageURL(value) {
  if (!value) return "";

  try {
    const url = new URL(value, document.baseURI);
    return ["http:", "https:", "file:"].includes(url.protocol)
      ? url.href
      : "";
  } catch {
    return "";
  }
}

function paw() {
  return `
    <svg class="paw" viewBox="0 0 32 32"
         aria-hidden="true" focusable="false">
      <use href="#icon-paw"/>
    </svg>
  `;
}

function externalLink(label, value, className = "text-link") {
  const url = safeURL(value);
  if (!url) return "";

  return `
    <a class="${escapeHTML(className)}"
       href="${escapeHTML(url)}"
       target="_blank" rel="noopener noreferrer">
      ${escapeHTML(label)}${paw()}
    </a>
  `;
}

function emptyPanel(message) {
  return `
    <p class="empty empty--panel">
      ${escapeHTML(message)}
    </p>
  `;
}

function validDate(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatNewsDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
  return match
    ? `${match[1]}.${match[2]}.${match[3]}`
    : value || "";
}

function formatScheduleDate(value) {
  const date = validDate(value);
  if (!date) return "";

  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
}

function applyImageStyle(container, styleKey) {
  const style = siteConfig.imageStyles[styleKey] || {};
  container.style.setProperty("--image-object-fit", style.fit || "contain");
  container.style.setProperty("--image-object-position", style.position || "center");
  container.style.setProperty("--image-scale", String(Number(style.scale) > 0 ? style.scale : 1));
}

function initializeLogo() {
  // 元のロゴ画像をそのまま共用。画像の加工・置換は行いません。
  const url = safeImageURL(siteConfig.images.logo);
  if (!url) {
    console.warn("ロゴのパスが未設定です。siteConfig.images.logo に既存ロゴのパスを設定してください。");
    return;
  }

  const favicon = $("#siteFavicon");
  if (favicon) {
    favicon.href = url;
    if (/\.svg(?:[?#]|$)/i.test(url)) favicon.type = "image/svg+xml";
    else if (/\.png(?:[?#]|$)/i.test(url)) favicon.type = "image/png";
    else favicon.removeAttribute("type");
  }

  [$("#brandMark"), $("#openingLogo")].forEach((element) => {
    if (!element) return;
    const img = new Image();
    img.alt = "";
    img.decoding = "async";
    img.addEventListener("error", () => {
      console.error("ロゴ画像を読み込めません:", url);
    }, { once: true });
    img.src = url;
    element.replaceChildren(img);
  });
}

function initializeOpening() {
  const overlay = $("#openingOverlay");
  if (!overlay) return;
  const duration = reducedMotion.matches ? 50 : 2500;
  window.setTimeout(() => { overlay.classList.add("is-finished"); }, duration);
}

function mountImage(container, value, alt, label) {
  const url = safeImageURL(value);

  function placeholder() {
    container.innerHTML = `
      <div class="visual-placeholder">
        ${paw()}
        <strong>AMAINU MOKA</strong>
        <span>${escapeHTML(label)}</span>
      </div>
    `;
  }

  if (!url) {
    placeholder();
    return;
  }

  const image = new Image();
  image.alt = alt;
  image.decoding = "async";
  image.loading = container.id === "heroImage" ? "eager" : "lazy";

  image.addEventListener("error", placeholder, { once: true });
  image.src = url;
  container.replaceChildren(image);
}

/* ==================================================
   更新用ファイル読み込み
   ================================================== */

function loadDataScript(filename, globalName) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = new URL(filename, scriptBase).href;
    script.async = true;

    script.onload = () => {
      const data = window[globalName];

      if (!data || !Array.isArray(data.items)) {
        reject(new Error(`${filename} の items を確認してください。`));
        return;
      }

      resolve(
        data.items.filter((item) =>
          item && typeof item === "object" && !Array.isArray(item)
        )
      );
    };

    script.onerror = () => {
      reject(new Error(`${filename} を読み込めませんでした。`));
    };

    document.head.appendChild(script);
  });
}

async function loadPageData() {
  const definitions = [
    ["news", "news.js", "MOKA_NEWS", renderNews],
    ["schedule", "schedule.js", "MOKA_SCHEDULE", renderSchedule],
    ["works", "works.js", "MOKA_WORKS", renderWorks],
  ];

  await Promise.allSettled(
    definitions.map(async ([key, filename, globalName, render]) => {
      try {
        dataState[key].items = await loadDataScript(filename, globalName);
      } catch (error) {
        dataState[key].error = true;
        console.error(error);
      }

      dataState[key].loaded = true;
      render();
    })
  );
}

/* ==================================================
   プロフィール・猫画像
   ================================================== */

function renderProfile() {
  applyImageStyle($("#heroImage"), "main");
  applyImageStyle($("#profileImage"), "profile");

  mountImage(
    $("#heroImage"),
    siteConfig.images.main,
    "甘犬もか メインビジュアル",
    "メインビジュアル"
  );

  mountImage(
    $("#profileImage"),
    siteConfig.images.profile || siteConfig.images.main,
    "甘犬もか プロフィールビジュアル",
    "プロフィールビジュアル"
  );

  $("#creatorGrid").innerHTML = creatorData.map((item, index) => `
    <a class="creator-card"
       href="${escapeHTML(safeURL(item.url))}"
       target="_blank" rel="noopener noreferrer">
      <div class="card-top">
        <span class="card-number">
          ${String(index + 1).padStart(2, "0")}
        </span>
        ${paw()}
      </div>
      <p class="eyebrow">${escapeHTML(item.role)}</p>
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.account)}</p>
    </a>
  `).join("");

  const gallery = $("#galleryGrid");
  gallery.replaceChildren();

  siteConfig.gallery.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-card";

    const imageContainer = document.createElement("div");
    imageContainer.className = "gallery-image";
    applyImageStyle(imageContainer, "gallery");

    const caption = document.createElement("figcaption");
    caption.textContent = item.title;

    figure.append(imageContainer, caption);
    gallery.appendChild(figure);

    mountImage(imageContainer, item.image, item.alt, item.title);
  });

  const list = $("#partnerList");
  list.replaceChildren();

  siteConfig.partners.forEach((item) => {
    const card = document.createElement("div");
    card.className = "cat-card";

    const relation = document.createElement("span");
    relation.className = "cat-relation";
    relation.textContent = item.relation;

    const slot = document.createElement("div");
    slot.className = "partner-image-slot";
    applyImageStyle(slot, item.styleKey || "yamato");

    const name = document.createElement("div");
    name.className = "cat-name";

    const english = document.createElement("small");
    english.textContent = item.english;

    const japanese = document.createElement("strong");
    japanese.textContent = item.name;

    name.append(english, japanese);
    card.append(relation, slot, name);
    list.appendChild(card);

    function placeholder(message) {
      const element = document.createElement("span");
      element.className = "partner-image-placeholder";
      element.textContent = message;
      slot.replaceChildren(element);
    }

    const url = safeImageURL(item.image);

    if (!url) {
      placeholder(`${item.name}の画像`);
      return;
    }

    const image = new Image();
    image.alt = item.alt || item.name;
    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener("error", () => {
      placeholder("画像を読み込めませんでした");
    }, { once: true });

    image.src = url;
    slot.replaceChildren(image);
  });
}

/* ==================================================
   リンク・お問い合わせ
   ================================================== */

function renderLinks() {
  const items = [...linkData];

  if (safeURL(siteConfig.litlinkUrl)) {
    items.push({
      title: "Lit.Link",
      label: "各種リンク・お問い合わせ先",
      url: siteConfig.litlinkUrl,
    });
  }

  $("#linkGrid").innerHTML = items.map((item, index) => `
    <a class="link-card"
       href="${escapeHTML(safeURL(item.url))}"
       target="_blank" rel="noopener noreferrer">
      <div class="card-top">
        <span class="card-number">
          ${String(index + 1).padStart(2, "0")}
        </span>
        ${paw()}
      </div>
      <h2>${escapeHTML(item.title)}</h2>
      <p>${escapeHTML(item.label)}</p>
    </a>
  `).join("");

  $("#tagGrid").innerHTML = tagData.map(([label, tag]) => `
    <div class="tag-card">
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(tag)}</strong>
    </div>
  `).join("");

  const formURL = safeURL(siteConfig.businessFormUrl);
  const litlinkURL = safeURL(siteConfig.litlinkUrl);

  $("#contactDescription").textContent = formURL
    ? "企業向けお問い合わせフォーム、またはXのDMからご連絡ください。"
    : litlinkURL
      ? "リットリンクに記載のメール、またはXのDMからご連絡ください。"
      : "お仕事・コラボのご連絡は、XのDMからお願いします。";

  $("#contactButtons").innerHTML = `
    ${externalLink("Xで連絡する", xAccountURL, "button")}
    ${
      formURL
        ? externalLink("お問い合わせフォーム", formURL, "button")
        : externalLink("リットリンク", litlinkURL, "button")
    }
  `;
}

/* ==================================================
   URLコピー
   ================================================== */

function copyResource(label, url, id) {
  return `
    <section class="copy-resource">
      <h3>${escapeHTML(label)}</h3>
      <div class="copy-resource-controls">
        <input class="copy-url" id="${escapeHTML(id)}"
               type="text" readonly spellcheck="false"
               aria-label="${escapeHTML(label)}のURL"
               value="${escapeHTML(url)}">
        <button class="copy-button" type="button"
                data-copy-target="${escapeHTML(id)}">
          コピー${paw()}
        </button>
      </div>
      <p class="copy-status" role="status"
         aria-live="polite" aria-atomic="true"></p>
      ${externalLink("リンクを開く", url)}
    </section>
  `;
}

function initializeCopyLinks() {
  const resources = $("#clipResources");

  resources.innerHTML =
    copyResource("YouTubeチャンネル", youtubeChannelURL, "clipYouTubeURL") +
    copyResource("Xアカウント", xAccountURL, "clipXURL");

  let copying = false;

  resources.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-copy-target]");
    if (!button || copying) return;

    const input = document.getElementById(button.dataset.copyTarget);
    const status = $(".copy-status", button.closest(".copy-resource"));

    copying = true;
    input.focus({ preventScroll: true });
    input.select();
    input.setSelectionRange(0, input.value.length);

    let copied = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(input.value);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
    }

    if (copied) {
      status.textContent = "URLをコピーしました。";
      button.focus({ preventScroll: true });
    } else {
      input.focus({ preventScroll: true });
      input.select();
      input.setSelectionRange(0, input.value.length);
      status.textContent =
        "URLを選択しました。端末のコピー操作をご利用ください。";
    }

    copying = false;
  });
}

/* ==================================================
   お知らせ
   ================================================== */

function renderNews() {
  const state = dataState.news;

  if (!state.loaded) {
    $("#newsList").innerHTML = emptyPanel("お知らせを読み込んでいます。");
    $("#homeNews").innerHTML =
      '<p class="empty">お知らせを読み込んでいます。</p>';
    return;
  }

  if (state.error) {
    $("#newsList").innerHTML = emptyPanel("お知らせを読み込めませんでした。");
    $("#homeNews").innerHTML =
      '<p class="empty">お知らせを読み込めませんでした。</p>';
    return;
  }

  const items = [...state.items].sort((a, b) =>
    String(b.date || "").localeCompare(String(a.date || ""))
  );

  if (!items.length) {
    $("#newsList").innerHTML =
      emptyPanel("現在、掲載中のお知らせはありません。");
    $("#homeNews").innerHTML =
      '<p class="empty">新しいお知らせは、こちらに掲載します。</p>';
    return;
  }

  $("#newsList").innerHTML = items.map((item) => `
    <article class="news-card">
      <div class="news-meta">
        <time>${escapeHTML(formatNewsDate(item.date))}</time>
        <span class="badge">
          ${escapeHTML(item.category || "お知らせ")}
        </span>
      </div>
      <h2>${escapeHTML(item.title)}</h2>
      <p>${escapeHTML(item.text)}</p>
      ${externalLink(item.linkLabel || "詳細を見る", item.url)}
    </article>
  `).join("");

  $("#homeNews").innerHTML = items.slice(0, 3).map((item) => `
    <article class="news-preview">
      <div class="news-meta">
        <time>${escapeHTML(formatNewsDate(item.date))}</time>
        <span class="badge">
          ${escapeHTML(item.category || "お知らせ")}
        </span>
      </div>
      <h3>${escapeHTML(item.title)}</h3>
    </article>
  `).join("");
}

/* ==================================================
   配信スケジュール
   ================================================== */

function renderSchedule() {
  const state = dataState.schedule;

  if (!state.loaded) {
    $("#scheduleList").innerHTML = emptyPanel("配信予定を読み込んでいます。");
    $("#homeSchedule").innerHTML =
      '<p class="empty">配信予定を読み込んでいます。</p>';
    return;
  }

  if (state.error) {
    $("#scheduleList").innerHTML = emptyPanel(
      "配信予定を読み込めませんでした。最新情報はXをご確認ください。"
    );
    $("#homeSchedule").innerHTML =
      externalLink("最新情報を見る", xAccountURL);
    return;
  }

  const now = Date.now();

  const items = state.items.filter((item) => {
    const start = validDate(item.start);
    if (!start) return false;

    const end = validDate(item.end);
    const expiry = end
      ? end.getTime()
      : start.getTime() + 6 * 60 * 60 * 1000;

    return expiry > now;
  }).sort((a, b) => new Date(a.start) - new Date(b.start));

  if (!items.length) {
    $("#scheduleList").innerHTML = `
      <div class="schedule-empty">
        ${paw()}
        <h2>Stay Tuned.</h2>
        <p>
          次回の配信予定は準備中です。<br>
          最新情報はXでお知らせします。
        </p>
        ${externalLink("Xで確認する", xAccountURL, "button")}
      </div>
    `;

    $("#homeSchedule").innerHTML = `
      <p class="empty">次回の配信予定は準備中です。</p>
      ${externalLink("最新情報を見る", xAccountURL)}
    `;
    return;
  }

  $("#scheduleList").innerHTML = `
    <div class="schedule-items">
      ${items.map((item) => `
        <article class="schedule-item">
          <time datetime="${escapeHTML(item.start)}">
            ${escapeHTML(formatScheduleDate(item.start))}
          </time>
          <div>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.platform || "")}</p>
          </div>
          ${externalLink("配信を見る", item.url)}
        </article>
      `).join("")}
    </div>
  `;

  const next = items[0];

  $("#homeSchedule").innerHTML = `
    <div class="schedule-preview">
      <h3>${escapeHTML(next.title)}</h3>
      <p>${escapeHTML(formatScheduleDate(next.start))} / JST</p>
      ${externalLink("配信を見る", next.url)}
    </div>
  `;
}

/* ==================================================
   クレジット
   Worksと同じカードデザイン
   ================================================== */

function renderCredits() {
  const groups = [
    ["bgm", "BGM", "Background Music"],
    ["sound", "効果音", "Sound Effects"],
    ["visual", "画像・GIF素材", "Images & GIFs"],
    ["other", "その他クレジット", "Other Credits"],
  ];

  $("#creditSections").innerHTML = groups.map(([key, title, english]) => {
    const items = creditData[key];

    return `
      <section class="credit-section"
               aria-labelledby="credit-${key}-heading">
        <div class="sub-heading">
          <p class="eyebrow">${escapeHTML(english)}</p>
          <h2 id="credit-${key}-heading">${escapeHTML(title)}</h2>
        </div>

        <div class="credit-grid">
          ${
            items.length
              ? items.map((item) => `
                  <article class="work-card credit-card">
                    <div class="work-meta">
                      <span class="badge">${escapeHTML(title)}</span>
                      ${item.siteName ? `<span>${escapeHTML(item.siteName)}</span>` : ""}
                    </div>

                    <h2>${escapeHTML(item.title || item.siteName || title)}</h2>

                    ${
                      item.creator
                        ? `<p class="eyebrow credit-source">${escapeHTML(item.creator)}</p>`
                        : ""
                    }

                    ${
                      item.note
                        ? `<p class="credit-note">${escapeHTML(item.note)}</p>`
                        : ""
                    }

                    ${
                      item.siteName
                        ? `<p class="credit-site">${escapeHTML(item.siteName)}</p>`
                        : ""
                    }

                    <div class="credit-links">
                      ${
                        key === "bgm"
                          ? externalLink("楽曲リンク", item.musicUrl)
                          : externalLink("素材リンク", item.materialUrl)
                      }
                      ${externalLink(
                        key === "bgm" ? "サイト・チャンネル" : "素材サイト",
                        item.siteUrl
                      )}
                    </div>
                  </article>
                `).join("")
              : emptyPanel(`${title}のクレジットは準備中です。`)
          }
        </div>
      </section>
    `;
  }).join("");
}

/* ==================================================
   実績カテゴリ
   ================================================== */

let selectedWorkCategory = "すべて";

function initializeWorks() {
  const categories = [
    ["すべて", "ALL"],
    ["メディア", "メディア"],
    ["PR", "PR"],
    ["グッズ", "グッズ"],
    ["イベント", "イベント"],
    ["ビジョン・広告", "ビジョン・広告"],
  ];

  $("#worksFilters").innerHTML = categories.map(([value, label]) => `
    <button class="filter-button" type="button"
            data-work-category="${escapeHTML(value)}"
            aria-pressed="${value === selectedWorkCategory}"
            aria-controls="worksGrid">
      ${escapeHTML(label)}
    </button>
  `).join("");

  $("#worksFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-work-category]");
    if (!button) return;

    const next = button.dataset.workCategory;
    if (next === selectedWorkCategory) return;

    selectedWorkCategory = next;
    renderWorks(true);
  });
}

function renderWorks(animate = false) {
  const grid = $("#worksGrid");
  const state = dataState.works;

  $("#worksFilters").querySelectorAll("button").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.workCategory === selectedWorkCategory)
    );
  });

  if (!state.loaded) {
    $("#worksCount").textContent = "";
    grid.innerHTML = emptyPanel("実績を読み込んでいます。");
    return;
  }

  if (state.error) {
    $("#worksCount").textContent = "";
    grid.innerHTML = emptyPanel("実績を読み込めませんでした。");
    return;
  }

  const items = state.items.filter((item) =>
    selectedWorkCategory === "すべて" ||
    item.category === selectedWorkCategory
  );

  $("#worksCount").textContent =
    `${items.length}件 / 全${state.items.length}件`;

  grid.innerHTML = items.length
    ? items.map((item) => `
        <article class="work-card">
          <div class="work-meta">
            <span class="badge">${escapeHTML(item.category)}</span>
            ${item.date ? `<span>${escapeHTML(item.date)}</span>` : ""}
          </div>
          <h2>${escapeHTML(item.title)}</h2>
          <p class="eyebrow">${escapeHTML(item.client)}</p>
          <p>${escapeHTML(item.text)}</p>

          ${
            Array.isArray(item.links) && item.links.length
              ? `
                <div class="work-links">
                  ${item.links.map((link) =>
                    externalLink(link.label, link.url)
                  ).join("")}
                </div>
              `
              : ""
          }
        </article>
      `).join("")
    : emptyPanel("このカテゴリの実績はありません。");

  if (animate && !reducedMotion.matches && grid.animate) {
    grid.animate(
      [
        { opacity: 0, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 380, easing: "cubic-bezier(.22,1,.36,1)" }
    );
  }
}

/* ==================================================
   ページ切り替え・文字送り
   ================================================== */

function initializeNavigation() {
  const pages = Array.from(document.querySelectorAll(".page"));
  const nav = $("#siteNav");
  const menu = $("#menuButton");
  const desktop = matchMedia("(min-width: 1201px)");
  const originals = new WeakMap();

  let currentPage = null;

  function closeMenu() {
    nav.classList.remove("is-open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "メニューを開く");
  }

  function restoreHeading(heading) {
    if (!heading || !originals.has(heading)) return;

    heading.replaceChildren(
      ...originals.get(heading).map((node) => node.cloneNode(true))
    );
  }

  function typeHeading(heading) {
    if (!heading) return;

    if (!originals.has(heading)) {
      originals.set(
        heading,
        Array.from(heading.childNodes).map((node) =>
          node.cloneNode(true)
        )
      );
    }

    restoreHeading(heading);
    if (reducedMotion.matches) return;

    const walker = document.createTreeWalker(
      heading,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    const length = Math.max(
      1,
      Array.from(heading.textContent.trim()).length
    );

    const interval = Math.min(42, 600 / length);
    let index = 0;

    nodes.forEach((node) => {
      const fragment = document.createDocumentFragment();

      Array.from(node.nodeValue).forEach((character) => {
        if (/\s/.test(character)) {
          fragment.appendChild(document.createTextNode(character));
          return;
        }

        const span = document.createElement("span");
        span.className = "heading-character";
        span.textContent = character;
        span.style.setProperty(
          "--character-delay",
          `${index++ * interval}ms`
        );

        fragment.appendChild(span);
      });

      node.replaceWith(fragment);
    });
  }

  function route(initial = false) {
    const requested = location.hash.slice(1) || "home";

    if (requested === "main") {
      $("#main").focus({ preventScroll: true });
      return;
    }

    const next =
      pages.find((page) => page.dataset.page === requested) ||
      pages.find((page) => page.dataset.page === "home");

    if (next === currentPage) {
      closeMenu();
      return;
    }

    pages.forEach((page) => {
      page.hidden = page !== next;
      page.classList.remove("is-entering");
    });

    currentPage = next;

    nav.querySelectorAll("a").forEach((link) => {
      if (link.hash === `#${next.dataset.page}`) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    closeMenu();

    const heading = $(".page-heading h1", next);
    const name = next.dataset.page;

    document.title = name === "home"
      ? "甘犬もか | AMAINU MOKA"
      : `${name.charAt(0).toUpperCase() + name.slice(1)} | 甘犬もか`;

    if (!initial && !reducedMotion.matches) {
      const transition = $("#pagePawTransition");
      if (transition) {
        transition.classList.remove("is-active");
        void transition.offsetWidth;
        transition.classList.add("is-active");
        window.setTimeout(() => transition.classList.remove("is-active"), 650);
      }
    }

    if (!initial) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      heading?.focus({ preventScroll: true });
    }

    typeHeading(heading);

    if (!reducedMotion.matches) {
      void next.offsetWidth;
      next.classList.add("is-entering");
    }
  }

  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";

    nav.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute(
      "aria-label",
      open ? "メニューを閉じる" : "メニューを開く"
    );
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu();
      menu.focus();
    }
  });

  desktop.addEventListener("change", () => {
    if (desktop.matches) closeMenu();
  });

  reducedMotion.addEventListener("change", () => {
    if (!reducedMotion.matches) return;

    pages.forEach((page) => {
      page.classList.remove("is-entering");
      restoreHeading($(".page-heading h1", page));
    });
  });

  pages.forEach((page) => {
    page.addEventListener("animationend", (event) => {
      if (event.target === page && event.animationName === "page-enter") {
        page.classList.remove("is-entering");
      }
    });
  });

  window.addEventListener("hashchange", () => route(false));
  route(true);
}

/* ==================================================
   肉球カーソル
   ================================================== */

function initializeCursor() {
  const finePointer = matchMedia(
    "(hover: hover) and (pointer: fine)"
  );

  const namespace = "http://www.w3.org/2000/svg";
  const layer = document.createElement("div");

  layer.className = "cursor-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  const paws = Array.from({ length: 7 }, (_, index) => {
    const svg = document.createElementNS(namespace, "svg");
    const use = document.createElementNS(namespace, "use");

    svg.setAttribute("viewBox", "0 0 32 32");
    svg.setAttribute("focusable", "false");
    svg.classList.add("cursor-paw");
    use.setAttribute("href", "#icon-paw");

    svg.appendChild(use);
    layer.appendChild(svg);

    return {
      element: svg,
      x: 0,
      y: 0,
      life: 0,
      rotation: index % 2 ? 18 : -18,
    };
  });

  let index = 0;
  let frame = 0;
  let lastFrame = 0;
  let lastSpawn = 0;
  let lastX = null;
  let lastY = null;

  function enabled() {
    return finePointer.matches &&
      !reducedMotion.matches &&
      !document.hidden;
  }

  function clear() {
    if (frame) cancelAnimationFrame(frame);

    frame = 0;
    lastFrame = 0;
    lastSpawn = 0;
    lastX = null;
    lastY = null;

    paws.forEach((item) => {
      item.life = 0;
      item.element.style.opacity = "0";
    });
  }

  function draw(time) {
    const delta = lastFrame ? Math.min(time - lastFrame, 50) : 16;
    lastFrame = time;

    let active = false;

    paws.forEach((item) => {
      if (item.life <= 0) return;

      item.life = Math.max(0, item.life - delta / 850);
      const progress = 1 - item.life;

      item.element.style.opacity = String(item.life * .17);
      item.element.style.transform =
        `translate3d(${item.x - 15}px,${item.y - 15 - progress * 14}px,0) ` +
        `rotate(${item.rotation}deg) scale(${.8 + progress * .25})`;

      if (item.life > 0) active = true;
    });

    if (active && enabled()) {
      frame = requestAnimationFrame(draw);
    } else {
      frame = 0;
      lastFrame = 0;
    }
  }

  document.addEventListener("pointermove", (event) => {
    if (!enabled() || event.pointerType !== "mouse") return;

    const now = performance.now();
    if (now - lastSpawn < 95) return;

    if (
      lastX !== null &&
      Math.hypot(event.clientX - lastX, event.clientY - lastY) < 24
    ) return;

    lastSpawn = now;
    lastX = event.clientX;
    lastY = event.clientY;

    const item = paws[index];
    item.x = event.clientX + 18;
    item.y = event.clientY + 22;
    item.life = 1;

    index = (index + 1) % paws.length;

    if (!frame) frame = requestAnimationFrame(draw);
  }, { passive: true });

  document.documentElement.addEventListener("pointerleave", clear);
  window.addEventListener("blur", clear);
  finePointer.addEventListener("change", clear);
  reducedMotion.addEventListener("change", clear);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clear();
  });
}

/* ==================================================
   初期化
   ================================================== */

function initialize() {
  populateCreditData();
  initializeLogo();
  initializeOpening();
  renderProfile();
  renderLinks();
  initializeCopyLinks();
  renderCredits();
  initializeWorks();

  renderNews();
  renderSchedule();
  renderWorks();

  initializeNavigation();
  initializeCursor();

  $("#copyrightYear").textContent = new Date().getFullYear();

  loadPageData();

  window.setInterval(() => {
    if (!document.hidden && dataState.schedule.loaded) {
      renderSchedule();
    }
  }, 60 * 1000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize, { once: true });
} else {
  initialize();
}
