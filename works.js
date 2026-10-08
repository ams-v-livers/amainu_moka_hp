
/* ==================================================
   案件・イベント実績専用ファイル

   items の中に追加します。
   記載した順番で表示されます。

   新しい実績を上に表示する場合は、
   items の一番上に追加してください。

   追加例：
   {
     client: "企業名",
     category: "PR",
     title: "案件・イベント名",
     date: "2026.10.08",
     text: "掲載内容。\n複数行にもできます。",
     links: [
       { label: "詳細を見る", url: "https://..." }
     ]
   }

   category：
   メディア / PR / グッズ / イベント / ビジョン・広告

   日付不要：date: ""
   リンク不要：links: [] または links 自体を省略

   年が指定されていない実績は、年を補完していません。
   ================================================== */

window.MOKA_WORKS = {
  items: [
    {
      client: "Vtuberスタイル",
      category: "メディア",
      title: "インタビュー記事掲載",
      date: "2022年12月号",
      text: "雑誌「Vtuberスタイル」インタビュー記事掲載。",
    },
    {
      client: "Vtubermode",
      category: "メディア",
      title: "インタビュー記事掲載",
      date: "vol.3 / 2023年8月号増刊",
      text: "雑誌「Vtubermode」インタビュー記事掲載。",
    },
    {
      client: "赤名酒造",
      category: "PR",
      title: "10周年記念 第1回アンバサダー",
      date: "",
      text: "10周年絹乃峰PR。\nコラボグッズ販売。",
    },
    {
      client: "Kind Creation",
      category: "グッズ",
      title: "ワインガトークラシック・グレープドリンク",
      date: "",
      text: "コラボオリジナルラベル・コラボグッズ販売。",
    },
    {
      client: "CFK Co.,Ltd.",
      category: "PR",
      title: "「のらねこ物語2」販売記念PR",
      date: "",
      text: "「のらねこ物語」をYouTubeにて配信。\nNintendo Switch・Steam向けゲーム。",
    },
    {
      client: "赤名酒造",
      category: "PR",
      title: "10周年記念 第2回アンバサダー",
      date: "",
      text: "10周年絹乃峰PR。\nコラボグッズ販売。",
    },
    {
      client: "ラブコスメ",
      category: "PR",
      title: "梅酒PR・オリジナルグッズ",
      date: "",
      text: "梅酒PR販売。\nオリジナルグッズをAmazonにて販売。",
    },
    {
      client: "Cafeカスミソウ",
      category: "グッズ",
      title: "フード・コーヒー・グッズコラボ",
      date: "",
      text: "ローストビーフ、コラボラベルパッケージコーヒー、コラボオリジナルグッズ販売。",
    },
    {
      client: "Vコネ",
      category: "イベント",
      title: "夏のコミックマーケット グッズ販売",
      date: "2023年",
      text: "VTuberコミュニティ「Vコネ」の全体グッズ販売。\n個人グッズの一部販売。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "グッズ",
      title: "デジタルコンテンツ・ボイスガチャ",
      date: "",
      text: "デジタルコンテンツとボイスガチャ販売。\n販売期間：約1年。",
    },
    {
      client: "CFK Co.,Ltd.",
      category: "PR",
      title: "「zombiehunter」PR",
      date: "",
      text: "YouTubeにてPR配信。\nNintendo Switch・Steam向けゲーム。",
    },
    {
      client: "KDDI",
      category: "イベント",
      title: "αUmetaverse ライバーランキング決定戦 Vol.7",
      date: "",
      text: "アプリ「αUmetaverse」ライバーランキング決定戦 Vol.7 出場。",
    },
    {
      client: "株式会社DC7",
      category: "グッズ",
      title: "第21回 どこでもキャッチャーコラボ祭",
      date: "",
      text: "オンラインクレーンゲーム「どこでもキャッチャー」とコラボ。\nオリジナルグッズクレーン商品。",
    },
    {
      client: "ときめきVR",
      category: "イベント",
      title: "ときフェス Vol.7",
      date: "2023.05.25 – 06.02",
      text: "イベント出演。\n2023年5月24日：公式YouTubeチャンネルの開催記念生放送に出演。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "グッズ",
      title: "HELLOWEEN EDITION 2023",
      date: "2023年",
      text: "デジタルコンテンツ・ボイスガチャ限定販売。",
    },
    {
      client: "KDDI",
      category: "イベント",
      title: "バーチャルハロウィンカップ2023",
      date: "2023年",
      text: "αUmetaverse ライバーランキング決定戦出場。\nアプリPR。",
    },
    {
      client: "KingsGroup International AG",
      category: "PR",
      title: "「ステートオブサバイバル」PC版PR",
      date: "",
      text: "YouTubeにてPR配信。",
    },
    {
      client: "自遊空間",
      category: "ビジョン・広告",
      title: "FanPicks特設ページ掲載",
      date: "2023年11月末まで",
      text: "全店のポータルサイト「FanPicks特設ページ内」に1か月間掲載。",
    },
    {
      client: "CFK Co.,Ltd.",
      category: "PR",
      title: "「ビフォア・ザ・ナイト」PR",
      date: "",
      text: "Nintendo Switch版をYouTubeにてPR配信。",
    },
    {
      client: "KDDI",
      category: "PR",
      title: "povoキャンペーンPR",
      date: "",
      text: "コラボキャンペーン特別コード配布。\nXにてPR。",
    },
    {
      client: "湘南台SACHI菓子",
      category: "PR",
      title: "コラボクッキー缶",
      date: "",
      text: "コラボクッキー缶の食レポPR配信。\nコラボクッキー缶・コラボグッズ販売。",
    },
    {
      client: "MAGNET by SHIBUYA109 / UP-T",
      category: "イベント",
      title: "渋谷をジャックせよ！2",
      date: "2024.02.15 – 03.06",
      text: "オリジナルグッズ作成・販売・PR。\n6階VTuber POP-UP STORE内で音声付きCM放映。\nランダムブロマイド・集合イラストのクリアファイル販売。\nCM放映：2024年2月29日〜3月6日。",
    },
    {
      client: "VirtualFantasia",
      category: "グッズ",
      title: "Vと正月を楽しもう！",
      date: "2024.01.01 – 01.10",
      text: "正月イベント2024。\n煎茶とオリジナルグッズ販売。",
    },
    {
      client: "V NOTE!!",
      category: "メディア",
      title: "2月号 特別付録版 インタビュー",
      date: "",
      text: "VTuber専門雑誌の特別付録版にインタビュー記事掲載。",
    },
    {
      client: "レヱル・ロマネスク",
      category: "PR",
      title: "「レヱル・ロマネスク オリジン」販売記念PR",
      date: "2023.12.21 発売",
      text: "「まいてつ -pure station-」を原作とする、鉄道をモチーフにした癒しと復興の物語。\nNintendo Switch版よりPR配信。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "ビジョン・広告",
      title: "TOKYO XR・メタバース＆コンテンツ ビジネスワールド",
      date: "2024.01.26 – 01.28",
      text: "東京ビッグサイトにてポスター掲載。",
    },
    {
      client: "Vfantasia",
      category: "グッズ",
      title: "世界に一つだけのVグッズ",
      date: "2月10日 – 2月20日",
      text: "グッズコラボ。\nチェキ風フォトカード販売。",
    },
    {
      client: "VTuber cafe&bar 本棚",
      category: "イベント",
      title: "けもみみ大集合カフェ",
      date: "2024.02.26 – 02.29",
      text: "カフェポスター出演。",
    },
    {
      client: "NTT docomo",
      category: "イベント",
      title: "MetaMe 笑ってVとも!!",
      date: "2024.03.23・03.24",
      text: "配信リレーイベント出演。",
    },
    {
      client: "Re:vius",
      category: "グッズ",
      title: "コラボ限定商品",
      date: "2024.04.05 – 04.19",
      text: "コラボ限定商品販売。",
    },
    {
      client: "自遊空間 / FanPicks",
      category: "ビジョン・広告",
      title: "全国20店舗 デジタルサイネージ",
      date: "2024.04.15 – 05.15",
      text: "全国対象店舗20店でデジタルサイネージ掲出。\n自遊空間・FanPicksのサイトトップバナー掲載。\n一部店舗で掲載期間の変更あり。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "ビジョン・広告",
      title: "ETAME AKIHABARA JACK EVENT",
      date: "2024.08.09 – 08.15",
      text: "秋葉原UDXビジョンへソロ掲載。",
    },
    {
      client: "そそる韓国",
      category: "PR",
      title: "コラボクーポン",
      date: "",
      text: "購入者特典の限定ポストカード。\nノベルティと100円割引の限定クーポンコード配布。",
    },
    {
      client: "こくちょう菓詩屋",
      category: "PR",
      title: "オンラインショップ コラボクーポン",
      date: "",
      text: "全商品で使用できる100円引きクーポン配布。",
      links: [
        {
          label: "オンラインショップ",
          url: "https://kokuchou.com/shop",
        },
      ],
    },
    {
      client: "HICAT",
      category: "グッズ",
      title: "エナジードリンク コラボ",
      date: "2024.07.02 – 07.15",
      text: "マタタビ配合のエナジードリンク コラボ販売。",
    },
    {
      client: "麗一日店長",
      category: "イベント",
      title: "URARA 一日店長",
      date: "7月28日 19:30 – 21:30",
      text: "一日店長就任。\n現地店舗・ツイキャスにてオンラインイベント開催。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "グッズ",
      title: "新モデルVer. ボイスガチャ",
      date: "",
      text: "デジタルコンテンツ・ボイスガチャ販売。\n販売期間：約1年。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "グッズ",
      title: "大阪限定デザイン・シチュエーションボイス",
      date: "2024.07.19 – 08.19",
      text: "大阪限定デザインエタボ・デジタルメダル。\nシチュエーションボイスメダルガチャ限定販売。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "グッズ",
      title: "BirthdayVoice",
      date: "2024.10.27 まで",
      text: "デジタルボイスメダル期間限定販売。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "グッズ",
      title: "2024ハロウィン ボイスメダル",
      date: "2024.11.01 まで",
      text: "ハロウィンデザインのデジタルボイスメダル限定販売。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "ビジョン・広告",
      title: "西武新宿駅構内 ポスター掲載",
      date: "11月18日 – 11月25日",
      text: "9月の新宿駅周辺ポスター掲載イベントでランキング2位。\n西武新宿駅構内にポスター掲載。",
    },
    {
      client: "ときめきVR",
      category: "イベント",
      title: "ときぱれ！VOL.10",
      date: "2024.10.26 – 11.04",
      text: "VTuberときめきパレード出演・イベント参加。\n2024年10月25日18:00：開催記念公式生配信に司会者として出演。\n2025年1月14日19時：新宿サザンテラスビジョンの時報動画放映。",
    },
    {
      client: "COLOPL / MIXI",
      category: "イベント",
      title: "フェスティバル インフルエンサーフェスバ祭 Vol.1",
      date: "11月29日 – 12月26日",
      text: "共同開発ゲームアプリ「フェスティバル」のイベント出演。\n©COLOPL, Inc. ©MIXI",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "グッズ",
      title: "クリスマスデザインガチャ",
      date: "2024.12.15 – 12.28",
      text: "デジタルコンテンツ・ボイスガチャ期間限定販売。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "ビジョン・広告",
      title: "原宿神宮前交差点 マイナビジョン",
      date: "12月14日 – 12月20日",
      text: "街頭ビジョン掲載。\n毎時21分00秒から放映。",
    },
    {
      client: "ETERNAL MEDAL / ANCHI株式会社",
      category: "グッズ",
      title: "バレンタインデザインガチャ",
      date: "2025.02.19 – 03.08",
      text: "デジタルコンテンツ・ボイスガチャ期間限定販売。",
    },
    {
      client: "Vtamp",
      category: "グッズ",
      title: "ボイスシナリオメダル",
      date: "",
      text: "ボイスシナリオメダルリリース。",
      links: [
        {
          label: "紹介記事",
          url: "https://prtimes.jp/main/html/rd/p/000000044.000142461.html",
        },
        {
          label: "販売ページ",
          url: "https://ec.v-tamp.com/vitems/96moka_ocd_lm2025culture-festival",
        },
      ],
    },
    {
      client: "書泉ブックタワー",
      category: "イベント",
      title: "展示イベント「未来V書店」",
      date: "2025.05.03 – 05.11",
      text: "秋葉原・書泉ブックタワー9階イベントホールにて開催。\n東京都千代田区神田佐久間町1-11-1。",
    },
    {
      client: "AnyFan Gacha",
      category: "グッズ",
      title: "リアルグッズガチャ",
      date: "7月28日 – 8月10日",
      text: "リアルグッズガチャ販売。",
    },
    {
      client: "異世界キッチン",
      category: "PR",
      title: "「異世界キッチン ～行列のできる現代料理のお店～」",
      date: "",
      text: "異世界に召喚された女子高生が料理店を経営するシミュレーションゲームのPR配信。",
      links: [
        {
          label: "公式サイト",
          url: "https://kana.poppin-games.com",
        },
        {
          label: "公式X",
          url: "https://x.com/ik_yuzuki",
        },
      ],
    },
    {
      client: "TOKENSPOT",
      category: "グッズ",
      title: "デジタルグッズ専門自動販売機",
      date: "9月26日 – 10月26日",
      text: "全国のデジタルグッズ専門自動販売機にてグッズ販売。",
      links: [
        {
          label: "紹介ページ",
          url: "https://apps.24karat.io/lp/aiico-ts",
        },
      ],
    },
    {
      client: "FANME / GTPLAYER",
      category: "イベント",
      title: "FANME GAME COLLECTION",
      date: "2025.09.17 – 09.28",
      text: "ランキングイベント参加・特別賞受賞。\n結果発表：2025年10月1日15:00。\n渋谷東口ビックカメラ様ビジョン出演決定。\n放映：11月1日〜11月30日、8:00〜23:00の間で複数回。\nメディア記事・YouTubeインタビュー。\n協賛：ゲーミング家具ブランド GTPLAYER。",
    },
    {
      client: "クランド",
      category: "グッズ",
      title: "酒ガチャ コラボ",
      date: "11月23日 – 12月7日",
      text: "3種のお酒とコラボグッズ販売。",
    },
  ],
};
