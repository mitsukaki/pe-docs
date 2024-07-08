// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pose Engine',
  tagline: 'Easy-to-use, flexible, and capable locomotion for VRChat.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mitsukaki.github.io', // Your website URL
  baseUrl: '/pe-docs',
  projectName: 'pe-docs',
  organizationName: 'mitsukaki',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Pose Engine',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://vpm.mitsukaki.com',
            label: 'VPM (Creator Companion)',
            position: 'right',
          },
          {
            href: 'https://github.com/mitsukaki/pose-engine',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pose Engine',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mitsukaki/pose-engine',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'VPM (Creator Companion)',
                href: 'https://vpm.mitsukaki.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/ew49tn6pR2',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} mitsukaki. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
