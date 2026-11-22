import { useState } from "react";
import type { MenuItem } from "../data/menu";

type Props = { item: MenuItem };

// もぎてんオーダー風のカード。「＋」「－」で個数を変えられる（ここが JS の要る所）
export default function MenuCard({ item }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">{item.name}</h3>
        {item.soldOut && (
          <span className="rounded bg-gray-500 px-2 py-0.5 text-xs text-white">売り切れ</span>
        )}
      </div>
      <p className="mt-1 text-gray-600">{item.price}円</p>
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          className="h-8 w-8 rounded-full border border-gray-300 disabled:opacity-40"
          onClick={() => setCount((n) => n - 1)}
          disabled={item.soldOut || count === 0}
          aria-label={`${item.name}を1つ減らす`}
        >
          －
        </button>
        <span aria-live="polite">{count}</span>
        <button
          type="button"
          className="h-8 w-8 rounded-full border border-gray-300 disabled:opacity-40"
          onClick={() => setCount((n) => n + 1)}
          disabled={item.soldOut}
          aria-label={`${item.name}を1つ増やす`}
        >
          ＋
        </button>
      </div>
    </div>
  );
}
