import type { Metadata } from "next";
import { HardwareImage, PageHero, SiteFooter, SiteHeader } from "../components";
import { aboutPage } from "../data";

export const metadata: Metadata = aboutPage.metadata;

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow={aboutPage.pageHero.eyebrow}
        title={aboutPage.pageHero.title}
        description={aboutPage.pageHero.description}
      />
      <section className="about-layout">
        <div>
          <h2>{aboutPage.intro.title}</h2>
          <p>{aboutPage.intro.text}</p>
          <div className="metric-grid">
            {aboutPage.metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>
        <HardwareImage label={aboutPage.intro.imageLabel} />
      </section>
      <section className="content-section">
        <div className="business-grid">
          {aboutPage.capabilities.map((capability) => (
            <article key={capability.title}>
              <strong>{capability.title}</strong>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
