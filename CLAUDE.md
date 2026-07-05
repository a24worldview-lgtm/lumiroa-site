# CLAUDE.md

## Project Overview

LUMIROA公式サイト。  
LUMIROAは、兵庫県姫路市の韓国肌管理サロンです。主な訴求は「姫路の街なかで、大人の肌を静かに育てる韓国肌管理サロン」。30代から50代の大人女性に向けて、静かな高級感、肌質改善、隠れ家感を伝える1ページサイトです。

想定GitHubリポジトリ名: `lumiroa-site`

## Tech Stack And Versions

- HTML5: `site/index.html`
- CSS3: `site/styles.css`
- Vanilla JavaScript: `site/script.js`
- Local preview: Python `http.server`
- Verified local tooling:
  - Git `2.50.1 (Apple Git-155)`
  - Python `3.9.6`

ビルドツール、Node.jsランタイム、npmパッケージは未使用です。

## Directory Structure

```text
.
├── site/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── images/
│   │   ├── calligraphy-hero.png
│   │   ├── calligraphy-hero-deep.png
│   │   ├── calligraphy-kyou.png
│   │   ├── calligraphy-kyou-deep.png
│   │   ├── calligraphy-tagline.png
│   │   ├── calligraphy-tagline-deep.png
│   │   └── hero-mobile-v2.jpeg
│   └── assets/
│       ├── hero.jpeg
│       ├── ritual-mirror.jpg
│       ├── product-table.jpg
│       ├── after-glow.jpg
│       ├── portrait-warm.jpg
│       ├── lumiroa_logo.svg
│       └── lumiroa_logo_white.png
├── README.md
├── CLAUDE.md
└── .gitignore
```

### File Roles

- `site/index.html`: サイトのHTML本体。オープニング演出、ヒーロー、コンセプト、施術、FLOW、MENU、ギャラリー、アクセス、CTA、フッターを管理。
- `site/styles.css`: デザイントークン、レイアウト、レスポンシブ、ボタン、写真帯、セクションごとの見た目、オープニング演出のアニメーションを管理。
- `site/script.js`: Hot Pepper Beauty URLの一括反映、オープニング演出の表示制御（sessionStorage・prefers-reduced-motion）、スマホメニュー開閉、ヘッダーのスクロール状態、reveal演出を管理。
- `site/assets/`: 公開用に軽量化した画像・ロゴのみを配置。制作元の大容量画像や文書はGit管理対象外。
- `site/images/`: 書道画像（透過PNG）。無印はダーク背景用の金色、`-deep`接尾辞は明るい背景用の濃色版。ヒーローh1と締めタグラインで使用。

## Design Tokens

Defined in `site/styles.css` under `:root`.

### Colors

- `--ink: #1d2422`: 本文・濃色テキスト
- `--soft-ink: #4d5652`: 補助テキスト
- `--paper: #f8f6f0`: ページ背景
- `--milk: #fffdf8`: 白系背景・白文字
- `--mist: #d9e2da`: 淡い補助色
- `--moss: #506758`: SIGNATURE CAREセクション背景
- `--deep: #111816`: 黒背景セクション
- `--gold: #c9a96e`: CTA/アクセント
- `--gold-hover: #b8985c`: CTA hover
- `--button-ink: #1c1a17`: ゴールドボタン上の文字
- `--line: rgba(29, 36, 34, 0.14)`: 罫線
- `--shadow: 0 24px 70px rgba(17, 24, 22, 0.13)`: 影

### Fonts

- Body: `"Hiragino Kaku Gothic ProN", "Yu Gothic", "YuGothic", system-ui, sans-serif`
- Headings: `"Zen Kaku Gothic New", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif`（Google Fontsからweight 300/400/500/700を読み込み。letter-spacingは見出し0.08em、締めタグライン0.1em）
- Heading weight hierarchy: ヒーローh1のみ`700`+`text-shadow`、h2とh3は背景の明暗を問わず`500`
- English labels: `Georgia, "Times New Roman", serif`（eyebrow・ナビ・価格数字は変更しない）

### Breakpoints

- `@media (max-width: 960px)`: tablet/mobile layout. Navigation becomes menu, major grids become one column.
- `@media (max-width: 640px)`: mobile layout. Fixed bottom reservation CTA is shown, sections tighten spacing, flow cards stack.

### Key Layout Notes

- Hero background image: `site/assets/hero.jpeg`（640px以下は`<picture>`で`site/images/hero-mobile-v2.jpeg`（1080×1560）に切替。顔が上1/3の縦位置支給画像で、`object-position: center top`）
- モバイルの`.hero-shade`は下側のみのグラデーション（0.85→0 at 66%）。画像の焼き込みダークは最下部のみのため、コピー帯の可読性はCSS側で補っている
- Hero h1 is a calligraphy image (`calligraphy-hero.png`, width `min(560px, 85vw)`, モバイルは`72vw`, alt に全文)
- Mobile hero (640px以下): 住所3行と「料金を見る」を非表示、英字ラベルは`KOREAN SKIN MANAGEMENT`に短縮（`.eyebrow-extra`をdisplay:none）、説明文は`span.phrase`で2行固定、予約ボタンは`min(280px, 70vw)`×52pxの中央寄せ
- Long Japanese headings wrap at phrase boundaries via `span.phrase` (`display: inline-block`)
- Main CTA style: `.button.primary`
- Mobile fixed CTA: `.mobile-reserve`

## Content Inventory

### Hero

Location: `site/index.html`, `.hero`

- Eyebrow: `Himeji Korean Skin Management Salon`
- Main copy（書道画像 `calligraphy-hero.png`、altテキストで保持）:
  - `隠す毎日を、`
  - `魅せる毎日に。`
- Sub copy: `姫路の街なかで、大人の肌を静かに育てる韓国肌管理サロン。`
- Store note:
  - `姫路市呉服町48`
  - `ハトヤビル102`
  - `仙豆のちから姫路大手前通り店 内`

### Intro Band

Location: `site/index.html`, `.intro-band`

- `第四世代ピーリング`
- `セラム導入まで一続きに`
- `30代からの肌育メンテナンス`

### Concept

Location: `site/index.html`, `#concept`

- Heading: `一生モノの素肌を、今ここから。`
- Brand origin copy: `LUMIROAは、「Luminous」と「Road」から生まれた名前です。...`

### Treatment

Location: `site/index.html`, `#treatment`

- Heading: `剥くより、満たす。肌を育てるピーリング。`
- Points:
  - `低刺激設計`
  - `毛穴・くすみへ`
  - `栄養を入れ込む`

### Signature Care

Location: `site/index.html`, `.visual-break`

- Heading: `韓国式の肌管理を、姫路で。`
- Body: `洗顔、ピーリング、LED、セラム導入、仕上げまで。...`

### Flow

Location: `site/index.html`, `.flow-list`

- `カウンセリング`
- `クレンジング・洗顔`
- `NMNピーリング`
- `セラム導入`
- `アフターケア`

### Menu And Prices

Location: `site/index.html`, `#menu`

- Service: `チョンダム式肌管理 60分`
- First visit: `9,800円`
- Regular: `13,200円`
- Membership labels:
  - `肌育集中プログラム`
  - `水光肌・年間パスポート`
  - `プラチナ年間パスポート`

### Access

Location: `site/index.html`, `#access`

- `〒670-0923`
- `兵庫県姫路市呉服町48`
- `ハトヤビル102`
- `仙豆のちから姫路大手前通り店 内`

### Closing CTA

Location: `site/index.html`, `.closing-cta`

- Tagline: `今日の肌、いい感じ。`（書道画像 `calligraphy-kyou.png`、altテキストで保持）
- CTA: `Hot Pepper Beautyで予約`

### Reservation URL

Location: `site/script.js`

- `HOTPEPPER_URL = "https://beauty.hotpepper.jp/";`
- Replace this with the real Hot Pepper Beauty salon URL when available.

## Known Remaining Fixes

- FLOWの空ボックス: 対応済み。タブレット幅（641〜960px）は2列表示のため、最後のカードを全幅にして空きセルを解消。項目数を変えた場合は行揃えを再確認する。
- 見出しの改行制御: 対応済み。Heroは固定2行、その他の長い日本語見出しは `span.phrase` で文節単位に折り返す。見出しの文言を変えるときはspanの区切りも合わせて更新する。
- ヘッダーの視認性: 対応済み。Hero上は透明、スクロール後は半透明ダーク背景+blurで白ロゴ・白ナビを維持（スマホメニュー展開時のみ淡色背景）。写真差し替え時はコントラストを再確認する。
- 写真帯の整理: 対応済み。Galleryは人物写真2枚の横並び構成（セラム商品写真はSIGNATURE CAREと重複するため削除）。実店舗写真が増えたら構成を見直す。

## Run And Build Commands

### Preview

```bash
cd site
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/
```

### Build

No build step is required.

### Static Hosting

GitHub Pagesで公開中: https://a24worldview-lgtm.github.io/lumiroa-site/

`main`へのpushで `.github/workflows/deploy-pages.yml` が `site/` を自動デプロイする（Pagesのbuild_typeはworkflow、リポジトリはpublic）。

## GitHub Publish Notes

The `.gitignore` intentionally excludes raw production materials such as original Adobe Stock files, transcripts, DOCX files, ZIPs, videos, and project files. The public repository should only track the website deliverables and documentation.
