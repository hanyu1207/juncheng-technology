export type Product = {
  slug: string;
  code: string;
  name: string;
  category: string;
  protocol: string;
  bus: string;
  summary: string;
  detail: string;
  features: string[];
  kit: string[];
  architecture: string;
  applications: string[];
};

export const navItems = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品中心" },
  { href: "/solutions", label: "解决方案" },
  { href: "/support", label: "技术资源" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
];

export const productFamilies = [
  "PGT+ 高速协议子卡",
  "Prodigy+ 外设子卡",
  "总线转换桥接模块",
  "IO 扩展与测试夹具",
  "ARM 调试互连模块",
  "高速差分配套线缆",
  "可选配件",
];

export const products: Product[] = [
  {
    slug: "pcie-gen5",
    code: "H-JC-PCIe5-8X",
    name: "8 通道 PCIe Gen5 根组件模块",
    category: "PGT+ 高速协议子卡",
    protocol: "PCIe Gen5",
    bus: "PGT+",
    summary: "面向 AI 芯片、存储控制器和高速互连 SoC 的 PCIe Gen5 原型验证模块。",
    detail:
      "模块提供 8 路 GT 高速收发通道、独立 RefClk 差分时钟输入和 Redriver 重驱动链路，适合在 FPGA 原型验证平台上快速搭建 PCIe Root Complex / Endpoint 联调环境。",
    features: [
      "8 通道 GT 高速收发链路，支持 PCIe Gen5 速率验证",
      "板载 RefClk 差分时钟 Buffer，支持外部参考时钟输入",
      "集成链路状态 LED、复位按键和 SMBUS 控制逻辑",
      "占用 PGT+ 高速连接器，支持多模块并行级联",
      "适配 PCIe 兼容性测试、协议栈 bring-up 与软硬件协同调试",
    ],
    kit: [
      "H-JC-PCIe5-8X 主模块 1 块",
      "PGT+ 高速差分线缆 500 mm 2 根",
      "参考时钟转接线与调试排线",
      "PCIe Gen5 原型验证参考设计包",
    ],
    architecture:
      "高速通道经 PGT+ 连接器进入 FPGA 载板，链路前端采用 Redriver 保证眼图裕量；RefClk Buffer 向端点侧分发低抖动参考时钟，SMBUS 与 GPIO 负责链路控制和状态回读。",
    applications: ["AI 大算力芯片原型", "存储控制器验证", "高速互连协议兼容性测试"],
  },
  {
    slug: "hdmi21",
    code: "H-JC-HDMI21-PGTP",
    name: "HDMI 2.1 PGT+ 多媒体接口模块",
    category: "PGT+ 高速协议子卡",
    protocol: "HDMI 2.1",
    bus: "PGT+",
    summary: "用于车载座舱、多媒体 SoC 和显示处理芯片的高带宽 HDMI 2.1 验证。",
    detail:
      "模块集成 HDMI 2.1 接口、Hot Plug 检测、电平转换和 ESD 保护，支持显示链路快速 bring-up，并保留 I2C / CEC 辅助调试接口。",
    features: [
      "支持 HDMI 2.1 高带宽显示链路验证",
      "集成 HPD、DDC、CEC 辅助控制与状态指示",
      "支持 PGT+ 高速通道接入和参考时钟输入",
      "板载电平转换与接口防护，适合高频插拔测试",
      "可配合 MIPI / ARM 互连子卡构建座舱显示验证系统",
    ],
    kit: [
      "H-JC-HDMI21-PGTP 模块 1 块",
      "PGT+ 高速差分线缆 1 根",
      "HDMI 标准测试线 1 根",
      "显示链路调试参考设计",
    ],
    architecture:
      "HDMI 物理接口经高速走线进入 PGT+ 通道，DDC / CEC 由低速控制域管理，电平转换与 ESD 防护位于前端，方便进行显示链路稳定性和协议兼容验证。",
    applications: ["车载多媒体 SoC", "显示桥接芯片验证", "高清视频接口兼容性测试"],
  },
  {
    slug: "qsfp28",
    code: "H-JC-QSFP28-MCIO",
    name: "QSFP28 MCIO-LPC 光通信子卡",
    category: "PGT+ 高速协议子卡",
    protocol: "QSFP28",
    bus: "MCIO-LPC",
    summary: "面向 5G 通信基带、交换芯片和高速 SerDes 验证的 QSFP28 光口模块。",
    detail:
      "模块提供 QSFP28 光口笼、四通道高速差分链路、模块在位检测和低速管理接口，可与 PGT+ / MCIO 线缆组合构成高速光通信验证链路。",
    features: [
      "4 通道高速 SerDes 链路，适配 QSFP28 光模块",
      "支持模块在位检测、低速管理接口和状态 LED",
      "MCIO-LPC 接入形式，适合紧凑型验证系统布线",
      "支持 25G 单通道级别链路 bring-up 和误码调试",
      "可与 SGMII / RGMII 子卡组合搭建通信协议验证平台",
    ],
    kit: [
      "H-JC-QSFP28-MCIO 子卡 1 块",
      "MCIO-LPC 高速线缆 1 根",
      "低速管理调试线 1 套",
      "QSFP28 链路测试参考工程",
    ],
    architecture:
      "QSFP28 笼口接入四路高速差分通道，低速 I2C 管理域负责模块识别和状态读取，前端电源与热插拔保护保证光模块插拔测试的稳定性。",
    applications: ["5G 通信基带验证", "高速交换芯片原型", "SerDes 链路质量调试"],
  },
  {
    slug: "lpddr4",
    code: "H-JC-LPDDR4-S8",
    name: "LPDDR4 S8-40 / S8-100 内存子卡",
    category: "Prodigy+ 外设子卡",
    protocol: "LPDDR4",
    bus: "Prodigy+",
    summary: "为移动端 SoC、图像处理芯片和嵌入式控制芯片提供 LPDDR4 原型验证能力。",
    detail:
      "子卡提供 S8-40 与 S8-100 两种连接版本，支持 LPDDR4 内存接口验证、训练调试和控制器时序收敛验证，可配合 FPGA 载板完成系统级压力测试。",
    features: [
      "S8-40 / S8-100 双版本连接形态",
      "支持 LPDDR4 控制器 bring-up、训练和压力测试",
      "提供必要电源域、终端匹配和测试点",
      "兼容 Prodigy+ 外设总线，便于复用平台资源",
      "适配移动端 SoC 和多媒体处理芯片原型验证",
    ],
    kit: [
      "H-JC-LPDDR4-S8 内存子卡 1 块",
      "Prodigy+ 连接线缆 1 根",
      "电源与信号完整性测试点说明",
      "LPDDR4 控制器验证参考工程",
    ],
    architecture:
      "LPDDR4 颗粒位于短走线拓扑中心，Prodigy+ 接口负责与 FPGA 载板连接，电源域与参考电压在板上完成隔离和监测，便于进行训练参数和时序窗口调试。",
    applications: ["移动端 SoC 原型", "多媒体图像处理芯片", "嵌入式控制器存储验证"],
  },
];

export const catalogProducts = [
  ...products,
  {
    slug: "mipi-dphy",
    code: "H-JC-MIPI-DPHY",
    name: "MIPI D-PHY 适配模块",
    category: "Prodigy+ 外设子卡",
    protocol: "MIPI",
    bus: "Prodigy+",
    summary: "配套 CSI 摄像头和 DSI 显示套件，支持车载与视觉 SoC 验证。",
  },
  {
    slug: "usb3-pipe",
    code: "H-JC-USB3-PIPE",
    name: "USB 3.0 PIPE 接口子卡",
    category: "Prodigy+ 外设子卡",
    protocol: "USB 3.0",
    bus: "Prodigy+",
    summary: "用于 USB 控制器 PHY 侧联调和高速接口兼容验证。",
  },
  {
    slug: "pgt-bridge",
    code: "H-JC-PGTP-BRIDGE",
    name: "PGT 转 PGT+ 桥接模块",
    category: "总线转换桥接模块",
    protocol: "高速互连",
    bus: "PGT+",
    summary: "连接既有 PGT 平台与新一代 PGT+ 子卡，降低迁移成本。",
  },
  {
    slug: "io-fixture",
    code: "H-JC-FMC-IO-TB",
    name: "FMC+ IO 测试夹具",
    category: "IO 扩展与测试夹具",
    protocol: "FMC+",
    bus: "FMC+",
    summary: "用于 IO 通断、方向、电平转换与批量测试验证。",
  },
] as const;

export const solutions = [
  {
    title: "AI 大算力芯片原型",
    combo: "PCIe Gen5 + DDR4 / LPDDR4 + QSFP28",
    value: "快速验证主机互连、外部存储和高速光口数据通路。",
  },
  {
    title: "车载多媒体 SoC",
    combo: "HDMI 2.1 + MIPI D-PHY + ARM 互连子卡",
    value: "覆盖摄像头输入、座舱显示输出和调试控制链路。",
  },
  {
    title: "5G 通信基带",
    combo: "QSFP28 + SGMII / RGMII + PGT+ 高速线缆",
    value: "建立高速 SerDes、光口和以太网管理链路验证环境。",
  },
  {
    title: "存储控制器",
    combo: "SATA3 + EMMC5.1 + DDR4 SO-DIMM",
    value: "支持存储协议栈、控制器训练和压力测试。",
  },
];
