# HowTo Canvas ｜ AI＆開発実践ナレッジハブ

最先端AIモデル（Claude、Gemini、Gemini Notebook/NotebookLM）と開発ツール（Git/GitHub）の実践活用法を、直感的な図解とステップで整理したナレッジベースサイトです。

- 公開URL: https://nakamotohiroshi-biz-team.github.io/howto-canvas/
- ドキュメンテーション基盤: Astro v5 + Starlight
- スタイリング: 目に優しい低刺激カスタムパレット（custom.css）

---

## サイトの主な構成

1. Claude 活用ガイド
   最新裏技大全、自律型Claude Code入門、Tool Useスキル設定、文字起こしからの議事録自動整形、Artifactsアプリ開発

2. Gemini 活用ガイド
   最新裏技大全、自律型リサーチDeep Research、Canvas推敲、カスタムGem作成、スプレッドシート=AI()関数、200万トークン動画解析

3. Gemini Notebook (NotebookLM)
   音声ファイルからの自動文字起こし＆議事録・報告書作成、ソース限定回答、原本引用検証、音声解説対談生成

4. 共通規格・連携
   GeminiとClaudeのスキル共有・プロンプト移行手順、MCP（Model Context Protocol）導入完全ガイド

5. 開発・エンジニアリング
   Git基本データフロー4領域、チーム開発基本ガイド、日常コマンド早見チートシート、コンフリクト（競合）予防と解消、作業取り消し＆一時退避（stash）、ブランチ戦略（GitHub Flow）、GitHub Issues & Projects タスク管理、PR作成術＆コードレビュー作法

6. 取扱説明書＆サイト設計書
   サイトの閲覧・検索マニュアル、記事追加・SVG図解作成・公開運用マニュアル、システムアーキテクチャ基本設計書

---

## 関連ドキュメント

詳細なマニュアルと設計書はサイト内および以下のファイルで閲覧できます。

- 取扱説明書（利用・運用マニュアル）: `src/content/docs/meta/manual.md`
- サイト設計書（システム・基本設計）: `src/content/docs/meta/design-spec.md`

---

## ローカル開発手順

### 前提条件
- Node.js 18.0 以上
- npm または pnpm

### コマンド一覧

```bash
# 依存パッケージのインストール
npm install

# ローカル開発サーバーの起動（http://localhost:4321/howto-canvas/ で確認）
npm run dev

# 本番用静的サイトのビルド（./dist/ へ出力）
npm run build

# ビルド成果物のローカルプレビュー
npm run preview
```

---

## Gitコミット・デプロイ運用

本リポジトリは `main` ブランチへプッシュすると、GitHub Actionsにより自動的にビルドされ、GitHub Pagesへ公開されます。

```bash
# 変更内容をステージング
git add -A

# コミット
git commit -m "feat: 記事タイトル"

# リモートへ送信（認証固定設定済み）
git push origin main
```
