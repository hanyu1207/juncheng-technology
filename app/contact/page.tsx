import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components";
import { contactPage } from "../data";

export const metadata: Metadata = contactPage.metadata;

export default function ContactPage() {
  const fields = contactPage.form.fields;

  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow={contactPage.pageHero.eyebrow}
        title={contactPage.pageHero.title}
        description={contactPage.pageHero.description}
      />
      <section className="contact-layout">
        <div className="contact-card">
          <h2>{contactPage.contactCard.title}</h2>
          {contactPage.contactCard.items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <form className="inquiry-form">
          <label>
            {fields.product.label}
            <input name="product" placeholder={fields.product.placeholder} />
          </label>
          <label>
            {fields.quantity.label}
            <input name="quantity" placeholder={fields.quantity.placeholder} />
          </label>
          <label>
            {fields.industry.label}
            <select name="industry" defaultValue="">
              <option value="" disabled>
                {fields.industry.placeholder}
              </option>
              {fields.industry.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            {fields.contact.label}
            <input name="contact" placeholder={fields.contact.placeholder} />
          </label>
          <label className="full-field">
            {fields.message.label}
            <textarea name="message" placeholder={fields.message.placeholder} />
          </label>
          <button type="button">{contactPage.form.buttonLabel}</button>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
