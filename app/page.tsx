import { HardwareImage, SiteFooter, SiteHeader } from "./components";
import { products, solutions } from "./data";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">FPGA Prototype Hardware</p>
          <h1>自研高速互连硬件，加速芯片原型验证</h1>
          <p className="hero-lede">
            钧程科技提供硬件仿真平台、原型验证子卡、高速接口转换模块、测试夹具与配套参考设计，
            覆盖 PCIe Gen5、HDMI 2.1、QSFP28、MIPI、DDR4 / LPDDR4 等主流协议。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/products">
              浏览全系列子卡
            </a>
            <a className="secondary-button" href="/support">
              获取硬件选型手册
            </a>
          </div>
        </div>
        <HardwareImage label="FPGA 原型验证平台与高速接口子卡组合" />
      </section>

      <section className="section-band">
        <div className="section-heading">
          <p className="eyebrow">Product Matrix</p>
          <h2>面向芯片流片前验证的完整硬件矩阵</h2>
        </div>
        <div className="business-grid">
          <article>
            <strong>硬件仿真整机</strong>
            <p>适配复杂 SoC 与多板卡协同验证，提供平台集成与联调支持。</p>
          </article>
          <article>
            <strong>原型验证子卡</strong>
            <p>PCIe、HDMI、QSFP、MIPI、DDR、USB、以太网等高速接口全覆盖。</p>
          </article>
          <article>
            <strong>接口转换模块</strong>
            <p>PGT+、Prodigy+、MCIO、FMC+ 多总线桥接，减少验证平台改造成本。</p>
          </article>
          <article>
            <strong>测试夹具与线缆</strong>
            <p>IO 测试板、高速差分线缆、垫高模块和隔离模块一站式配套。</p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Featured Modules</p>
            <h2>热门产品推荐</h2>
          </div>
          <a className="text-link" href="/products">
            查看全部产品
          </a>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <a className="product-card" href={`/products/${product.slug}`} key={product.code}>
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
            <p className="eyebrow">Solutions</p>
            <h2>按行业场景组合验证硬件</h2>
          </div>
          <a className="text-link" href="/solutions">
            进入解决方案
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
          <p className="eyebrow">Selection Support</p>
          <h2>从协议、载板和线缆开始，快速确认原型验证方案。</h2>
        </div>
        <div className="hero-actions">
          <a className="primary-button" href="/contact">
            提交选型需求
          </a>
          <a className="secondary-button light" href="/support">
            查看技术资源
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
