import type { Metadata } from "next";
import { headers } from "next/headers";
import { site } from "./data";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host ?? "localhost:3000"}`);
  const siteTitle = site.metadata.title;
  const siteDescription = site.metadata.description;

  return {
    metadataBase,
    title: siteTitle,
    description: siteDescription,
    icons: {
      icon: site.assets.favicon,
      shortcut: site.assets.favicon,
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
}

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
