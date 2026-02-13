# 翼界科技官方网站 (EJDrone Official Website)

<p align="center">
  <img src="./src/assets/brand/logo_27.png" alt="翼界科技 Logo" width="120">
</p>

<p align="center">
  <strong>心有翼，境无界 —— 让自然生态更美好</strong>
</p>

<p align="center">
  <a href="#-项目简介">项目简介</a> •
  <a href="#-技术栈">技术栈</a> •
  <a href="#-功能特性">功能特性</a> •
  <a href="#-快速开始">快速开始</a> •
  <a href="#-项目结构">项目结构</a> •
  <a href="#-开发规范">开发规范</a>
</p>

---

## 📋 项目简介

本项目是**翼界科技（广西翼界科技有限公司）**的官方网站前端项目，致力于展示公司在无人机技术应用和生态保护领域的专业服务。网站采用现代化的前端技术栈构建，提供流畅的用户体验和专业的视觉呈现。

### 🎯 核心业务

- **空地协同监测**：无人机与卫星遥感结合，实现大范围生态环境监测
- **低空经济服务**：提供专业的无人机数据采集、处理和分析服务
- **自然教育推广**：开展生态保护科普教育，提升公众环保意识

### 🏆 企业资质

- 国家高新技术企业认证
- ISO 14001 环境管理体系认证
- ISO 45001 职业健康安全管理体系认证
- AAA 信用等级证书
- 民用无人驾驶航空器经营许可证

---

## 🛠 技术栈

### 核心技术

| 类别 | 技术 | 版本 | 说明 |
|------|------|------|------|
| **框架** | React | ^18.3.1 | 用户界面构建库 |
| **语言** | TypeScript | ~5.8.3 | 类型安全的 JavaScript |
| **构建工具** | Vite | ^6.3.5 | 下一代前端构建工具 |
| **路由** | React Router DOM | ^7.3.0 | 声明式路由管理 |
| **状态管理** | Zustand | ^5.0.3 | 轻量级状态管理 |

### UI 与样式

| 类别 | 技术 | 版本 | 说明 |
|------|------|------|------|
| **样式框架** | Tailwind CSS | ^3.4.17 | 实用优先的 CSS 框架 |
| **图标库** | Lucide React | ^0.511.0 | 现代化图标库 |
| **工具类** | clsx + tailwind-merge | ^2.1.1 / ^3.0.2 | 条件类名合并 |

### 开发工具

| 类别 | 技术 | 版本 | 说明 |
|------|------|------|------|
| **代码检查** | ESLint | ^9.25.0 | 代码质量检查 |
| **类型检查** | TypeScript ESLint | ^8.30.1 | TypeScript 规则 |
| **测试** | Playwright | ^1.58.2 | 端到端测试 |
| **性能分析** | Lighthouse | ^13.0.3 | 性能评估工具 |

---

## ✨ 功能特性

### 🎨 视觉设计

- **品牌色彩系统**：生态绿(#2D8659) + 科技蓝(#1E40AF) + 纯净白(#FFFFFF)
- **响应式布局**：完美适配桌面端(1920px)、平板端(768px-1024px)、移动端(<768px)
- **流畅动效**：页面加载动画、滚动触发效果、悬停交互反馈
- **View Transitions**：现代化的页面切换动画

### 📄 页面模块

| 页面 | 路径 | 功能描述 |
|------|------|----------|
| **首页** | `/` | 公司形象展示、核心数据、服务介绍 |
| **解决方案与案例** | `/solutions` | 行业解决方案和成功案例展示 |
| **档案中心** | `/archives` | 企业资质、荣誉、产品档案 |
| **无人机服务** | `/drone_service` | 低空经济服务详情介绍 |
| **合作伙伴** | `/partners` | 合作企业展示 |
| **关于我们** | `/about` | 公司介绍和团队信息 |
| **发展历程** | `/developing` | 公司发展里程碑 |
| **联系我们** | `/contact` | 联系方式和办公地址 |

### 🔧 技术特性

- ⚡ **极速构建**：Vite 提供毫秒级 HMR 和快速构建
- 🔒 **类型安全**：TypeScript 全项目覆盖
- 📱 **移动优先**：响应式设计，多端适配
- 🎯 **SEO 友好**：语义化 HTML 结构
- ♿ **无障碍访问**：符合 WCAG 2.1 标准
- 🧪 **测试覆盖**：Playwright E2E 测试

### 🔍 SEO 配置

- 语义化 HTML 结构
- Meta 标签优化
- Open Graph 社交分享支持
- 网站地图自动生成

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/traditionalpc01-beep/company-base.git
cd company-base
```

2. **安装依赖**

```bash
npm install
```

3. **启动开发服务器**

```bash
npm run dev
```

4. **打开浏览器访问**

```
http://localhost:5173
```

### 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |
| `npm run lint` | 运行 ESLint 检查 |
| `npm run check` | 运行 TypeScript 类型检查 |

---

## 📁 项目结构

```
company-base/
├── .trae/                      # Trae IDE 配置和文档
│   ├── documents/              # 项目文档 (PRD、架构设计等)
│   └── skills/                 # 自定义技能配置
├── dist/                       # 构建输出目录
├── public/                     # 静态资源
│   ├── assets-library/         # 企业资质图片等资源
│   └── favicon.svg             # 网站图标
├── scripts/                    # 工具脚本
│   ├── crawl-ejdrone-content.js
│   ├── e2e_smoke.py
│   └── sync-honors-assets.js
├── src/
│   ├── assets/                 # 项目资源文件
│   │   ├── brand/              # 品牌 Logo
│   │   └── images/             # 图片资源
│   ├── components/             # 公共组件
│   │   ├── Footer/             # 页脚组件
│   │   ├── Header/             # 导航栏组件
│   │   ├── Hero/               # 主视觉区组件
│   │   ├── Services/           # 服务展示组件
│   │   └── Statistics/         # 数据统计组件
│   ├── content/                # 站点内容配置
│   │   ├── site.ts             # 导航、联系信息等
│   │   └── types.ts            # 类型定义
│   ├── hooks/                  # 自定义 React Hooks
│   ├── lib/                    # 工具函数
│   ├── pages/                  # 页面组件
│   │   ├── Home/               # 首页
│   │   ├── About/              # 关于我们
│   │   ├── Archives/           # 档案中心
│   │   ├── Contact/            # 联系我们
│   │   └── ...                 # 其他页面
│   ├── App.tsx                 # 应用根组件
│   ├── main.tsx                # 应用入口
│   └── index.css               # 全局样式
├── index.html                  # HTML 模板
├── package.json                # 项目依赖
├── tsconfig.json               # TypeScript 配置
├── vite.config.ts              # Vite 配置
├── tailwind.config.js          # Tailwind CSS 配置
└── eslint.config.js            # ESLint 配置
```

---

## 📝 开发规范

### 代码风格

- 使用 **TypeScript** 进行类型定义，避免使用 `any`
- 组件使用 **函数式组件** + **Hooks**
- 使用 **ESLint** 保持代码风格一致
- 遵循 **React 最佳实践** 和 **Hooks 规则**

### 提交规范

- 使用清晰的提交信息描述变更内容
- 功能分支开发，通过 PR 合并到主分支
- 提交信息格式建议：`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`

### 代码审查

- 所有代码必须通过 ESLint 检查
- TypeScript 类型检查必须通过
- 建议进行代码审查后合并

### 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件 | PascalCase | `Header.tsx`, `HeroSection.tsx` |
| 文件/目录 | camelCase / kebab-case | `useTheme.ts`, `drone-service/` |
| 常量 | UPPER_SNAKE_CASE | `API_BASE_URL` |
| 函数/变量 | camelCase | `getUserInfo`, `isLoading` |

---

## 🧪 测试

### E2E 测试

项目使用 Playwright 进行端到端测试：

```bash
# 运行所有测试
npx playwright test

# 运行特定测试
npx playwright test e2e_smoke.py

# 生成测试报告
npx playwright show-report
```

### 性能测试

使用 Lighthouse 进行性能评估：

```bash
# 构建后运行 Lighthouse
npm run build
npx lighthouse http://localhost:4173 --output=json --output-path=./lighthouse-report.json
```

---

## 🛡️ 环境配置

### 环境变量

项目使用环境变量配置部分功能，创建 `.env` 文件：

```bash
# 示例环境变量
VITE_APP_TITLE=翼界科技
VITE_APP_BASE_URL=/
```

### 浏览器支持

| 浏览器 | 支持版本 |
|--------|----------|
| Chrome | >= 90 |
| Firefox | >= 88 |
| Safari | >= 14 |
| Edge | >= 90 |

---

## 📞 联系我们

### 翼界科技

- **电话**：17677138300
- **邮箱**：office@ejdrone.com

### 办公地址

| 办公点 | 地址 |
|--------|------|
| 南宁办 | 广西南宁市青秀区金浦路16号汇东国际F座6楼 |
| 北海办 | 广西北海市工业园区中国电子北部湾信息港B塔楼201 |
| 海口办 | 海南省海口市国家高新技术产业开发区狮子岭工业园光伏北路18号研发办公楼4层 |

---

## 📄 许可证

本项目为翼界科技内部项目，未经许可不得用于商业用途。

---

<p align="center">
  Made with ❤️ by 翼界科技技术团队
</p>
