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
    - text: 家電のお手入れを見る
      link: /howto-canvas/appliances/microwave/cleaning/
      icon: external
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## カテゴリから探す

<CardGrid stagger>
  <Card icon="laptop" title="AI ツールの使い方">
    ClaudeやGeminiのプロンプト、独自スキル、外部API連携などの実践手順。
  </Card>
  <Card icon="setting" title="開発・エンジニアリング">
    Git運用、Docker構成、各種開発ツールのセットアップ手順。
  </Card>
  <Card icon="information" title="家電・実機の使い方">
    電子レンジ、エアコン、スマート家電などの基本操作とメンテナンス。
  </Card>
</CardGrid>
