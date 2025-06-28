import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: "Arjun Katwal",
  title: "Arjun Katwal - Android Developer & Web Developer from Nepal",
  description:
    "Android Developer and Web Developer from Kathmandu, Nepal. Building apps and websites that solve real problems for the Nepali community.",
  url: "https://arjunkatwal.com.np",
  ogImage: "https://arjunkatwal.com.np/og/domain",
  links: {
    github: "https://github.com/arjunkatwal24/portfolio",
  },
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/arjunkatwal24/portfolio";

export const UTM_PARAMS = {
  utm_source: "arjunkatwal.com.np",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
