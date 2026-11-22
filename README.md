# ぬゆちのつよつよフロントエンド解説: 見本のサイト

「ぬゆちのつよつよフロントエンド解説」で例に使う、架空の文化祭「みどり祭 2026」の公式サイトです。Astro で作っていて、もぎてんオーダー風の React 部品を「島」として載せています。本文の説明を、自分の手で確かめたいときに使ってください。

確認した環境: Node.js 26.13.1、npm 11.20.0、astro 7.4.13、@astrojs/react 7.1.9、@astrojs/sitemap 3.7.6、React 19.3.1、tailwindcss 4.3.5（@tailwindcss/vite）

```sh
npm install        # 最初に1回だけ
npm run dev        # 開発用サーバー（http://localhost:4321/）
npm run build      # dist/ に HTML・CSS・JS を書き出す
npm run preview    # 書き出した dist/ をローカルで見る
```

| ページ | ファイル |
|---|---|
| トップ（JSON-LD、`<Image />`） | `src/pages/index.astro` |
| お知らせの一覧・詳細（コンテンツコレクション） | `src/pages/news/`、`src/content/news/`、`src/content.config.ts` |
| 企画の一覧・詳細（`getStaticPaths`） | `src/pages/events/`、`src/data/events.ts` |
| 模擬店（React の島） | `src/pages/mogiten.astro`、`src/components/MenuCard.tsx` |
| アクセス | `src/pages/access.astro` |
| ページが見つからないとき（404） | `src/pages/404.astro` |
| 共通のレイアウト（title、description、canonical、OGP） | `src/layouts/BaseLayout.astro` |

サイトの URL（`https://bunkasai.example.com`）、会場名、住所は架空のものです。

## csr-compare

`csr-compare/` は、模擬店のページと同じ中身を Vite + React だけ（CSR）で作ったものです。Astro の出力と見比べるために使います。

```sh
cd csr-compare
npm install
npm run build      # dist/index.html の body がほぼ空になることを確かめる
npm run preview    # http://localhost:4173/
```

## ライセンス

[MIT License](LICENSE)
