/**
 * i18n.js — Google Authenticator Migration Decoder
 * 语言包 / Language Pack
 *
 * 如需新增语言，仿照下方结构增加一个键即可，例如 "ja"、"ko"、"de" 等。
 * To add a new language, duplicate an existing block and change the key (e.g. "ja", "ko", "de").
 */

export const messages = {

  /* ── 简体中文 ────────────────────────────────────────────── */
  "zh-CN": {
    title:         "Google Authenticator 迁移工具",
    subtitle:      "解码 Google Authenticator 迁移二维码，提取 TOTP 密钥。",
    privacy:       "所有处理均在本地浏览器完成",
    dropHere:      "将二维码图片拖放到这里",
    step1Label:    "选择输入方式",
    tabScan:       "📷 扫描 / 上传",
    tabUrl:        "🔗 输入 URL",
    startCamera:   "打开摄像头",
    stopCamera:    "关闭摄像头",
    uploadBtn:     "上传 / 拖放图片",
    camHint:       "将二维码对准框内",
    urlPlaceholder:"粘贴 otpauth-migration://offline?data=... 链接，支持同时输入多行",
    parseBtn:      "解析",
    errCamera:     "摄像头访问被拒绝或不可用。",
    errNoQR:       "未能识别图片中的二维码，请确认图片清晰且未被裁剪。",
    errInvalidUrl: "无效的迁移链接格式，请确认是 Google Authenticator 导出的二维码。",
    step2Label:    "解码结果",
    accountUnit:   (n) => `${n} 个账号`,
    unknownIssuer: "未知发行方",
    metaAlgo:      "算法",
    metaDigits:    "位数",
    metaCounter:   "计数",
    copyTip:       "复制密钥",
    copied:        "已复制",
    showQR:        "显示二维码",
    exportTitle:   "导出",
    rawData:       "原始数据",
    footerLicense: "MIT License",
    themeLight:    "浅色",
    themeDark:     "深色",
  },

  /* ── English ─────────────────────────────────────────────── */
  "en": {
    title:         "Google Authenticator Migration Tool",
    subtitle:      "Decode Google Authenticator migration QR codes and extract TOTP secrets.",
    privacy:       "All processing happens locally in your browser",
    dropHere:      "Drop QR image here",
    step1Label:    "Input Source",
    tabScan:       "📷 Scan / Upload",
    tabUrl:        "🔗 Enter URL",
    startCamera:   "Open Camera",
    stopCamera:    "Close Camera",
    uploadBtn:     "Upload / Drop",
    camHint:       "Align QR code within the frame",
    urlPlaceholder:"Paste otpauth-migration://offline?data=... URL here (supports multiple lines)",
    parseBtn:      "Parse",
    errCamera:     "Camera access denied or unavailable.",
    errNoQR:       "Could not detect a QR code. Please ensure the image is clear and not cropped.",
    errInvalidUrl: "Invalid migration URL. Please make sure this is a Google Authenticator export QR.",
    step2Label:    "Decoded Entries",
    accountUnit:   (n) => `${n} account${n !== 1 ? "s" : ""}`,
    unknownIssuer: "Unknown Issuer",
    metaAlgo:      "Algo",
    metaDigits:    "Digits",
    metaCounter:   "Counter",
    copyTip:       "Copy secret",
    copied:        "Copied!",
    showQR:        "Show QR code",
    exportTitle:   "Export",
    rawData:       "Raw URI Data",
    footerLicense: "MIT License",
    themeLight:    "Light",
    themeDark:     "Dark",
  },

  /* ── 繁體中文 ────────────────────────────────────────────── */
  // "zh-TW": {
  //   title: "Google Authenticator 遷移工具",
  //   ...
  // },

  /* ── 日本語 ──────────────────────────────────────────────── */
  // "ja": {
  //   title: "Google Authenticator 移行ツール",
  //   ...
  // },
};

/** 支持的语言列表 / Supported locales list */
export const langs = [
  { code: "zh-CN", label: "中文" },
  { code: "en",    label: "EN"   },
];
