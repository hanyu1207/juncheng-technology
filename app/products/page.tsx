import type { Metadata } from "next";
import { HardwareImage, PageHero, SiteFooter, SiteHeader } from "../components";
import { catalogProducts, productFamilies } from "../data";

export const metadata: Metadata = {
  title: "产品中心 | 钧程科技",
  description:
    "钧程科技产品中心，包含 PGT+ 高速协议子卡、Prodigy+ 外设子卡、总线转换模块、IO 测试夹具和高速线缆。",
};

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Product Center"
        title="产品中心"
        description="按协议、总线和验证场景组织的原型验证硬件矩阵，覆盖高速接口、外设、桥接、测试夹具与线缆配套。"
      />
      <section className="catalog-layout">
        <aside className="catalog-sidebar" aria-label="产品分类">
          <strong>产品分类</strong>
          {productFamilies.map((family) => (
            <a href={`#${family}`} key={family}>
              {family}
            </a>
          ))}
        </aside>
        <div className="catalog-main">
          <div className="filter-bar">
            <span>协议筛选</span>
            <a href="#PCIe Gen5">PCIe5</a>
            <a href="#HDMI 2.1">HDMI2.1</a>
            <a href="#MIPI">MIPI</a>
            <a href="#LPDDR4">DDR / LPDDR</a>
            <span>总线筛选</span>
            <a href="#PGT+">PGT+</a>
            <a href="#Prodigy+">Prodigy+</a>
            <a href="#FMC+">FMC+</a>
          </div>
          <HardwareImage label="原型验证子卡、测试夹具与高速线缆产品族" />
          <div className="catalog-grid">
            {catalogProducts.map((product) => (
              <article
                className="product-card catalog-card"
                id={product.protocol}
                key={product.code}
              >
                <span>{product.code}</span>
                <strong>{product.name}</strong>
                <p>{product.summary}</p>
                <div className="card-meta">
                  <small id={product.category}>{product.category}</small>
                  <small id={product.bus}>{product.bus}</small>
                </div>
                {"slug" in product && product.slug in detailLinks ? (
                  <a href={detailLinks[product.slug]}>查看详情</a>
                ) : (
                  <a href="/contact">咨询规格</a>
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

const detailLinks: Record<string, string> = {
  "pcie-gen5": "/products/pcie-gen5",
  hdmi21: "/products/hdmi21",
  qsfp28: "/products/qsfp28",
  lpddr4: "/products/lpddr4",
};
