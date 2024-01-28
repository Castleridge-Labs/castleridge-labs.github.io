export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'UFC Calendar',
  description: 'UFC Calendar chrome extension landing page.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Web App',
      href: '/webapp',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Releases',
      href: '/releases',
    },
  ],
  links: {
    facebook: 'https://www.facebook.com/castleridgelabs',
    twitter: 'https://twitter.com/CastleridgeL',
    buymeacoffee: 'https://www.buymeacoffee.com/castleridgelabs',
    discord: 'https://discord.gg/dbksy6WqR8',
  },
};
