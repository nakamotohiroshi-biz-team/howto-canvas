---
title: Git 基本コマンドと日常ワークフロー
description: 個人開発からチーム開発まで使える基本Git操作
sidebar:
  order: 1
---

import { Image } from 'astro:assets';
import gitImg from '../../../../assets/dev/git-flow-diagram.svg';

<Image src={gitImg} alt="Gitワークフロー図（NanoBanana生成）" />

## 1. ワークフロー概要

```mermaid
graph LR
    A[作業ディレクトリ] -->|git add| B[ステージング]
    B -->|git commit| C[ローカル履歴]
    C -->|git push| D[GitHub リモート]
```

## 2. 実行手順

1. **変更ファイルの確認**
   ```bash
   git status
   ```
2. **ステージングへの追加**
   ```bash
   git add .
   ```
3. **コミットの記録**
   ```bash
   git commit -m "feat: 新しい使い方記事を追加"
   ```
4. **リモートへの送信**
   ```bash
   git push origin main
   ```
