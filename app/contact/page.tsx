import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "联系我们 | 钧程科技",
  description:
    "联系钧程科技销售与技术支持，提交产品型号、需求数量、行业和样品申请信息。",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="联系我们"
        description="提交协议、载板、线缆和数量需求，钧程科技会帮助确认子卡组合、连接器兼容性和验证路径。"
      />
      <section className="contact-layout">
        <div className="contact-card">
          <h2>销售与技术支持</h2>
          <p>销售热线：400-JC-FPGA</p>
          <p>技术邮箱：support@juncheng-tech.example</p>
          <p>公司地址：中国 · 上海 / 深圳</p>
          <p>样品申请：提供项目阶段、目标协议和预期验证平台。</p>
        </div>
        <form className="inquiry-form">
          <label>
            产品型号
            <input name="product" placeholder="例如 H-JC-PCIe5-8X" />
          </label>
          <label>
            需求数量
            <input name="quantity" placeholder="例如 2 套" />
          </label>
          <label>
            所属行业
            <select name="industry" defaultValue="">
              <option value="" disabled>
                请选择
              </option>
              <option>AI 芯片</option>
              <option>车载 SoC</option>
              <option>通信基带</option>
              <option>存储控制器</option>
              <option>多媒体显示</option>
            </select>
          </label>
          <label>
            联系方式
            <input name="contact" placeholder="邮箱或电话" />
          </label>
          <label className="full-field">
            需求描述
            <textarea
              name="message"
              placeholder="请描述载板型号、目标协议、线缆长度、样品或量产计划"
            />
          </label>
          <button type="button">提交询价</button>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
