# 宿ガチャ デプロイメントガイド

このドキュメントでは、宿ガチャをWeb上に公開する方法を説明します。

## 推奨: GitHub Pages（最も簡単）

### 手順

1. **GitHubリポジトリの設定画面を開く**
   ```
   https://github.com/kawakuraharuki/yado_gacha/settings
   ```

2. **Pagesセクションを設定**
   - 左サイドバーの「Pages」をクリック
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
   - 「Save」をクリック

3. **デプロイ完了を待つ**
   - 通常2-5分程度で完了
   - Actions タブで進行状況を確認可能

4. **公開URLにアクセス**
   ```
   https://kawakuraharuki.github.io/yado_gacha/
   ```

### メリット
- 完全無料
- 設定が簡単
- HTTPSが自動で有効
- GitHubにプッシュすると自動更新

## その他のオプション

### Netlify
- ドラッグ&ドロップでもデプロイ可能
- より高度な機能（フォーム処理、サーバーレス関数など）
- カスタムドメイン対応

### Vercel
- 高速なCDN
- プレビューデプロイ機能
- 分析機能付き

### Firebase Hosting
- Googleのインフラストラクチャ
- 他のFirebaseサービスとの統合が容易
- 詳細な分析機能

## ローカルでのテスト

デプロイ前にローカルでテストする場合：

### Python（推奨）
```bash
cd yado-gacha
python3 -m http.server 8000
# http://localhost:8000 でアクセス
```

### Node.js（http-server）
```bash
npm install -g http-server
cd yado-gacha
http-server
# http://localhost:8080 でアクセス
```

### VS Code Live Server
1. VS Codeで「Live Server」拡張機能をインストール
2. index.htmlを右クリック
3. 「Open with Live Server」を選択

## 注意事項

- このアプリはフロントエンドのみで動作（静的サイト）
- データはブラウザのLocalStorageに保存される
- バックエンドは不要なので、静的サイトホスティングで十分

## トラブルシューティング

### GitHub Pagesが表示されない場合
1. リポジトリがPublicになっているか確認
2. Settings > Pages でデプロイ状態を確認
3. ブラウザのキャッシュをクリア（Ctrl+F5）

### 404エラーが出る場合
- URLが正しいか確認: `https://[username].github.io/[repository-name]/`
- index.htmlがルートディレクトリにあるか確認