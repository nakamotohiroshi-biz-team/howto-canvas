---
title: HowTo Canvas へようこそ
description: AI設定から開発手順、生活家電の手入れまで、図解とリストで引けるナレッジベース
template: splash
hero:
  tagline: 道具とツールの使い方を、直感的な図解とステップで整理する
  image:
    file: ../../assets/hero-banner.svg
    alt: HowTo Canvas キービジュアル
  actions:
    - text: AIツールの使い方を見る
      link: /howto-canvas/ai/claude/skills/
      icon: right-arrow
      variant: primary
    - text: 開発ガイドを見る
      link: /howto-canvas/dev/git/basic-flow/
      icon: external
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## カテゴリから探す

<CardGrid stagger>
  <Card icon="laptop" title="AI ツールの使い方">
    ClaudeやGeminiのプロンプト、独自スキル、MCP連携、裏技などの実践手順。
  </Card>
  <Card icon="setting" title="開発・エンジニアリング">
    Git運用、GitHubチーム開発、コマンドチートシートなどのセットアップ手順。
  </Card>
</CardGrid>
