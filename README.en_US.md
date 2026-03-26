# Google Authenticator Migration Tool

🔐 **Decode Google Authenticator migration QR codes and extract TOTP secrets entirely in your browser.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.4.21-42b883)](https://vuejs.org/)
[![No Backend](https://img.shields.io/badge/Backend-None-brightgreen)](#)

> ⚡ **All processing happens locally in your browser** — no data is sent to any server. Your secrets stay private.

- [Demo](https://isayisee.github.io/google-otp-transfer-decoder)

## ✨ Features

- 📷 **Scan QR Codes** — Use your webcam or upload images to scan Google Authenticator migration codes
- 🔗 **Paste OTP Auth URLs** — Directly input `otpauth-migration://` URIs
- 🔓 **Decode Secrets** — Extract TOTP/HOTP secrets from encrypted migration data
- 📱 **Display QR Codes** — Regenerate individual QR codes for each account
- 📤 **Multiple Export Formats**:
  - CSV (universal)
  - JSON (structured data)
  - OTP Auth URIs (text file)
  - KeePass (KeeOTP plugin format)
  - Bitwarden (JSON import)
  - Aegis (Android authenticator)

## 📖 How to Use

### Step 1: Export from Google Authenticator

1. Open Google Authenticator app
2. Tap **⋮** (menu) → **Transfer accounts** → **Export accounts**
3. Select accounts to export
4. A QR code will appear on screen

### Step 2: Decode the Migration Code

**Option A: Scan with Webcam**
1. Click **📷 Scan / Upload** tab
2. Click **Open Camera**
3. Align the QR code within the scanning frame

**Option B: Upload Image**
1. Click **Upload / Drop** button
2. Select a screenshot of the QR code
3. Or drag & drop the image directly

**Option C: Paste URL**
1. Click **🔗 Enter URL** tab
2. Paste the `otpauth-migration://offline?data=...` URI
3. Click **Parse**

### Step 3: View & Export Secrets

- View decoded account names, issuers, and secrets
- Click the QR icon to regenerate individual QR codes
- Click 📋 to copy secrets to clipboard
- Export in your preferred format using the export buttons

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API, no build step)
- **QR Scanning**: [qr-scanner](https://github.com/nimiq/qr-scanner), [jsQR](https://github.com/cozmo/jsQR)
- **QR Generation**: [qrcode](https://github.com/soldair/node-qrcode)
- **Protocol Buffers**: [protobuf.js](https://github.com/protobufjs/protobuf.js)
- **Base32 Encoding**: [base32-encode](https://github.com/LinusU/base32-encode)
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: [DM Sans](https://fonts.google.com/specimen/DM+Sans), [DM Mono](https://fonts.google.com/specimen/DM+Mono)

## 📁 Project Structure

```
├── index.html          # Single-file application (all-in-one)
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

That's it! This is a **single-file application** with zero build dependencies.

## 🔐 Privacy & Security

**This tool prioritizes your privacy:**

- ✅ **No server communication** — All decoding happens in your browser
- ✅ **No data storage** — Secrets are never saved or transmitted
- ✅ **No tracking** — No analytics, cookies, or fingerprinting
- ✅ **Open source** — Code is transparent and auditable
- ✅ **Offline capable** — Works without internet after initial load

### How It Works

1. Google Authenticator export QR contains **Protocol Buffer** encoded data
2. The app decodes the base64 payload using protobuf.js
3. Secrets are extracted and re-encoded in **Base32** format
4. All operations run in your browser's JavaScript engine
5. **No data leaves your device**

## 🌍 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full support |
| Firefox | 88+     | ✅ Full support |
| Safari  | 14+     | ✅ Full support |
| Edge    | 90+     | ✅ Full support |
| Opera   | 76+     | ✅ Full support |

**Requirements:**
- ES6+ JavaScript support
- `fetch` API
- `canvas` API
- Web Camera access (for scanning feature)

## 📦 Export Formats Explained

| Format | Use Case | Compatible Apps |
|--------|----------|-----------------|
| **CSV** | Universal spreadsheet | Excel, Google Sheets |
| **JSON** | Custom integrations | Any JSON parser |
| **OTP Auth URI** | Manual import | Authy, FreeOTP |
| **KeePass** | Password managers | KeePass, KeePassXC |
| **Bitwarden** | Password managers | Bitwarden, Vaultwarden |
| **Aegis** | Android authenticator | Aegis Authenticator |

## 🧪 Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/isayisee/google-otp-transfer-decoder.git
cd google-otp-transfer-decoder

# Start a local server
npx serve .

# Open in browser
open http://localhost:3000
```

### Making Changes

Since this is a single-file app, you can edit `index.html` directly:

1. Edit the file in your favorite editor
2. Refresh the browser to see changes
3. No build step required!

### Production Optimization

For production deployment, consider:

```bash
# Minify HTML
npm install -g html-minifier
html-minifier --collapse-whitespace --minify-css --minify-js index.html -o index.min.html
```

## 📝 Data Format Specification

### Google Authenticator Migration Protocol

The migration QR code contains:

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

### OTP Auth URI Format

Generated URIs follow the [Key Uri Format](https://github.com/google/google-authenticator/wiki/Key-Uri-Format):

```
otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example&algorithm=SHA1&digits=6&period=30
```

## ⚠️ Disclaimer

This tool is intended for **legitimate backup and migration purposes only**.

- 🔒 Use responsibly and ethically
- 🛡️ Only decode accounts you own or have permission to access
- ⚠️ Never share your secrets publicly
- 📱 Securely store your exported data

The authors are not responsible for misuse of this software.

## 📄 License

**MIT License** — Feel free to use, modify, and distribute.

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

---

[⬆ Back to Top](#google-authenticator-migration-tool)