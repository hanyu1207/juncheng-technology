import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components";
import { solutions, solutionsPage } from "../data";

export const metadata: Metadata = solutionsPage.metadata;

export default function SolutionsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow={solutionsPage.pageHero.eyebrow}
        title={solutionsPage.pageHero.title}
        description={solutionsPage.pageHero.description}
      />
      <section className="content-section">
        <div className="solution-detail-grid">
          {solutions.map((solution) => (
            <article key={solution.title}>
              <p className="eyebrow">{solution.combo}</p>
              <h2>{solution.title}</h2>
              <p>{solution.value}</p>
              <div className="system-diagram">
                {solutionsPage.diagramLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <ul>
                {solutionsPage.defaultBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
