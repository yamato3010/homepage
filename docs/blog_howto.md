# ブログ記事の追加方法

## ファイル構成

```
blog.html               ← 記事一覧ページ
blog/
  posts.json            ← 記事インデックス
  2024-12-01/
    hajimemashite.html  ← 完全なHTMLページ
  YYYY-MM-DD/
    記事ファイル名.html
sitemap.xml             ← 検索エンジン向け
robots.txt
```

## 記事を追加する手順

### 1. 記事HTMLファイルをコピーして作る

既存の記事ファイル（例: `blog/2024-12-15/vrchat-nikki.html`）をコピーして
`blog/YYYY-MM-DD/記事名.html` として保存し、以下を編集する。

- `<meta name="description" content="...">` → 記事の概要（100文字程度）
- `<title>記事タイトル - yamato3010の個人ブログ</title>`
- 日付の `<p class="post-date">` 内
- `<h1>` のタイトル
- 本文

### 2. posts.json を更新

`blog/posts.json` の `posts` 配列の先頭に追加する。

```json
{
  "path": "2025-01-01/shinnen.html",
  "title": "明けましておめでとうございます",
  "date": "2025-01-01",
  "excerpt": "新年の挨拶です。",
  "categories": ["日記"]
}
```

### 3. sitemap.xml に追加

```xml
<url>
  <loc>https://yamato3010.com/blog/2025-01-01/shinnen.html</loc>
  <lastmod>2025-01-01</lastmod>
  <changefreq>never</changefreq>
  <priority>0.8</priority>
</url>
```

### 4. GitHubにpushする

以上でGoogle検索にインデックスされます。
初回はGoogle Search Consoleからサイトマップを送信しておくと早いです。
