import aboutContent from "../content/about.json";
import contactContent from "../content/contact.json";
import homeContent from "../content/home.json";
import productsContent from "../content/products.json";
import siteContent from "../content/site.json";
import solutionsContent from "../content/solutions.json";
import supportContent from "../content/support.json";

export type Product = {
  slug: string;
  code: string;
  name: string;
  category: string;
  protocol: string;
  bus: string;
  summary: string;
  detail?: string;
  features?: string[];
  kit?: string[];
  architecture?: string;
  applications?: string[];
};

export type DetailedProduct = Product & {
  detail: string;
  features: string[];
  kit: string[];
  architecture: string;
  applications: string[];
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn =
  | {
      title: string;
      links: FooterLink[];
      items?: never;
    }
  | {
      title: string;
      items: string[];
      links?: never;
    };

export const site = siteContent;
export const home = homeContent;
export const productsPage = productsContent;
export const solutionsPage = solutionsContent;
export const supportPage = supportContent;
export const aboutPage = aboutContent;
export const contactPage = contactContent;

export const navItems = siteContent.navigation;
export const footerColumns = siteContent.footer.columns as FooterColumn[];
export const productFamilies = productsContent.families;
export const catalogProducts = productsContent.products as Product[];
export const products = catalogProducts.filter(isDetailedProduct);
export const solutions = solutionsContent.items;

export function getDetailedProduct(slug: string): DetailedProduct | undefined {
  return products.find((item) => item.slug === slug);
}

export function findDetailedProduct(slug: string): DetailedProduct {
  const product = getDetailedProduct(slug);
  if (!product) {
    throw new Error(`Missing detailed product content for slug: ${slug}`);
  }
  return product;
}

function isDetailedProduct(product: Product): product is DetailedProduct {
  return Boolean(
    product.detail &&
      product.features?.length &&
      product.kit?.length &&
      product.architecture &&
      product.applications?.length,
  );
}
