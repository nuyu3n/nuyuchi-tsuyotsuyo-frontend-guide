// もぎてんオーダー と同じメニュー（id・名前・値段は変えない）
export type MenuItem = {
  readonly id: string;
  name: string;
  price: number;
  soldOut?: boolean;
};

export const menu: MenuItem[] = [
  { id: "tako", name: "たこ焼き", price: 300 },
  { id: "yaki", name: "焼きそば", price: 400 },
  { id: "juice", name: "ジュース", price: 150 },
  { id: "crepe", name: "クレープ", price: 350, soldOut: true },
];
