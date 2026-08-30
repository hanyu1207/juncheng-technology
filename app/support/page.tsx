import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components";
import { supportPage } from "../data";
import { sitePath } from "../paths";

export const metadata: Metadata = supportPage.metadata;

export default function SupportPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow={supportPage.pageHero.eyebrow}
        title={supportPage.pageHero.title}
        description={supportPage.pageHero.description}
      />
      <section className="content-section">
        <div className="resource-grid">
          {supportPage.resources.map((resource) => (
            <article key={resource.title}>
              <strong>{resource.title}</strong>
              <p>{resource.text}</p>
              <a href={sitePath(resource.linkHref)}>{resource.linkLabel}</a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
