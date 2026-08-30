import type { Metadata } from "next";
import Link from "next/link";
import { HardwareImage, PageHero, SiteFooter, SiteHeader } from "../components";
import { catalogProducts, productFamilies, products, productsPage } from "../data";
import { sitePath } from "../paths";

export const metadata: Metadata = productsPage.metadata;

export default function ProductsPage() {
  const detailSlugs = new Set(products.map((product) => product.slug));
  const labels = productsPage.labels;
  const familyLinks = productFamilies.map((family) => ({
    family,
    href: `#${catalogProducts.find((product) => product.category === family)?.slug ?? "catalog"}`,
  }));

  return (
    <main>
      <SiteHeader />
      <PageHero {...productsPage.pageHero} />
      <section className="catalog-layout">
        <aside className="catalog-sidebar" aria-label={labels.categorySidebar}>
          <strong>{labels.categorySidebar}</strong>
          {familyLinks.map((item) => (
            <a href={item.href} key={item.family}>
              {item.family}
            </a>
          ))}
        </aside>
        <div className="catalog-main" id="catalog">
          <div className="filter-bar">
            <span>{labels.protocolFilter}</span>
            {productsPage.filters.protocols.map((protocol) => (
              <Link href="/products" key={protocol}>
                {protocol}
              </Link>
            ))}
            <span>{labels.busFilter}</span>
            {productsPage.filters.buses.map((bus) => (
              <Link href="/products" key={bus}>
                {bus}
              </Link>
            ))}
          </div>
          <HardwareImage label={productsPage.catalogImageLabel} />
          <div className="catalog-grid">
            {catalogProducts.map((product) => (
              <article
                className="product-card catalog-card"
                id={product.slug}
                key={product.code}
              >
                <span>{product.code}</span>
                <strong>{product.name}</strong>
                <p>{product.summary}</p>
                <div className="card-meta">
                  <small>{product.category}</small>
                  <small>{product.bus}</small>
                </div>
                {detailSlugs.has(product.slug) ? (
                  <a href={sitePath(`/products/${product.slug}`)}>{labels.detailLink}</a>
                ) : (
                  <a href={sitePath("/contact")}>{labels.inquiryLink}</a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
