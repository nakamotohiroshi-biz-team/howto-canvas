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

ユーザーから新しいHowToページの作成依頼を受けた際は、以下のステップをすべて一気通貫で自動実行すること:

1. **記事ファイルの作成**:
   - `src/content/docs/<category>/<subcategory>/<slug>.md` にMarkdownファイルを作成する。
   - frontmatterには `title`, `description`, `sidebar.order` を指定する。
   - 画像を配置する場合は `src/assets/` にSVG/画像を置き、Markdown標準構文 `![alt](相対パス)` で参照する。
   - 手順にはMermaid.jsなどの図解やチェックリストを活用する。

2. **メニュー（サイドバー）の連携**:
   - 既存カテゴリ配下（ai, dev, appliances）の場合は、`astro.config.mjs` の `autogenerate` により自動的にメニューに反映される。
   - 新規カテゴリを作成した場合は、`astro.config.mjs` の `sidebar` 配列に該当カテゴリのエントリを追加する。

3. **コミット＆GitHubへのプッシュ**:
   - `git add -A`
   - `git commit -m "feat: <記事タイトル> のHowToページを追加"`
   - `git push origin main`
   - コミットとプッシュまでを自動で実行し、ユーザーに完了した公開URLと概要を報告する。

