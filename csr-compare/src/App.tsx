import MenuCard from "./components/MenuCard";
import LikeCounter from "./components/LikeCounter";
import { menu } from "./data/menu";

// bunkasai-site の /mogiten/ と同じ中身を、React だけ（CSR）で作ったもの
export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <header className="bg-green-700 text-white">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 px-4 py-3">
          <a href="/" className="text-lg font-bold">みどり祭 2026</a>
          <nav>
            <ul className="flex gap-4 text-sm">
              <li><a href="/news/" className="hover:underline">お知らせ</a></li>
              <li><a href="/events/" className="hover:underline">企画</a></li>
              <li><a href="/mogiten/" className="hover:underline">模擬店</a></li>
              <li><a href="/access/" className="hover:underline">アクセス</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
        <h1 className="text-2xl font-bold">模擬店「もぎてん」</h1>
        <p className="mt-2">中庭のテント ／ 10:00〜15:00</p>
        <h2 className="mt-6 text-xl font-bold">メニュー</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {menu.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>
        <h2 className="mt-8 text-xl font-bold">応援する</h2>
        <div className="mt-2">
          <LikeCounter />
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        © 2026 みどり祭 運営
      </footer>
    </div>
  );
}
