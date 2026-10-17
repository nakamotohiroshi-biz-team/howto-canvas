import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // ※ ユーザーのGitHub名に置き換え可能、デフォルトプレースホルダー
  site: process.env.SITE_URL || 'https://example.github.io',
  base: '/howto-canvas',

  integrations: [
    starlight({
      title: 'HowTo Canvas ｜ AI＆開発ナレッジ',
      description: 'Claude、Gemini、Gemini Notebook、Git等の実践活用ナレッジベース',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
      },
      sidebar: [
        {
          label: 'Claude',
          items: [{ autogenerate: { directory: 'ai/claude' } }],
        },
        {
          label: 'Gemini',
          items: [{ autogenerate: { directory: 'ai/gemini' } }],
        },
        {
          label: 'Gemini Notebook (NotebookLM)',
          items: [{ autogenerate: { directory: 'ai/notebooklm' } }],
        },
        {
          label: '共通・連携（MCP）',
          items: [
            {
              label: 'スキル共有・コピー方法',
              slug: 'ai/gemini-claude-sharing',
            },
            {
              label: 'MCP（共通ツール規格）',
              items: [{ autogenerate: { directory: 'ai/mcp' } }],
            },
          ],
        },
        {
          label: '開発・エンジニアリング',
          items: [{ autogenerate: { directory: 'dev' } }],
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com',
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
