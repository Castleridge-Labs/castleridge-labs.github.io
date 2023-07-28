export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "UFC Calendar",
  description:
    "UFC Calendar chrome extension landing page.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "Stats",
      href: "#stats",
    },
    {
      title: "Web App",
      href: "/webapp",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/castleridgelabs",
    twitter: "https://twitter.com/CastleridgeL",
    buymeacoffee: "https://www.buymeacoffee.com/castleridgelabs",
  },
}