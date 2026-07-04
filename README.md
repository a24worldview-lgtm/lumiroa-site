# LUMIROA Site

姫路の韓国肌管理サロン「LUMIROA」の公式サイトです。  
静的HTML/CSS/JavaScriptで構成した、1ページ完結のサロン紹介サイトです。

## 技術スタック

- HTML5
- CSS3
- Vanilla JavaScript
- Python 3.9.6 `http.server` for local preview

## 起動方法

```bash
cd site
python3 -m http.server 4173
```

ブラウザで `http://127.0.0.1:4173/` を開きます。

ビルド工程はありません。`site/` 配下のファイルをそのまま静的ホスティングに配置できます。

## ディレクトリ構成

```text
.
├── site/
│   ├── index.html       # ページ本体
│   ├── styles.css       # レイアウト、カラー、レスポンシブ
│   ├── script.js        # 予約URL反映、メニュー、スクロール演出
│   └── assets/          # 公開用に軽量化した画像・ロゴ
├── README.md
├── CLAUDE.md
└── .gitignore
```

## 予約URLの変更

Hot Pepper Beautyの実URLが決まり次第、`site/script.js` の `HOTPEPPER_URL` を差し替えてください。  
ページ内の予約ボタンすべてに反映されます。
