import type { Metadata } from "next";
import { site } from "./data";
import { sitePath } from "./paths";
import "./globals.css";

const siteTitle = site.metadata.title;
const siteDescription = site.metadata.description;
const siteUrl = "url" in site ? site.url : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: sitePath(site.assets.favicon),
    shortcut: sitePath(site.assets.favicon),
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: [{ url: site.assets.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [site.assets.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
