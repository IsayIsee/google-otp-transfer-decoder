# Google Authenticator 迁移数据解码器

🔐 在浏览器本地解码 Google Authenticator 迁移二维码，零数据上传。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.4.21-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Yarn](https://img.shields.io/badge/Yarn-Manager-2C8EBB?logo=yarn)](https://yarnpkg.com/)

---

## 📖 项目简介

**Google Authenticator 迁移数据解码器** 是一个纯前端工具，用于解码 Google Authenticator 的迁移二维码，提取您的 TOTP/HOTP 密钥。所有数据处理均在浏览器本地完成，**无需任何网络请求**，确保您的隐私安全。

快速使用可以访问 https://isayisee.github.io/google-otp-transfer-decoder ，或者自行克隆代码部署

---

## 🚀 快速开始

### 前置要求

- Node.js >= 18.0.0
- Yarn >= 1.22.0

### 安装依赖

```bash
# 安装依赖
yarn install
```

### 开发模式

```bash
# 启动本地开发服务器
yarn dev
```

浏览器访问 `http://localhost:5173`

### 生产构建

```bash
# 构建生产版本
yarn build

# 预览构建结果
yarn preview
```

### 静态服务

```bash
# 使用 serve 托管构建产物
yarn serve
```

---

## 📦 依赖说明

| 依赖          | 版本    | 用途                  |
| ------------- | ------- | --------------------- |
| vue           | ^3.4.21 | 前端框架              |
| protobufjs    | ^7.4.0  | Protocol Buffers 解码 |
| qr-scanner    | ^1.4.2  | 二维码扫描            |
| jsqr          | ^1.4.0  | 备用二维码识别        |
| base32-encode | ^2.0.0  | Base32 编码           |

### 开发依赖

| 依赖               | 版本    | 用途          |
| ------------------ | ------- | ------------- |
| @vitejs/plugin-vue | ^5.0.4  | Vite Vue 插件 |
| vite               | ^5.1.6  | 构建工具      |
| serve              | ^14.2.1 | 静态文件服务  |

---

## 📂 项目结构

```
otp-vault/
├── index.html          # 主页面（单文件应用）
├── package.json        # 项目配置与依赖
├── vite.config.js      # Vite 构建配置
├── README.md           # 项目文档
└── dist/               # 构建输出目录（执行 build 后生成）
```

---

## 🔧 使用指南

### 方式一：摄像头扫描

1. 点击「扫描摄像头」按钮
2. 选择摄像头（如有多个）
3. 将 Google Authenticator 迁移二维码对准扫描框
4. 解码成功后自动显示结果

### 方式二：图片上传

1. 点击「上传 / 拖放图片」按钮
2. 选择包含迁移二维码的图片
3. 或直接拖拽图片到页面
4. 系统自动识别并解码

### 解码结果

解码后将显示：
- 账户发行方（Issuer）
- 账户名称（Name）
- 类型（TOTP / HOTP）
- 算法（Algorithm）
- 位数（Digits）
- 密钥（Secret）— 可一键复制

---

## 🌐 多语言支持

当前支持以下语言：

| 语言    | 代码  |
| ------- | ----- |
| 中文    | zh-CN |
| English | en    |

语言选择通过顶部语言切换器实时切换，偏好设置会保存在本地存储。

---

## 🔐 安全说明

### 数据来源

本工具解码的是 Google Authenticator 的**迁移二维码**，格式为：
```
otpauth-migration://offline?data=<base64_encoded_protobuf>
```

### 解码流程

1. 从二维码中提取 `otpauth-migration` URL
2. 解析 `data` 参数的 Base64 编码
3. 使用 Protocol Buffers 解码二进制数据
4. 将原始密钥转换为 Base32 格式
5. 在页面中展示结果

### 重要提示

- ⚠️ 请妥善保管提取的密钥
- ⚠️ 不要将密钥分享给他人
- ⚠️ 建议在安全环境中使用本工具
- ⚠️ 使用后可清除浏览器历史记录

---

## 📝 技术栈

- **框架**: Vue 3 (Composition API)
- **构建**: Vite 5
- **语言**: HTML5 + CSS3 + JavaScript (ES Modules)
- **样式**: 原生 CSS (CSS Variables)
- **字体**: Google Fonts (Syne, DM Sans, DM Mono)

---

## 📄 许可证

MIT License — 详见 [LICENSE](LICENSE) 文件

---

## ⚠️ 免责声明

本工具仅供学习和研究用途。使用本工具提取的密钥请注意安全保管，因使用不当造成的任何损失，作者不承担任何责任。

---
