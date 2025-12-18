export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'UFC Calendar',
  description: 'UFC Calendar chrome extension landing page.',
  mainNav: [
    {
      title: 'Web App',
      href: '/webapp',
    },
    {
      title: 'Releases',
      href: '/releases',
    },
    // {
    //   title: 'Pricing',
    //   href: '/pricing',
    // },
    {
      title: 'About',
      href: '/about',
    },
    // {
    //   title: 'Contact',
    //   href: '/contact',
    // },
  ],
  links: {
    facebook: 'https://www.facebook.com/castleridgelabs',
    twitter: 'https://twitter.com/CastleridgeL',
    buymeacoffee: 'https://www.buymeacoffee.com/castleridgelabs',
    discord: 'https://discord.gg/dbksy6WqR8',
    chrome: 'https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch',
    edge: 'https://microsoftedge.microsoft.com/addons/detail/ufc-calendar/nhdnpeojmfmonkdhohohokcfkphcpdpc',
  },
};
