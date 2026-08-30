import Link from "next/link";
import { navItems, productsPage, site, type DetailedProduct } from "./data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">{site.brand.mark}</span>
        <span>
          <strong>{site.brand.name}</strong>
          <small>{site.brand.englishName}</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label={site.labels.mainNavigation}>
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-action" href={site.headerAction.href}>
        {site.headerAction.label}
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">{site.brand.mark}</span>
          <span>
            <strong>{site.brand.name}</strong>
            <small>{site.brand.footerSubtitle}</small>
          </span>
        </Link>
        <p>{site.footer.description}</p>
      </div>
      {site.footer.columns.map((column) => (
        <div key={column.title}>
          <strong>{column.title}</strong>
          {"links" in column
            ? column.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))
            : column.items.map((item) => <span key={item}>{item}</span>)}
        </div>
      ))}
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export function HardwareImage({ label }: { label: string }) {
  return (
    <figure className="image-frame">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={site.assets.hardwareImage} alt={label} />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export function ProductDetail({ product }: { product: DetailedProduct }) {
  const detailPage = productsPage.detailPage;

  return (
    <>
      <section className="breadcrumb">
        <Link href="/">{detailPage.homeLabel}</Link>
        <span>/</span>
        <Link href="/products">{detailPage.productsLabel}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </section>
      <section className="product-detail-hero">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p>{product.detail}</p>
          <div className="spec-strip">
            <span>{product.code}</span>
            <span>{product.protocol}</span>
            <span>{product.bus}</span>
          </div>
        </div>
        <HardwareImage label={`${product.code} ${detailPage.imageLabelSuffix}`} />
      </section>
      <section className="detail-grid">
        <article>
          <h2>{detailPage.featureTitle}</h2>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>{detailPage.kitTitle}</h2>
          <ul>
            {product.kit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>{detailPage.architectureTitle}</h2>
          <p>{product.architecture}</p>
        </article>
        <article>
          <h2>{detailPage.applicationsTitle}</h2>
          <ul>
            {product.applications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
      <section className="cta-band">
        <div>
          <p className="eyebrow">{detailPage.ctaEyebrow}</p>
          <h2>{detailPage.ctaTitle}</h2>
        </div>
        <div className="hero-actions">
          <a className="primary-button" href={detailPage.manualLinkHref}>
            {detailPage.manualLinkLabel}
          </a>
          <a className="secondary-button light" href={detailPage.inquiryLinkHref}>
            {detailPage.inquiryLinkLabel}
          </a>
        </div>
      </section>
    </>
  );
}
