import { HardwareImage, SiteFooter, SiteHeader } from "./components";
import { catalogProducts, home, solutions } from "./data";
import { sitePath } from "./paths";

export default function Home() {
  const featuredProducts = catalogProducts.filter((product) =>
    home.featuredProducts.slugs.includes(product.slug),
  );

  return (
    <main>
      <SiteHeader />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1>{home.hero.title}</h1>
          <p className="hero-lede">{home.hero.description}</p>
          <div className="hero-actions">
            {home.hero.actions.map((action) => (
              <a
                className={action.style === "primary" ? "primary-button" : "secondary-button"}
                href={sitePath(action.href)}
                key={action.label}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
        <HardwareImage label={home.hero.imageLabel} />
      </section>

      <section className="section-band">
        <div className="section-heading">
          <p className="eyebrow">{home.business.eyebrow}</p>
          <h2>{home.business.title}</h2>
        </div>
        <div className="business-grid">
          {home.business.items.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{home.featuredProducts.eyebrow}</p>
            <h2>{home.featuredProducts.title}</h2>
          </div>
          <a className="text-link" href={sitePath(home.featuredProducts.linkHref)}>
            {home.featuredProducts.linkLabel}
          </a>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <a
              className="product-card"
              href={sitePath(`/products/${product.slug}`)}
              key={product.code}
            >
              <span>{product.code}</span>
              <strong>{product.name}</strong>
              <p>{product.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section solution-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{home.solutions.eyebrow}</p>
            <h2>{home.solutions.title}</h2>
          </div>
          <a className="text-link" href={sitePath(home.solutions.linkHref)}>
            {home.solutions.linkLabel}
          </a>
        </div>
        <div className="solution-grid">
          {solutions.map((solution) => (
            <article key={solution.title}>
              <strong>{solution.title}</strong>
              <p className="solution-combo">{solution.combo}</p>
              <p>{solution.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">{home.cta.eyebrow}</p>
          <h2>{home.cta.title}</h2>
        </div>
        <div className="hero-actions">
          {home.cta.actions.map((action) => (
            <a
              className={
                action.style === "primary" ? "primary-button" : "secondary-button light"
              }
              href={sitePath(action.href)}
              key={action.label}
            >
              {action.label}
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
