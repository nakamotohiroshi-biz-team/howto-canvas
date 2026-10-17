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
          label: 'Claude',
          items: [{ autogenerate: { directory: 'ai/claude' } }],
        },
        {
          label: 'Gemini',
          items: [{ autogenerate: { directory: 'ai/gemini' } }],
        },
        {
          label: '共通',
          items: [
            {
              label: 'スキル共有・コピー方法',
              slug: 'ai/gemini-claude-sharing',
            },
            {
              label: 'MCP（共通ツール規格）',
              items: [{ autogenerate: { directory: 'ai/mcp' } }],
            },
            {
              label: 'NotebookLM（音声・資料解析）',
              items: [{ autogenerate: { directory: 'ai/notebooklm' } }],
            },
          ],
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
