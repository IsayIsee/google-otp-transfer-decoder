# Google Authenticator 迁移工具

🔐 **在浏览器中本地解码 Google Authenticator 迁移二维码，提取 TOTP 密钥。**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.4.21-42b883)](https://cn.vuejs.org/)
[![No Backend](https://img.shields.io/badge/后端-无-brightgreen)](#)

> ⚡ **所有处理均在本地浏览器完成** — 数据不会发送到任何服务器。您的密钥始终保持私密。

- [Demo](https://isayisee.github.io/google-otp-transfer-decoder)

## ✨ 功能特性

- 📷 **扫描二维码** — 使用摄像头或上传图片扫描 Google Authenticator 迁移码
- 🔗 **粘贴 OTP Auth 链接** — 直接输入 `otpauth-migration://` URI
- 🔓 **解码密钥** — 从加密的迁移数据中提取 TOTP/HOTP 密钥
- 📱 **显示二维码** — 为每个账户重新生成独立的二维码
- 📤 **多种导出格式**：
  - CSV（通用格式）
  - JSON（结构化数据）
  - OTP Auth URI（文本文件）
  - KeePass（KeeOTP 插件格式）
  - Bitwarden（JSON 导入）
  - Aegis（Android 验证器）

## 📖 使用教程

### 步骤 1：从 Google Authenticator 导出

1. 打开 Google Authenticator 应用
2. 点击 **⋮**（菜单）→ **转移账号** → **导出账号**
3. 选择要导出的账号
4. 屏幕上会显示二维码

### 步骤 2：解码迁移码

**方式 A：使用摄像头扫描**
1. 点击 **📷 扫描 / 上传** 标签
2. 点击 **打开摄像头**
3. 将二维码对准扫描框内

**方式 B：上传图片**
1. 点击 **上传 / 拖放** 按钮
2. 选择二维码截图
3. 或直接拖拽图片到页面上

**方式 C：粘贴链接**
1. 点击 **🔗 输入 URL** 标签
2. 粘贴 `otpauth-migration://offline?data=...` URI
3. 点击 **解析**

### 步骤 3：查看和导出密钥

- 查看解码后的账户名称、发行方和密钥
- 点击 QR 图标重新生成单个二维码
- 点击 📋 复制密钥到剪贴板
- 使用导出按钮以 preferred 格式导出

## 🛠️ 技术栈

- **框架**: [Vue 3](https://cn.vuejs.org/) (组合式 API，无需构建)
- **QR 扫描**: [qr-scanner](https://github.com/nimiq/qr-scanner), [jsQR](https://github.com/cozmo/jsQR)
- **QR 生成**: [qrcode](https://github.com/soldair/node-qrcode)
- **Protocol Buffers**: [protobuf.js](https://github.com/protobufjs/protobuf.js)
- **Base32 编码**: [base32-encode](https://github.com/LinusU/base32-encode)
- **样式**: 自定义 CSS + CSS 变量
- **字体**: [DM Sans](https://fonts.google.com/specimen/DM+Sans), [DM Mono](https://fonts.google.com/specimen/DM+Mono)

## 🔐 隐私与安全

**本工具将您的隐私放在首位：**

- ✅ **无服务器通信** — 所有解码在浏览器中完成
- ✅ **无数据存储** — 密钥永不保存或传输
- ✅ **无追踪** — 无分析、无 Cookie、无指纹识别
- ✅ **开源** — 代码透明可审计
- ✅ **离线可用** — 初次加载后无需网络即可使用

### 工作原理

1. Google Authenticator 导出二维码包含 **Protocol Buffer** 编码的数据
2. 应用使用 protobuf.js 解码 base64 载荷
3. 密钥被提取并重新编码为 **Base32** 格式
4. 所有操作在浏览器的 JavaScript 引擎中运行
5. **数据不会离开您的设备**

## 🌍 浏览器兼容性

| 浏览器  | 版本 | 状态       |
| ------- | ---- | ---------- |
| Chrome  | 90+  | ✅ 完全支持 |
| Firefox | 88+  | ✅ 完全支持 |
| Safari  | 14+  | ✅ 完全支持 |
| Edge    | 90+  | ✅ 完全支持 |
| Opera   | 76+  | ✅ 完全支持 |

**要求：**
- ES6+ JavaScript 支持
- `fetch` API
- `canvas` API
- 网络摄像头访问权限（用于扫描功能）

## 📦 导出格式说明

| 格式             | 用途           | 兼容应用               |
| ---------------- | -------------- | ---------------------- |
| **CSV**          | 通用电子表格   | Excel, Google Sheets   |
| **JSON**         | 自定义集成     | 任意 JSON 解析器       |
| **OTP Auth URI** | 手动导入       | Authy, FreeOTP         |
| **KeePass**      | 密码管理器     | KeePass, KeePassXC     |
| **Bitwarden**    | 密码管理器     | Bitwarden, Vaultwarden |
| **Aegis**        | Android 验证器 | Aegis Authenticator    |

## 🧪 开发

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/isayisee/google-otp-transfer-decoder.git
cd google-otp-transfer-decoder

# 启动本地服务器
yarn serve

# 在浏览器中打开
open http://localhost:3000
```

### 进行修改

由于这是单文件应用，你可以直接编辑 `index.html`：

1. 在你喜欢的编辑器中编辑文件
2. 刷新浏览器查看更改
3. 无需构建步骤！

### 生产优化

生产部署时，可以考虑：

```bash
# 压缩 HTML
npm install -g html-minifier
html-minifier --collapse-whitespace --minify-css --minify-js index.html -o index.min.html
```

## 📝 数据格式规范

### Google Authenticator 迁移协议

迁移二维码包含：

```protobuf
syntax = "proto3";

message MigrationPayload {
  enum Algorithm {
    ALGO_INVALID = 0;
    ALGO_SHA1 = 1;
    ALGO_SHA256 = 2;
    ALGO_SHA512 = 3;
    ALGO_MD5 = 4;
  }

  enum OtpType {
    OTP_INVALID = 0;
    OTP_HOTP = 1;
    OTP_TOTP = 2;
  }

  message OtpParameters {
    bytes secret = 1;
    string name = 2;
    string issuer = 3;
    Algorithm algorithm = 4;
    int32 digits = 5;
    OtpType type = 6;
    int64 counter = 7;
  }

  repeated OtpParameters otp_parameters = 1;
  int32 version = 2;
  int32 batch_size = 3;
  int32 batch_index = 4;
  int32 batch_id = 5;
}
```

### OTP Auth URI 格式

生成的 URI 遵循 [Key Uri Format](https://github.com/google/google-authenticator/wiki/Key-Uri-Format)：

```
otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example&algorithm=SHA1&digits=6&period=30
```

## ⚠️ 免责声明

本工具仅用于 **合法的备份和迁移目的**。

- 🔒 负责任且道德地使用
- 🛡️ 仅解码您拥有或有权访问的账户
- ⚠️ 切勿公开分享您的密钥
- 📱 安全存储导出的数据

作者不对软件的不当使用负责。

## 📄 许可证

**MIT 许可证** — 可自由使用、修改和分发。

```
Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



[⬆ 返回顶部](#google-authenticator-迁移工具)
