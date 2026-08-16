import { navItems, type Product } from "./data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="brand-mark">JC</span>
        <span>
          <strong>钧程科技</strong>
          <small>Juncheng Technology</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="主导航">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-action" href="/contact">
        技术咨询
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="/">
          <span className="brand-mark">JC</span>
          <span>
            <strong>钧程科技</strong>
            <small>FPGA 原型验证硬件</small>
          </span>
        </a>
        <p>
          专注高速互连硬件、原型验证子卡、接口转换模块与测试夹具，服务 AI 芯片、车规
          SoC、通信基带、多媒体和存储芯片团队。
        </p>
      </div>
      <div>
        <strong>产品中心</strong>
        <a href="/products">PGT+ 高速协议子卡</a>
        <a href="/products">Prodigy+ 外设子卡</a>
        <a href="/products">总线转换桥接模块</a>
      </div>
      <div>
        <strong>技术支持</strong>
        <a href="/support">数据手册下载</a>
        <a href="/support">Verilog 参考 IP</a>
        <a href="/contact">申请样品</a>
      </div>
      <div>
        <strong>联系钧程</strong>
        <span>sales@juncheng-tech.example</span>
        <span>400-JC-FPGA</span>
        <span>中国 · 上海 / 深圳</span>
      </div>
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
      <img src="/hardware-lab.png" alt={label} />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      <section className="breadcrumb">
        <a href="/">首页</a>
        <span>/</span>
        <a href="/products">产品中心</a>
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
        <HardwareImage label={`${product.code} 实物与功能框图示意`} />
      </section>
      <section className="detail-grid">
        <article>
          <h2>产品特性</h2>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>标准产品套装</h2>
          <ul>
            {product.kit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>硬件架构说明</h2>
          <p>{product.architecture}</p>
        </article>
        <article>
          <h2>应用场景</h2>
          <ul>
            {product.applications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
      <section className="cta-band">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2>需要确认接口、线缆和载板兼容性？</h2>
        </div>
        <div className="hero-actions">
          <a className="primary-button" href="/support">
            下载数据手册
          </a>
          <a className="secondary-button light" href="/contact">
            咨询技术参数
          </a>
        </div>
      </section>
    </>
  );
}
