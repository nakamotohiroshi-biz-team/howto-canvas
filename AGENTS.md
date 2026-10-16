## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## HowTo記事作成・自動反映ワークフロー

ユーザーから新しいHowToページの作成依頼を受けた際は、**「作成してよいか」等の事前確認や質問は一切行わず**、直ちに以下のステップをすべて自律的・一気通貫で自動実行すること:

1. **記事ファイルの作成 & 図解画像の自動生成**:
   - `src/content/docs/<category>/<subcategory>/<slug>.md`（または `<category>/<slug>.md`）にMarkdownファイルを作成する。
   - frontmatterには `title`, `description`, `sidebar.order` を適切に設定する。
   - 説明に有効な図解画像を `src/assets/<category>/` にSVGファイルとして自動作成し、Markdown標準構文 `![alt](相対パス)` で参照・埋め込む。
   - 手順にはMermaid.jsによるフロー図やチェックリストを活用し、初心者にも分かりやすい構成にする。

2. **メニュー（サイドバー）の連携**:
   - 既存カテゴリ配下（ai, dev, appliances）の場合は、`astro.config.mjs` の `autogenerate` により自動的にメニューに反映される。
   - 新規カテゴリを作成した場合は、`astro.config.mjs` の `sidebar` 配列に該当カテゴリのエントリを追加する。

3. **コミットの完了**:
   - `git add -A`
   - `git commit -m "feat: <記事タイトル> のHowToページと図解を追加"`
   - 変更内容のコミットまでを完全に完了させ、作成した記事概要・反映先メニュー・GitHubプッシュ用コマンド（`git push`）をユーザーに報告する。


