---
title: GitHub CLI（gh）の備忘録：ログインからPR作成まで
description: ターミナルからGitHubを操作できるGitHub CLI（gh）のログイン手順と、プルリクエストの作成・確認・マージなど、よく使うコマンドのまとめ
sidebar:
  order: 3
---

GitHub CLI（`gh`）を使うと、ブラウザを開かずに、ターミナルからプルリクエスト（PR）の作成やIssueの確認ができます。
この記事は、初回ログインからPR作成までの流れと、よく使うコマンドの備忘録です。

## 1. 最初に1回だけ: ログイン

```bash
gh auth login
```

質問には、次のように答えます（矢印キーで選び、Enterで決定）。

| 質問 | 選ぶもの |
| :--- | :--- |
| What account do you want to log into? | GitHub.com |
| What is your preferred protocol for Git operations? | HTTPS |
| Authenticate Git with your GitHub credentials? | Yes |
| How would you like to authenticate GitHub CLI? | Login with a web browser |

画面に出る8桁のコードを、ブラウザの認証画面に入力すると完了します。

```bash
# ログイン状態の確認
gh auth status
```

:::tip[ポイント]
トークンは、PCの資格情報の保管場所（キーリング）に保存されます。コマンドやファイルに、トークンを自分で書く必要はありません。
:::

## 2. プルリクエストを作る

作業ブランチをプッシュしたあと、次のように作成します。

```bash
git push -u origin feature/my-task

gh pr create --base main --title "fix: 〇〇を修正" --body "変更内容の説明"
```

- `--base`: マージ先のブランチ（通常は `main`）
- `--title` / `--body`: タイトルと本文
- 対話形式で入力したい場合は `gh pr create` だけでも使えます。

すでに同じブランチのPRがある場合は、作成せず、既存PRのURLを表示して終了します。

## 3. よく使うコマンド

| コマンド | できること |
| :--- | :--- |
| `gh pr list` | PRの一覧を表示 |
| `gh pr view 1` | 1番のPRの内容を表示 |
| `gh pr view 1 --web` | 1番のPRをブラウザで開く |
| `gh pr checks 1` | 1番のPRの自動チェック（CI）の結果を表示 |
| `gh pr edit 1 --title "…"` | PRのタイトルや本文を修正 |
| `gh pr merge 1` | PRをマージ（方式を対話で選ぶ） |
| `gh issue list` | Issueの一覧を表示 |
| `gh repo view --web` | リポジトリをブラウザで開く |
| `gh run list` | GitHub Actionsの実行履歴を表示 |

:::caution[マージの前に]
`gh pr merge` は、すぐにmainへ反映されます。サイトを公開している場合は、そのまま公開に進むこともあります。差分を確認してから実行してください。
:::

## 4. うまくいかないとき

- **`gh auth login` を求められる:** ログインしていないか、期限切れです。もう一度ログインしてください。
- **組織のリポジトリで権限エラーになる:** 認証の画面で、組織へのアクセス許可を求められることがあります。許可が必要です。
- **別のアカウントでログインしてしまった:** `gh auth status` で確認し、`gh auth logout` のあと、もう一度ログインします。複数アカウントの扱いは [複数アカウントの備忘録](/howto-canvas/dev/git/multi-account-memo/) を参照してください。

## 5. チェックリスト

- [ ] `gh auth status` でログイン済みを確認したか
- [ ] PRの `--base` が正しいか
- [ ] マージ前に差分を確認したか

関連記事: [伝わるプルリクエスト（PR）作成術とコードレビュー作法](/howto-canvas/dev/github/pull-request-review/)
