# 🍕 NORTHSIDE PIZZA — 無料PWA版（Ver.44）

これは **そのままGitHub Pagesへアップロードできる** PWA一式です。サーバー代やApple Developer登録料は不要です（GitHub Free・公開リポジトリの場合）。

## GitHub Pages で無料公開する方法

1. https://github.com で無料アカウントを作成、またはログイン。
2. 「New repository」で `northside-pizza` などの名前の **Public** リポジトリを作成。
3. 作成したリポジトリの **Add file → Upload files** で、このZIPを展開して出てきた**ファイルとiconsフォルダの中身をディレクトリ構造を保って**アップロード。`index.html` がリポジトリの一番上（ルート）に必要です。ZIPファイルそのものをアップロードしてもゲームは公開できません。
4. **Settings → Pages → Build and deployment** で Sourceを **Deploy from a branch**、Branchを **main / (root)** にして Save。
5. 公開処理後、 **Settings → Pages** の **Visit site** からURLを開きます。
6. そのURLを友達やSNSで共有すれば、iPhone / Android / パソコンで無料で遊べます。

例：GitHubユーザー名が `example`、リポジトリ名が `northside-pizza` のとき、公開先の形式は `https://example.github.io/northside-pizza/` です。これは例であり、まだ実際には公開されていません。

## iPhoneでアプリとしてホーム画面に追加

1. 公開されたURLをSafariで開く。
2. Safariの共有メニュー → **ホーム画面に追加**。
3. **Webアプリとして開く** を有効にして **追加**。
4. ホーム画面に専用のアイコンが表示され、そこから起動できます。

※ はじめてオフラインで遊ぶ前に、インターネットに接続した状態でゲームを一度開いてください。読み込み後はオフラインでも起動できるようにキャッシュされます。端末の設定、キャッシュ削除、ストレージの管理状況によってはオフライン利用ができなくなる場合があります。

## セーブデータの重要事項

- セーブデータはプレイヤーの端末のブラウザ/アプリ領域に保存されます。**サーバー上のランキングや他人とのセーブ共有はありません**。
- Safariで開いたサイトとホーム画面に追加したPWA、これまでのVer.44ローカルHTMLでは、セーブ保存領域が異なる場合があります。
- 続きを遊びたい場合は、旧版のゲームで **セーブデータのバックアップ（ファイル保存またはコードのコピー）** → PWA版の「セーブデータの引き継ぎ・復元」で読み込んでください。
- iPhoneのストレージ削除・ブラウザデータ削除やアプリの削除でデータが消える場合があります。定期的にファイルをバックアップしてください。
- ゲームの更新時は `index.html` などのファイルを上書きし、`sw.js` の `CACHE_VERSION` を新しい番号にすることで、古いキャッシュを入れ替えられます。**localStorageを消去しない限りセーブは維持**されます。

## ファイル構成

- `index.html` — ゲーム本体、PWAインストール案内、セーブ/復元
- `manifest.webmanifest` — アプリ名、起動方法、アイコン
- `sw.js` — オフライン用のキャッシュ制御
- `icons/` — アプリアイコン画像
- `.nojekyll` — GitHub Pagesでの静的ファイル公開を安定させる設定
- `README.md` — この説明

## 注意

PWAはWeb技術のアプリです。App Storeに掲載されるネイティブiOSアプリとは異なります。初回配信や公開URLの用意には、GitHub上での操作が必要です。
