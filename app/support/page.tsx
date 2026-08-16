import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "技术资源 | 钧程科技",
  description:
    "下载钧程科技硬件数据手册、Verilog 参考 IP、总线规格文档和原型验证平台搭建指南。",
};

const resources = [
  {
    title: "硬件数据手册",
    text: "全部子卡 PDF 入口，包含接口定义、连接器占用、LED / 按键和参考时钟说明。",
  },
  {
    title: "Verilog 参考 IP 库",
    text: "PCIe、HDMI、MIPI、DDR、以太网等接口 bring-up 示例和基础驱动工程。",
  },
  {
    title: "平台搭建指南",
    text: "从 FPGA 载板、子卡、线缆、时钟到电源上电顺序的原型验证平台配置流程。",
  },
  {
    title: "PGT+ / Prodigy+ 总线规范",
    text: "高速差分通道、低速管理接口、MCIO / FMC+ 桥接和机械尺寸约束。",
  },
  {
    title: "硬件调试 FAQ",
    text: "链路不稳定、参考时钟、训练失败、热插拔、电平转换和信号完整性常见问题。",
  },
];

export default function SupportPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Technical Resources"
        title="技术资源"
        description="把数据手册、参考设计和调试经验集中到一个入口，让硬件、FPGA 和软件团队可以同步推进。"
      />
      <section className="content-section">
        <div className="resource-grid">
          {resources.map((resource) => (
            <article key={resource.title}>
              <strong>{resource.title}</strong>
              <p>{resource.text}</p>
              <a href="/contact">申请资料</a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
