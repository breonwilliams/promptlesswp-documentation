// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Promptless WP',
  tagline: 'Modern Documentation for AI-Powered WordPress Page Building',
  favicon: 'img/promptless-favicon.svg',

  // Set the production url of your site here
  url: 'https://breonwilliams.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/promptlesswp-documentation/', // Matches your repo name

  // GitHub pages deployment config
  organizationName: 'breonwilliams', // Your GitHub username
  projectName: 'promptlesswp-documentation', // Your repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Docs at the root
          // Remove the "Edit this page" links
          editUrl: undefined,
        },
        blog: false, // Disable the blog feature
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Navbar configuration
      navbar: {
        title: 'Promptless WP',
        logo: {
          alt: 'Promptless Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [],
        hideOnScroll: false,
        style: 'dark', // Force dark navbar
      },
      
      // Footer configuration
      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} Promptless WP. All rights reserved.`,
      },
      
      // Color mode configuration - Dark only
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,  // Remove theme toggle completely
        respectPrefersColorScheme: false,
      },
      
      // Prism configuration for code blocks
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'jsx', 'css'],
      },
      
      // Search configuration
      algolia: undefined, // We'll use local search instead
      
      // Custom theme configuration
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
    }),
  
  // Plugins can be added here later
  plugins: [],
};

module.exports = config;