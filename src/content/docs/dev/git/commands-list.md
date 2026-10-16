---
title: Git & GitHub よく使うコマンド一覧チートシート
description: 日常の開発業務からトラブル解決まで役立つGitとGitHubの基本・頻出コマンド早見表
sidebar:
  order: 3
---

![Git主要コマンド体系マップ](../../../../assets/dev/git-commands-map.svg)

日々の開発で頻出するGitコマンドとGitHub CLI（gh）の操作を、目的別に整理した早見表です。困ったときに手元で参照できるチートシートとしてご活用ください。

## 1. 初期設定・準備

### 初回設定
```bash
# ユーザー名とメールアドレスの登録
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 設定一覧の確認
git config --list
```

### リポジトリの準備
```bash
# 新規ローカルリポジトリを作成
git init

# GitHubのリポジトリをPCに複製（クローン）
git clone https://github.com/ユーザー名/リポジトリ名.git
```

## 2. 状態の確認とコミット

日常の開発で最も頻繁に実行する基本コマンド群です。

| コマンド | 説明 |
| :--- | :--- |
| `git status` | 変更・新規作成されたファイルの一覧と現在のブランチを確認 |
| `git diff` | まだステージしていない変更内容の差分を表示 |
| `git diff --staged` | コミット対象（ステージ済み）の差分を表示 |
| `git add <ファイル名>` | 指定したファイルをコミット対象に登録 |
| `git add -A` | すべての変更・新規・削除ファイルをまとめて登録 |
| `git commit -m "メッセージ"` | ステージした変更を履歴として記録 |
| `git commit -am "メッセージ"` | 変更ファイルのaddとコミットを同時に実行（新規ファイル除く） |

### 履歴の確認
```bash
# 履歴をわかりやすく1行ずつ表示
git log --oneline

# 最近の5件のみ表示
git log -n 5 --oneline

# ブランチの分岐と合流をグラフィカルに表示
git log --graph --oneline --all
```

## 3. ブランチ操作

機能開発やバグ修正ごとに作業を分けるためのコマンドです。

```bash
# ブランチ一覧を表示（* が現在いるブランチ）
git branch

# リモート含むすべてのブランチを表示
git branch -a

# 新規ブランチを作成して即座に切り替え（推奨）
git switch -c feature/new-page
# または従来の書き方
git checkout -b feature/new-page

# 既存のブランチに移動
git switch main
# または
git checkout main

# ブランチを削除（マージ済みの場合）
git branch -d feature/new-page

# ブランチを強制削除
git branch -D feature/new-page
```

## 4. リモート（GitHub）との連携

手元のPCとGitHubクラウドを同期します。

```bash
# 接続先リモートURLの確認
git remote -v

# GitHubの最新情報を取得（手元のファイルは変更しない）
git fetch origin

# GitHubの最新コミットを取り込んで手元のファイルに反映
git pull origin main

# 手元のコミットをGitHubに送信
git push origin feature/new-page

# 初回プッシュ時に追跡ブランチとして登録（次回から git push だけで送信可能）
git push -u origin main
```

## 5. 取り消し・一時退避（困ったとき）

間違えて変更してしまった時や、作業を中断したい時に役立ちます。

```bash
# ファイルの変更を作業前の状態に戻す
git restore <ファイル名>

# ステージしたファイルをステージ前の状態に戻す
git restore --staged <file>

# 直前のコミットメッセージを修正する
git commit --amend -m "新しいメッセージ"

# 作業中の変更を一時退避してクリーンな状態に戻す
git stash

# 退避した作業内容の一覧を見る
git stash list

# 退避した作業を復元して作業を再開する
git stash pop

# 直前のコミットを取り消す（ファイル変更はそのまま残す）
git reset --soft HEAD~1
```

## 6. GitHub CLI（ghコマンド）

ターミナルから直接GitHubの操作を行える便利な公式ツールです。

```bash
# ターミナルから直接プルリクエストを作成
gh pr create --title "新機能追加" --body "実装完了しました"

# プルリクエストの一覧を確認
gh pr list

# プルリクエストをWebブラウザで開く
gh pr view --web

# リポジトリのWebページを直接開く
gh repo view --web
```

## 7. 日常の定番ワークフロー早見表

機能を追加するときの標準的な一連の流れです。

1. `git pull origin main` で最新状態にする
2. `git switch -c feature/xxx` で専用ブランチを作る
3. 作業を進める
4. `git status` で変更内容を確認する
5. `git add -A` で変更をステージする
6. `git commit -m "feat: xxxを実装"` でコミットする
7. `git push -u origin feature/xxx` でGitHubへ送信する
8. GitHub上でプルリクエストを作成してレビューを依頼する
