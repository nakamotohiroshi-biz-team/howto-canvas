---
title: HowTo Canvas ｜ AI実践ナレッジ
description: Claude、Gemini、NotebookLM、MCPなどのAIツールを業務で使い倒すための図解・実践手順ナレッジベース
template: splash
hero:
  tagline: 最先端AIモデルとツールの活用法を、直感的な図解とステップで整理する
  image:
    file: ../../assets/hero-banner.svg
    alt: HowTo Canvas AIキービジュアル
  actions:
    - text: Claude 活用ガイドを見る
      link: /howto-canvas/ai/claude/skills/
      icon: right-arrow
      variant: primary
    - text: NotebookLM 音声議事録を見る
      link: /howto-canvas/ai/notebooklm/audio-transcription/
      icon: external
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## AIツール別ガイド

<CardGrid stagger>
  <Card icon="laptop" title="Claude 活用ガイド">
    自律型エージェント「Claude Code」、独自スキル定義、Artifactsでのアプリ開発、生文字起こしからの高品質議事録整形。
  </Card>
  <Card icon="star" title="Google Gemini 活用ガイド">
    200万トークンの長大動画・音声解析、Google Workspace（Drive/Gmail）直接連携、Canvasによる部分推敲。
  </Card>
  <Card icon="document" title="NotebookLM 活用ガイド">
    音声録音からの自動文字起こし＆議事録・報告書作成、ハルシネーションゼロのソース限定回答、ポッドキャスト化。
  </Card>
  <Card icon="puzzle" title="MCP（Model Context Protocol）">
    AIと外部ツール・DB・APIをつなぐオープン標準規格。Claude DesktopやGemini環境での初期設定とサーバー導入。
  </Card>
</CardGrid>
