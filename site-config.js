/*
 * 甘犬 もかのホームページ設定
 * 文字・リンク・お知らせ・LIVE表示は、主にこのファイルを編集します。
 * コロンの右側だけを書き換え、引用符とカンマは残してください。
 * 空の項目はサイト上で案内文に切り替わるか、非表示になります。
 */

window.MOKA_CONFIG = {
  name: "甘犬 もか",
  englishName: "Amainu Moka",

  // 仮のキャッチコピー。自由に変更できます。
  tagline: "甘く、気ままに。夜は、これから。",

  links: {
    x: "https://x.com/96moka_ocd",
    youtube: "https://www.youtube.com/@amainu_moka",

    // 招待URLが決まったら引用符の間に入力
    fanServer: "",
  },

  images: {
    // ご用意いただく画像はTOP用の1枚だけです（約1080×1920、9:16）。
    // 背景・色・装飾はCSSで表示します。背景画像の用意は不要です。
    character: "images/character.png",
    characterAlt: "甘犬 もかのメインビジュアル",

    // 縦長画像は portrait、透過立ち絵は cutout
    characterMode: "portrait",

    // 文字ロゴを表示。後日画像を使う場合のみ設定
    logo: "",

    // 通常は空欄。CSSの背景色を使います
    wallpaper: "",

    // 通常は空欄。用意不要
    moon: "",

    // 任意。予定を画像で載せる場合のみ設定
    schedule: "",
    scheduleAlt: "甘犬 もかの配信スケジュール",
  },

  /*
   * LIVEは手動設定です。
   * 配信サービスからの自動取得は行いません。
   *
   * 配信開始時：enabled を true
   * 配信終了時：enabled を false
   *
   * endsAt を指定すると、その日時を過ぎた時点で表示が消えます。
   */
  live: {
    enabled: false,
    url: "https://www.youtube.com/@amainu_moka/live",
    title: "配信を見にいく",

    // 例: "2026-10-09T21:00:00+09:00"
    startsAt: "",

    // 例: "2026-10-10T00:00:00+09:00"
    endsAt: "",
  },

  /*
   * お知らせ。配列の先頭から表示されます。
   *
   * 記入例：
   *
   * news: [
   *   {
   *     date: "2026-09-10",
   *     category: "NEWS",
   *     title: "お知らせの本文",
   *     url: "https://x.com/96moka_ocd",
   *   },
   * ],
   */
  news: [],

  /*
   * 文字で掲載する配信予定。
   *
   * 記入例：
   *
   * schedule: [
   *   {
   *     start: "2026-10-09T21:00:00+09:00",
   *     title: "配信タイトル",
   *     platform: "YouTube",
   *     url: "https://www.youtube.com/@amainu_moka/live",
   *   },
   * ],
   */
  schedule: [],

  // TOP画像はTOPだけに表示。追加画像がある場合のみ設定
  gallery: [],

  /*
   * 内容とリンクが確定するまで非表示。
   * 所属事務所・制作クレジットなど、掲載内容に合わせて設定できます。
   */
  production: {
    text: "",
    label: "詳しく見る",
    url: "",
  },
};
