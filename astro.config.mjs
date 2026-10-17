import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // ※ ユーザーのGitHub名に置き換え可能、デフォルトプレースホルダー
  site: process.env.SITE_URL || 'https://example.github.io',
  base: '/howto-canvas',

  integrations: [
    starlight({
      title: 'HowTo Canvas',
      description: 'モノとツールの使い方ナレッジ',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
      },
      sidebar: [
        {
          label: 'AI ツールの使い方',
          items: [{ autogenerate: { directory: 'ai' } }],
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
