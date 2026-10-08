
"use strict";

/*
 * ==================================================
 * AMAINU MOKA / CREDITS
 * ==================================================
 *
 * クレジット管理専用ファイル
 *
 * このファイルだけで以下の情報を管理できます。
 *
 * ・使用楽曲 / BGM
 * ・効果音
 * ・画像 / GIF / 動画素材
 * ・その他の使用素材・サービス
 *
 * 表示形式：
 * PC：Worksページと同じ2列カード形式
 * スマートフォン：1列カード形式
 *
 * カテゴリ：
 * "bgm"    BGM・使用楽曲
 * "sound"  効果音
 * "visual" 画像・GIF素材
 * "other"  その他
 *
 * 登録項目：
 *
 * category    カテゴリ（必須）
 * title       曲名・素材名（必須）
 * creator     アーティスト・制作者名
 * siteName    サイト名・チャンネル名
 * musicUrl    楽曲URL（BGM用）
 * materialUrl 素材URL（BGM以外）
 * siteUrl     サイト・チャンネルURL
 * note        補足・必要なクレジット表記
 *
 * 【追加方法】
 *
 * 1. items 内に新しい { ... } を追加します。
 * 2. 各項目をカンマで区切ります。
 * 3. 必要な情報を入力します。
 * 4. GitHubへ保存するとサイトに反映されます。
 *
 * 【注意】
 *
 * ・既存項目は削除しないでください。
 * ・URLが不要な場合は "" にしてください。
 * ・改行したい場合は \n を使用してください。
 * ・実際に使用している素材のみ登録してください。
 * ・楽曲や素材の利用条件は各提供元で確認してください。
 *
 * ==================================================
 */

window.MOKA_CREDITS = {

  items: [

    /* ==============================================
       BGM / 使用楽曲
       ============================================== */

    {
      category: "bgm",
      title: "Different Heaven & EH!DE",
      creator: "Different Heaven & EH!DE",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/jK2aIUmmdP4",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    {
      category: "bgm",
      title: "Adventure | Glitch Hop",
      creator: "JJD",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/f2xGxd9xPYA",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    {
      category: "bgm",
      title: "Freakshow",
      creator: "Dirty Palm",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/2jwj9wVx3mg",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    {
      category: "bgm",
      title: "PULL UP",
      creator: "ANGELPLAYA",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/aQmeIePES6g",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    {
      category: "bgm",
      title: "Party Pioneers",
      creator: "Rudeejay & NOYSE",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/LRs8Qu_X3EY",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    {
      category: "bgm",
      title: "Different Eyes",
      creator: "MVSTAFA x ANIZYZ",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/oHJxWgpMmSY",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    {
      category: "bgm",
      title: "Nova",
      creator: "Ahrix",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/WfvzuniZTRA",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    {
      category: "bgm",
      title: "Burn it Down",
      creator: "Robin Hustin",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/xMCXZj5zwBE",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    {
      category: "bgm",
      title: "Phenomenon",
      creator: "Unknown Brain, Dax, VinDon",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/LO9vChXMBp8?si=ye7v2swQZv73CyJ8",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    {
      category: "bgm",
      title: "No Stopping Love",
      creator: "Dirty Palm",
      siteName: "NoCopyrightSounds (NCS)",
      musicUrl: "https://youtu.be/xFoGtSiqins?si=Kf88rlD6cqypiRfN",
      siteUrl: "https://ncs.io/",
      note: ""
    },

    /* ==============================================
       BGM / 音楽素材提供サイト
       ============================================== */

    {
      category: "bgm",
      title: "NoCopyrightSounds",
      creator: "",
      siteName: "NCS",
      musicUrl: "",
      siteUrl: "https://ncs.io/",
      note: "使用楽曲の提供元サイト。"
    },

    {
      category: "bgm",
      title: "DOVA-SYNDROME",
      creator: "",
      siteName: "DOVA-SYNDROME",
      musicUrl: "",
      siteUrl: "https://dova-s.jp/",
      note: "BGM素材提供サイト。"
    },

    /* ==============================================
       SOUND / 効果音
       ============================================== */

    {
      category: "sound",
      title: "効果音ラボ",
      creator: "",
      siteName: "効果音ラボ",
      materialUrl: "",
      siteUrl: "https://soundeffect-lab.info/",
      note: "配信・動画制作で使用している効果音素材の提供元。"
    },

    /* ==============================================
       VISUAL / 画像・GIF・動画素材
       ============================================== */

    {
      category: "visual",
      title: "Pixabay",
      creator: "",
      siteName: "Pixabay",
      materialUrl: "",
      siteUrl: "https://pixabay.com/ja/",
      note: "画像・映像素材の提供元サイト。"
    }

    /* ==============================================
       OTHER / その他
       ============================================== */

    /*
     * 現在、登録項目はありません。
     *
     * その他の素材やサービスを追加する場合は、
     * 直前の項目の閉じ括弧 } の後ろに
     * カンマを追加してから記入してください。
     *
     * {
     *   category: "other",
     *   title: "使用素材・サービス名",
     *   creator: "制作者名",
     *   siteName: "サイト名",
     *   materialUrl: "",
     *   siteUrl: "https://example.com/",
     *   note: ""
     * }
     */

  ]

};

/*
 * ==================================================
 * 新しいクレジットの追加テンプレート
 * ==================================================
 *
 * 以下から必要なものをコピーし、
 * 上の items 配列に追加してください。
 *
 * この部分はコメントなのでサイトに表示されません。
 *
 * ==================================================
 *
 * 【使用楽曲】
 *
 * {
 *   category: "bgm",
 *   title: "楽曲名",
 *   creator: "アーティスト名",
 *   siteName: "提供元・チャンネル名",
 *   musicUrl: "https://...",
 *   siteUrl: "https://...",
 *   note: ""
 * },
 *
 * 【効果音】
 *
 * {
 *   category: "sound",
 *   title: "効果音・素材名",
 *   creator: "制作者名",
 *   siteName: "サイト名",
 *   materialUrl: "https://...",
 *   siteUrl: "https://...",
 *   note: ""
 * },
 *
 * 【画像・GIF素材】
 *
 * {
 *   category: "visual",
 *   title: "画像・GIF素材名",
 *   creator: "制作者名",
 *   siteName: "サイト名",
 *   materialUrl: "https://...",
 *   siteUrl: "https://...",
 *   note: ""
 * },
 *
 * 【その他】
 *
 * {
 *   category: "other",
 *   title: "素材・サービス名",
 *   creator: "制作者名",
 *   siteName: "サイト名",
 *   materialUrl: "https://...",
 *   siteUrl: "https://...",
 *   note: ""
 * }
 *
 * ==================================================
 */
