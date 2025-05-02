import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SOLAY Docs',
  tagline: 'يمكنك العثور على جميع المستندات والشروحات والتعليمات الخاصة بمجتمع سولاي',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.solayf.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'solayff', // Usually your GitHub org/user name.
  projectName: 'SOLAY_Games_Docs', // Usually your repo name.
	deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ar',
    locales: ['en', 'ar'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/solayff/SOLAY_Docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/solayff/SOLAY_Docs/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/SOLAY-Dis.png',
    navbar: {
      title: 'SOLAY Docs',
      logo: {
        alt: 'SOLAY Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'المقدمة',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://discord.gg/so',
          label: 'الدسكورد',
          position: 'left',
        },
				{
					href: 'https://store.solayf.com',
					label: 'المتجر',
					position: 'left',
				},
				// {
				// 	type: 'localeDropdown',
				// 	position: 'right',
				// },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'شروحات السيرفر',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'الدسكورد',
              href: 'https://discord.gg/so',
            },
            {
              label: 'الموقع الرسمي',
              href: 'https://solayf.com',
            },
            {
              label: 'المتجر',
              href: 'https://store.solayf.com/',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SOLAY Docs, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false, // لو تبي تخلي الناس يقدرون يغيرون أو لا
			respectPrefersColorScheme: false, // لا تحترم إعدادات المتصفح، خلك دايم dark
		},
  } satisfies Preset.ThemeConfig,
};

export default config;
