// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lilith 的博客',
  tagline: '前端 & DevOps 学习笔记',
  favicon: 'img/favicon.ico',

  url: 'https://lilith887.github.io',
  baseUrl: '/lilith-blog/',
  trailingSlash: true,  // ← 新增

  organizationName: 'lilith887',
  projectName: 'lilith-blog',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/lilith887/lilith-blog/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl:
            'https://github.com/lilith887/lilith-blog/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Lilith 的学习小站',
      logo: { alt: 'Logo', src: '/img/avatar.jpg' },
      items: [
        {
          label: '学习小记',
          to: '/docs/beginners-guide/day1-setup', // 跳转到第一篇笔记
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/lilith887', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'Tutorial', to: '/docs/intro' }] },
        { title: 'Community', items: [{ label: 'GitHub', href: 'https://github.com/lilith887' }] },
        { title: 'More', items: [{ label: 'Blog', to: '/blog' }, { label: 'GitHub', href: 'https://github.com/lilith887' }] },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lilith887. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
