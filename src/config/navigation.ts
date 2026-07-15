export const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
] as const;

export const footerNavigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Certeficates", href: "/certificates" },
  { name: "RSS FEED", href: "/blog/feed.xml" },
] as const;

export const footerQuote = {
  text: "Man is made by his belief. As he believes, so he is.",
  author: "Bhagavad Gita",
} as const;