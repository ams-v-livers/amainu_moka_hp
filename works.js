/*
 * 活動実績編集用ファイル
 *
 * 表示順は、このファイルに記入した順です。
 * 新しい実績を上に表示したい場合は、items の先頭へ追加してください。
 *
 * client   : 企業・媒体・イベント名
 * category : カテゴリー。複数指定できます。
 * title    : 実績タイトル
 * date     : 掲載日・開催期間など。自由に記入可能。
 * text     : 詳細。改行は \n を使用。
 * links    : 関連リンク。不要なら省略可能。
 *
 * カテゴリー:
 * "メディア" / "PR" / "グッズ" / "イベント" / "ビジョン・広告"
 *
 * 追加例:
 *
 * {
 *   client: "企業名 様",
 *   category: ["PR", "グッズ"],
 *   title: "コラボタイトル",
 *   date: "2026年10月",
 *   text: "実績の内容\n補足情報",
 *   links: [
 *     {
 *       label: "関連ページ",
 *       url: "https://example.com/"
 *     }
 *   ]
 * },
 *
 * 年が明記されていない日程は、いただいた表記のまま掲載しています。
 */

window.MOKA_WORKS = {
  items: [
    {
      client: "雑誌 VTuberスタイル 様",
      category: ["メディア"],
      title: "インタビュー記事掲載",
      date: "2022年12月号",
      text: "雑誌「VTuberスタイル」2022年12月号にインタビュー記事掲載。"
    },

    {
      client: "雑誌 VTubermode 様",
      category: ["メディア"],
      title: "インタビュー記事掲載",
      date: "vol.3 / 2023年8月号増刊",
      text: "雑誌「VTubermode」vol.3、2023年8月号増刊にインタビュー記事掲載。"
    },

    {
      client: "赤名酒造 様",
      category: ["PR", "グッズ"],
      title: "10周年記念 第1回アンバサダー就任",
      text: "10周年「絹乃峰」PR。\nコラボグッズ販売。"
    },

    {
      client: "Kind Creation 様",
      category: ["PR", "グッズ"],
      title: "ワインガトークラシック・グレープドリンク コラボ",
      text: "コラボオリジナルラベル制作。\nコラボグッズ販売。"
    },

    {
      client: "CFK Co.,Ltd. 様",
      category: ["PR"],
      title: "「のらねこ物語2」販売記念PR",
      text: "「のらねこ物語2」販売記念PR案件。\n「のらねこ物語」をYouTubeにて配信。\n対応プラットフォーム：Nintendo Switch・Steam。"
    },

    {
      client: "赤名酒造 様",
      category: ["PR", "グッズ"],
      title: "10周年記念 第2回アンバサダー就任",
      text: "10周年「絹乃峰」PR。\nコラボグッズ販売。"
    },

    {
      client: "ラブコスメ 様",
      category: ["PR", "グッズ"],
      title: "梅酒PR・オリジナルグッズ販売",
      text: "梅酒PR販売。\nオリジナルグッズをAmazonにて販売。"
    },

    {
      client: "Cafeカスミソウ 様",
      category: ["PR", "グッズ"],
      title: "フード・コーヒー・グッズコラボ",
      text: "ローストビーフ。\nコラボラベルパッケージコーヒー。\nコラボオリジナルグッズ販売。"
    },

    {
      client: "VTuberコミュニティ「Vコネ」",
      category: ["グッズ", "イベント"],
      title: "夏のコミックマーケット2023 グッズ販売",
      date: "2023年",
      text: "VTuberコミュニティ「Vコネ」の全体グッズ販売。\n個人グッズの一部販売。\nBOOTHのVコネページにて夏コミグッズ販売。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["グッズ"],
      title: "デジタルコンテンツ・ボイスガチャ",
      date: "販売期間：約1年",
      text: "デジタルコンテンツとボイスガチャの販売。"
    },

    {
      client: "CFK Co.,Ltd. 様",
      category: ["PR"],
      title: "「zombiehunter」PR配信",
      text: "ゲーム「zombiehunter」のPR案件。\nYouTubeにてPR配信。\n対応プラットフォーム：Nintendo Switch・Steam。"
    },

    {
      client: "KDDI 様",
      category: ["イベント"],
      title: "「αUmetaverse」ライバーランキング決定戦 Vol.7",
      text: "リリースアプリ「αUmetaverse」のライバーランキング決定戦 Vol.7に出場。"
    },

    {
      client: "株式会社DC7 様",
      category: ["グッズ", "イベント"],
      title: "第21回 どこでもキャッチャーコラボ祭",
      text: "オンラインクレーンゲーム「どこでもキャッチャー」とコラボ。\nオリジナルグッズのクレーン商品コラボ。"
    },

    {
      client: "ときめきVR 様",
      category: ["イベント", "メディア"],
      title: "ときフェスVol.7 出演",
      date: "2023年5月25日〜6月2日",
      text: "「ときフェスVol.7」イベント出演。\nときめきVR公式YouTubeチャンネルの開催記念生放送へ出演。\n公式チャンネル出演日：2023年5月24日。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["グッズ"],
      title: "HELLOWEEN EDITION 2023",
      date: "2023年",
      text: "デジタルコンテンツとボイスガチャの限定販売。"
    },

    {
      client: "KDDI 様",
      category: ["PR", "イベント"],
      title: "バーチャルハロウィンカップ2023",
      date: "2023年",
      text: "「αUmetaverse」ライバーランキング決定戦に出場。\nアプリ「αUmetaverse」のPR。"
    },

    {
      client: "KingsGroup International AG 様",
      category: ["PR"],
      title: "「ステートオブサバイバル」PC版 PR",
      text: "「ステートオブサバイバル」PC版をYouTubeにてPR配信。"
    },

    {
      client: "自遊空間 様",
      category: ["ビジョン・広告"],
      title: "FanPicks特設ページ掲載",
      date: "2023年11月末まで",
      text: "全店のポータルサイト「FanPicks特設ページ内」に1か月間掲載。"
    },

    {
      client: "CFK Co.,Ltd. 様",
      category: ["PR"],
      title: "「ビフォア・ザ・ナイト」PR配信",
      text: "Nintendo Switch「ビフォア・ザ・ナイト」をYouTubeにてPR配信。"
    },

    {
      client: "KDDI 様",
      category: ["PR"],
      title: "povoキャンペーンPR",
      text: "コラボキャンペーン特別コード配布。\nXにてPR。"
    },

    {
      client: "湘南台SACHI菓子 様",
      category: ["PR", "グッズ"],
      title: "コラボクッキー缶・グッズ販売",
      text: "コラボクッキー缶の食レポPR配信。\nコラボクッキー缶・コラボグッズ販売。"
    },

    {
      client: "UP-T 様 / MAGNET by SHIBUYA109 VTuber POP-UP STORE 様",
      category: ["PR", "グッズ", "イベント", "ビジョン・広告"],
      title: "渋谷をジャックせよ！2 in MAGNET by SHIBUYA109",
      date: "2024年2月15日〜3月6日",
      text: "UP-Tにてオリジナルグッズ制作・販売・PR。\nPOP-UP STORE店内モニターで音声付きCM放映。\nランダムブロマイド・集合イラストのクリアファイル販売。\nCM放映期間：2024年2月29日〜3月6日。\n開催場所：MAGNET by SHIBUYA109 6階。\n提供：UP-T 様。"
    },

    {
      client: "VirtualFantasia 様",
      category: ["グッズ", "イベント"],
      title: "Vと正月を楽しもう！ 正月イベント2024",
      date: "2024年1月1日〜1月10日",
      text: "煎茶とオリジナルグッズの販売。"
    },

    {
      client: "雑誌 V NOTE!! 様",
      category: ["メディア"],
      title: "2月号 特別付録版 インタビュー記事",
      date: "2月号",
      text: "VTuber専門雑誌「V NOTE!!」2月号 特別付録版にインタビュー記事掲載。\n特別版販売ページにて販売。"
    },

    {
      client: "テレビアニメ「レヱル・ロマネスク」様",
      category: ["PR"],
      title: "「レヱル・ロマネスク オリジン」発売記念PR",
      date: "2023年12月21日発売",
      text: "鉄道をモチーフにした癒しと復興の物語「まいてつ -pure station-」。\nSwitch・PS4・PC版の販売記念PR。\nSwitch版にてPR配信。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["ビジョン・広告", "イベント"],
      title: "TOKYO XR・メタバース＆コンテンツ ビジネスワールド",
      date: "2024年1月26日〜1月28日",
      text: "東京ビッグサイト開催イベントにポスター掲載。"
    },

    {
      client: "Vfantasia 様",
      category: ["グッズ"],
      title: "世界に一つだけのVグッズ",
      date: "2月10日〜2月20日",
      text: "グッズコラボ。\nチェキ風フォトカード販売。"
    },

    {
      client: "VTuber cafe&bar 本棚 様",
      category: ["ビジョン・広告", "イベント"],
      title: "けもみみ大集合カフェ",
      date: "2024年2月26日〜2月29日",
      text: "カフェポスター出演。"
    },

    {
      client: "NTT docomo 様",
      category: ["イベント"],
      title: "MetaMe「笑ってVとも!!」配信リレー",
      date: "2024年3月23日・24日",
      text: "MetaMe「笑ってVとも!!」配信リレーイベントに出演。"
    },

    {
      client: "Re:vius 様",
      category: ["グッズ"],
      title: "コラボ限定商品販売",
      date: "2024年4月5日〜4月19日",
      text: "Re:viusとのコラボ限定商品販売。"
    },

    {
      client: "自遊空間 様",
      category: ["ビジョン・広告"],
      title: "全国20店舗 デジタルサイネージ掲出",
      date: "2024年4月15日〜5月15日",
      text: "全国の対象20店舗にてデジタルサイネージ掲出。\n自遊空間サイトのトップバナー掲載。\nFanPicksサイトのトップバナー掲載。\n一部店舗にて掲載期間の変更あり。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["ビジョン・広告", "イベント"],
      title: "ETAME AKIHABARA JACK EVENT",
      date: "2024年8月9日〜8月15日",
      text: "秋葉原UDXビジョンへソロ掲載。"
    },

    {
      client: "そそる韓国 様",
      category: ["PR"],
      title: "コラボクーポン配信",
      text: "購入者特典の限定ポストカード付き。\nノベルティと100円割引限定クーポンコード。"
    },

    {
      client: "こくちょう菓詩屋 様",
      category: ["PR"],
      title: "オンラインショップ コラボクーポン",
      text: "全商品で使用できる100円引きクーポンの配信。",
      links: [
        {
          label: "オンラインショップ",
          url: "https://kokuchou.com/shop"
        }
      ]
    },

    {
      client: "HICAT 様",
      category: ["PR", "グッズ"],
      title: "エナジードリンク コラボ販売",
      date: "2024年7月2日〜7月15日",
      text: "マタタビ配合のエナジードリンクのコラボ販売。"
    },

    {
      client: "麗一日店長 様",
      category: ["イベント"],
      title: "URARA 1日店長",
      date: "7月28日 19:30〜21:30",
      text: "一日店長に就任。\n現地店舗とツイキャスにてオンラインイベント開催。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["グッズ"],
      title: "新モデルVer. デジタルコンテンツ・ボイスガチャ",
      date: "販売期間：約1年",
      text: "新モデルVer.のデジタルコンテンツとボイスガチャ販売。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["グッズ"],
      title: "大阪限定デザイン デジタルメダル",
      date: "2024年7月19日〜8月19日",
      text: "大阪限定デザインのエタボ・デジタルメダル。\nシチュエーションボイスメダルのガチャ販売。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["グッズ"],
      title: "BirthdayVoice デジタルボイスメダル",
      date: "販売期間：2024年10月27日",
      text: "BirthdayVoiceのデジタルボイスメダル限定販売。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["グッズ"],
      title: "2024ハロウィン デジタルボイスメダル",
      date: "2024年11月1日まで",
      text: "2024ハロウィンデザインのデジタルボイスメダル限定販売。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["ビジョン・広告", "イベント"],
      title: "西武新宿駅構内 ポスター掲載",
      date: "11月18日〜11月25日",
      text: "9月開催の新宿駅周辺ポスター掲載イベントでランキング2位。\n西武新宿駅構内にポスター掲載。\n細かな掲載開始時間・撤去時間は未定。"
    },

    {
      client: "ときめきVR 様",
      category: ["イベント", "メディア", "ビジョン・広告"],
      title: "ときぱれ！VOL.10〜VTuberときめきパレード〜",
      date: "2024年10月26日〜11月4日",
      text: "イベント出演・参加。\n開催記念公式生配信に司会者として出演。\n公式生配信：2024年10月25日 18:00〜。\nイベント期間：10月26日 00:00〜11月4日 23:59。\n新宿サザンテラスビジョンにて、2025年1月14日 19時の時報動画放映。"
    },

    {
      client: "COLOPL 様 / MIXI 様",
      category: ["PR", "イベント"],
      title: "フェスティバル インフルエンサーフェスバ祭 Vol.1",
      date: "11月29日〜12月26日",
      text: "共同開発ゲームアプリ「フェスティバル」のインフルエンサーフェスバ祭 Vol.1に出演。\n©COLOPL, Inc. ©MIXI"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["グッズ"],
      title: "期間限定クリスマスデザインガチャ",
      date: "2024年12月15日〜12月28日",
      text: "デジタルコンテンツ・ボイスガチャの期間限定クリスマスデザイン販売。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["ビジョン・広告"],
      title: "原宿 マイナビジョン 街頭ビジョン掲載",
      date: "12月14日〜12月20日",
      text: "原宿神宮前交差点のマイナビジョンにて放映。\n毎時21分00秒から放映。"
    },

    {
      client: "ETERNAL MEDAL（ANCHI株式会社）様",
      category: ["グッズ"],
      title: "期間限定バレンタインデザインガチャ",
      date: "2025年2月19日〜3月8日",
      text: "デジタルコンテンツ・ボイスガチャの期間限定バレンタインデザイン販売。"
    },

    {
      client: "Vtamp 様",
      category: ["グッズ"],
      title: "ボイスシナリオメダル リリース",
      text: "ボイスシナリオメダルのリリース。",
      links: [
        {
          label: "プレスリリース",
          url: "https://prtimes.jp/main/html/rd/p/000000044.000142461.html"
        },
        {
          label: "販売ページ",
          url: "https://ec.v-tamp.com/vitems/96moka_ocd_lm2025culture-festival"
        }
      ]
    },

    {
      client: "秋葉原・書泉ブックタワー",
      category: ["イベント"],
      title: "展示イベント「未来V書店」参加",
      date: "2025年5月3日〜5月11日",
      text: "開催場所：書泉ブックタワー9階イベントホール。\n東京都千代田区神田佐久間町1-11-1。\n各線秋葉原駅より徒歩2分。"
    },

    {
      client: "AnyFan Gacha 様",
      category: ["グッズ"],
      title: "リアルグッズガチャ販売",
      date: "7月28日〜8月10日",
      text: "リアルグッズガチャの販売。"
    },

    {
      client: "「異世界キッチン ～行列のできる現代料理のお店～」",
      category: ["PR"],
      title: "異世界キッチン PR配信",
      text: "異世界に召喚された女子高生が料理店を経営するシミュレーションゲームのPR配信。",
      links: [
        {
          label: "公式サイト",
          url: "https://kana.poppin-games.com"
        },
        {
          label: "公式X",
          url: "https://x.com/ik_yuzuki"
        }
      ]
    },

    {
      client: "TOKENSPOT 様",
      category: ["グッズ"],
      title: "デジタルグッズ専門自動販売機 グッズ販売",
      date: "9月26日〜10月26日",
      text: "全国のデジタルグッズ専門自動販売機にてグッズ販売。",
      links: [
        {
          label: "関連ページ",
          url: "https://apps.24karat.io/lp/aiico-ts"
        }
      ]
    },

    {
      client: "FANME 様 / GTPLAYER 様",
      category: ["イベント", "メディア", "ビジョン・広告"],
      title: "FANME GAME COLLECTION supported by GTPLAYER",
      date: "2025年9月17日〜9月28日",
      text: "ランキングイベントに参加。\n開催期間：2025年9月17日 19:00〜9月28日 23:59。\n結果発表：2025年10月1日 15:00。\n渋谷大型ビジョン出演決定。\n放映場所：渋谷東口 ビックカメラ様ビジョン。\n放映期間：11月1日〜11月30日。\n8:00〜23:00の間に複数回放映。\n特別賞受賞。\nメディア記事公開・FANME YouTubeチャンネルでのインタビュー。\n協賛：ゲーミング家具ブランド GTPLAYER 様。"
    },

    {
      client: "クランド 様",
      category: ["PR", "グッズ"],
      title: "酒ガチャ コラボ",
      date: "11月23日〜12月7日",
      text: "3種類のお酒とコラボグッズの販売。"
    }
  ]
};
