import type { Metadata } from "next";
import { ProductDetail, SiteFooter, SiteHeader } from "../../components";
import { products } from "../../data";

const product = products.find((item) => item.slug === "hdmi21")!;

export const metadata: Metadata = {
  title: `${product.name} | 钧程科技`,
  description: product.summary,
  openGraph: {
    title: `${product.name} | 钧程科技`,
    description: product.summary,
    images: [],
  },
  twitter: {
    title: `${product.name} | 钧程科技`,
    description: product.summary,
    images: [],
  },
};

export default function Hdmi21Page() {
  return (
    <main>
      <SiteHeader />
      <ProductDetail product={product} />
      <SiteFooter />
    </main>
  );
}
