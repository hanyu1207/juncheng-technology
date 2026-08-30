import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail, SiteFooter, SiteHeader } from "../../components";
import { getDetailedProduct, products, site } from "../../data";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getDetailedProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | ${site.brand.name}`,
    description: product.summary,
    openGraph: {
      title: `${product.name} | ${site.brand.name}`,
      description: product.summary,
      images: [],
    },
    twitter: {
      title: `${product.name} | ${site.brand.name}`,
      description: product.summary,
      images: [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getDetailedProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <ProductDetail product={product} />
      <SiteFooter />
    </main>
  );
}
