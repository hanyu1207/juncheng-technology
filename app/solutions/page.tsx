import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components";
import { solutions } from "../data";

export const metadata: Metadata = {
  title: "解决方案 | 钧程科技",
  description:
    "钧程科技提供 AI 芯片、车载多媒体 SoC、5G 通信基带和存储控制器的原型验证硬件组合方案。",
};

export default function SolutionsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Solutions"
        title="解决方案"
        description="围绕不同芯片验证场景，组合高速子卡、内存外设、桥接模块和测试夹具，缩短平台搭建周期。"
      />
      <section className="content-section">
        <div className="solution-detail-grid">
          {solutions.map((solution) => (
            <article key={solution.title}>
              <p className="eyebrow">{solution.combo}</p>
              <h2>{solution.title}</h2>
              <p>{solution.value}</p>
              <div className="system-diagram">
                <span>FPGA 载板</span>
                <span>高速子卡</span>
                <span>测试夹具</span>
                <span>参考 IP</span>
              </div>
              <ul>
                <li>推荐硬件清单按协议、连接器和线缆长度展开。</li>
                <li>系统架构图覆盖数据通路、控制通路和参考时钟链路。</li>
                <li>支持验证优势、风险点和 bring-up 顺序说明。</li>
              </ul>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
