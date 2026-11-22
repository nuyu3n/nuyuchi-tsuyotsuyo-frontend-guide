// 企画のデータ。毎年ここを書きかえれば、ページは作り直さなくてよい
export type FesEvent = {
  id: string; // URL になる（/events/haunted-house/ など）
  name: string;
  group: string;
  place: string;
  time: string;
  summary: string;
};

export const events: FesEvent[] = [
  {
    id: "haunted-house",
    name: "お化け屋敷「夕暮れの旧館」",
    group: "チーム・ひやり",
    place: "東館 2階",
    time: "10:00〜15:00",
    summary: "部屋を丸ごと使ったお化け屋敷です。こわさは3段階から選べます。",
  },
  {
    id: "drama",
    name: "演劇「銀河鉄道の夜」",
    group: "劇団みどり",
    place: "ホール",
    time: "11:00〜12:00",
    summary: "劇団みどりによる1時間の舞台です。途中の入場もできます。",
  },
  {
    id: "live",
    name: "バンドライブ",
    group: "バンド有志",
    place: "中庭（雨の日はホール）",
    time: "13:00〜14:30",
    summary: "5つのバンドが順番に演奏します。",
  },
  {
    id: "mogiten",
    name: "模擬店「もぎてん」",
    group: "もぎてんチーム",
    place: "中庭のテント",
    time: "10:00〜15:00",
    summary: "たこ焼き、焼きそば、ジュース、クレープのお店です。スマホから注文できます。",
  },
];
