import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // ※ ユーザーのGitHub名に置き換え可能、デフォルトプレースホルダー
  site: process.env.SITE_URL || 'https://example.github.io',
  base: '/howto-canvas',

  integrations: [
    starlight({
      title: 'HowTo Canvas ｜ AI実践ナレッジ',
      description: 'Claude、Gemini、NotebookLM、MCPの実践活用ナレッジベース',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
      },
      sidebar: [
        {
          label: 'Claude 活用ガイド',
          items: [{ autogenerate: { directory: 'ai/claude' } }],
        },
        {
          label: 'Gemini 活用ガイド',
          items: [{ autogenerate: { directory: 'ai/gemini' } }],
        },
        {
          label: 'NotebookLM 活用ガイド',
          items: [{ autogenerate: { directory: 'ai/notebooklm' } }],
        },
        {
          label: 'MCP（Model Context Protocol）',
          items: [{ autogenerate: { directory: 'ai/mcp' } }],
        },
        {
          label: 'モデル間連携・スキル共有',
          items: [{ slug: 'ai/gemini-claude-sharing' }],
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
