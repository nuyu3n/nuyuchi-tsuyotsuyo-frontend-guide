import { useState } from "react";

// いちばん小さな島。押すと数が増えるだけ
export default function LikeCounter() {
  const [likes, setLikes] = useState(0);
  return (
    <button
      type="button"
      className="rounded-full bg-pink-100 px-4 py-2 text-pink-700"
      onClick={() => setLikes((n) => n + 1)}
    >
      いいね {likes}
    </button>
  );
}
