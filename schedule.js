/*
 * 配信スケジュール編集用ファイル
 *
 * items の中に、下の記入例をコピーして追加してください。
 *
 * start    : 開始日時。末尾の +09:00 は日本時間です。
 * end      : 終了予定日時。不要なら空欄。
 * title    : 配信タイトル
 * platform : YouTube / Twitch など
 * url      : 配信ページ
 * note     : 補足。不要なら空欄。
 *
 * 開始時刻の早い順に表示します。
 * 終了予定を過ぎた配信は自動で非表示になります。
 * end が空欄の場合、開始から6時間後に非表示になります。
 *
 * 予定が空の場合は「次回の配信は調整中です」と表示します。
 */

window.MOKA_SCHEDULE = {
  items: [
    /*
    {
      start: "2026-10-10T21:00:00+09:00",
      end: "2026-10-11T00:00:00+09:00",
      title: "配信タイトルを記入",
      platform: "YouTube",
      url: "https://youtube.com/@amainu_moka",
      note: "配信内容や補足を記入"
    },

    {
      start: "2026-10-12T22:00:00+09:00",
      end: "",
      title: "配信タイトルを記入",
      platform: "Twitch",
      url: "https://www.twitch.tv/amainu_moka",
      note: ""
    }
    */
  ]
};
