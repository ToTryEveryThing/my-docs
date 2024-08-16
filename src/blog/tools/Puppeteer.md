---
title: Puppeteer
icon: puppeteer
order: 5
category:
  - Tool
tag:
  - Puppeteer 
---
# Puppeteer

###### [API](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md) | [FAQ](https://puppeteer.bootcss.com/#faq) | [Contributing](https://github.com/GoogleChrome/puppeteer/blob/master/CONTRIBUTING.md) | [Troubleshooting](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md)

> Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 [DevTools](https://chromedevtools.github.io/devtools-protocol/) 协议控制 Chromium 或 Chrome。Puppeteer 默认以 [headless](https://developers.google.com/web/updates/2017/04/headless-chrome) 模式运行，但是可以通过修改配置文件运行“有头”模式。

###### 能做什么?

你可以在浏览器中手动执行的绝大多数操作都可以使用 Puppeteer 来完成！ 下面是一些示例：

- 生成页面 PDF。
- 抓取 SPA（单页应用）并生成预渲染内容（即“SSR”（服务器端渲染））。
- 自动提交表单，进行 UI 测试，键盘输入等。
- 创建一个时时更新的自动化测试环境。 使用最新的 JavaScript 和浏览器功能直接在最新版本的Chrome中执行测试。
- 捕获网站的 [timeline trace](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)，用来帮助分析性能问题。
- 测试浏览器扩展。

演示地址: https://try-puppeteer.appspot.com/

## 开始使用

### 安装

在项目中使用 Puppeteer：

```bash
npm i puppeteer
# or "yarn add puppeteer"
```



Note: 当你安装 Puppeteer 时，它会下载最新版本的Chromium（~170MB Mac，~282MB Linux，~280MB Win），以保证可以使用 API。 如果想要跳过下载，请阅读[环境变量](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#environment-variables)。

### puppeteer-core

自 1.7.0 版本以来，我们都会发布一个 [`puppeteer-core`](https://www.npmjs.com/package/puppeteer-core) 包，这个包默认不会下载 Chromium。

```bash
npm i puppeteer-core
# or "yarn add puppeteer-core"
```



`puppeteer-core` 是一个的轻量级的 Puppeteer 版本，用于启动现有浏览器安装或连接到远程安装。

具体见 [puppeteer vs puppeteer-core](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteer-vs-puppeteer-core).

### 使用

Note: Puppeteer 至少需要 Node v6.4.0，下面的示例使用 async / await，它们仅在 Node v7.6.0 或更高版本中被支持。

Puppeteer 使用起来和其他测试框架类似。你需要创建一个 `Browser` 实例，打开页面，然后使用 [Puppeteer 的 API](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#)。

**Example** - 跳转到 [https://example.com](https://example.com/) 并保存截图至 *example.png*:

文件为 **example.js**

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```



在命令行中执行

```bash
node example.js
```



Puppeteer 初始化的屏幕大小默认为 800px x 600px。但是这个尺寸可以通过 [`Page.setViewport()`](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#pagesetviewportviewport) 设置。

**Example** - 创建一个 PDF。

文件为 **hn.js**

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();
```



在命令行中执行

```bash
node hn.js
```



查看 [`Page.pdf()`](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#pagepdfoptions) 了解跟多内容。

**Example** - 在页面中执行脚本

文件为 **get-dimensions.js**

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();
```



在命令行中执行

```bash
node get-dimensions.js
```



查看 [`Page.evaluate()`](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#pageevaluatepagefunction-args) 了解更多相关内容，该方法有点类似于 `evaluateOnNewDocument` and `exposeFunction`。

## 默认设置

**1. 使用无头模式**

Puppeteer 运行 Chromium 的[headless mode](https://developers.google.com/web/updates/2017/04/headless-chrome)。如果想要使用完全版本的 Chromium，设置 ['headless' option](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#puppeteerlaunchoptions) 即可。

```js
const browser = await puppeteer.launch({headless: false}); // default is true
```



**2. 运行绑定的 Chromium 版本**

默认情况下，Puppeteer 下载并使用特定版本的 Chromium 以及其 API 保证开箱即用。 如果要将 Puppeteer 与不同版本的 Chrome 或 Chromium 一起使用，在创建`Browser`实例时传入 Chromium 可执行文件的路径即可：

```js
const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});
```



具体见：[`Puppeteer.launch()`](https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#puppeteerlaunchoptions)

看[`这篇文章`](https://www.howtogeek.com/202825/what’s-the-difference-between-chromium-and-chrome/)了解 Chromium 与 Chrome 的不同。[`这篇文章`](https://chromium.googlesource.com/chromium/src/+/master/docs/chromium_browser_vs_google_chrome.md) 介绍了一些 Linux 用户在使用上的区别。

**3. 创建用户配置文件**

Puppeteer 会创建自己的 Chromium 用户配置文件，**它会在每次运行时清理**。

## 模板

```js
const puppeteer = require('puppeteer');
const path = require('path');

async function captureScreenshot() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 }); // 根据需要设置宽度和高度
  await page.goto('http://xxxxxxx.com/'); // 替换成你的网站地址

  // 获取当前日期
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10); // 格式化日期为 yyyy-MM-dd

  // 生成截图文件路径和名称
  const screenshotPath = path.join(__dirname, `${formattedDate}.png`);

  // 设置截图选项
  const screenshotOptions = {
    path: screenshotPath, // 保存截图的文件路径和名称
    fullPage: false, // 截取整个页面
    clip: { x: 0, y: 0, width: 1920, height: 1080 }
  };
  await page.screenshot(screenshotOptions);

  await browser.close();
}

captureScreenshot();




// //可以使用
// const puppeteer = require('puppeteer');
// const path = require('path');

// async function captureScreenshot() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://beink.cn'); // 替换成你的网站地址
//     // 获取当前日期
//   const currentDate = new Date();
//   const formattedDate = currentDate.toISOString().slice(0, 10); // 格式化日期为 yyyy-MM-dd
  
//   // 生成截图文件路径和名称
//   const screenshotPath = path.join(__dirname, `${formattedDate}.png`);
  
//   await page.screenshot({ path: screenshotPath }); // 保存截图的文件路径和名称
//   await browser.close();
// }

// captureScreenshot();

```

> 一张图片大概3M

## 定时
- crontab -e
- 0 0 12 * * ? cd /www/shot && node shot.js

## Github action
```
name: main

on:
  push:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  # 每6小时执行一次，可根据需要调整时间

jobs:
  run-coupons:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
           
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18.16.0'
          
      - name: Install Dependencies
        run: |
          sudo apt-get install fonts-wqy-zenhei
          npm install
          npm install puppeteer
          
      - name: Run Script
        run: node shot.js

      - name: Create Image Branch
        run: |
          git stash
          git fetch origin
          git checkout image
          mkdir -p image
          mv *.png image/
          git pull origin image
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add .
          git commit -m "Add downloaded images"
          git push origin image
```



## 问题

### Puppeteer没有自动安装Chromium的解决办法

[Puppeteer没有自动安装Chromium的解决办法_亮子AI的博客-CSDN博客](https://blog.csdn.net/henryhu712/article/details/115588221)
[安装后再看这](https://blog.csdn.net/qq_42414062/article/details/114539378)

按照官方文档的说法，安装 Puppeteer 时会自动安装 Chromium 浏览器。但是实际安装过程中，会出现不安装 Chromium 的情况，这时需要使用下面的命令来手动安装 Chromium：

```node node_modules/puppeteer/install.js```
这样就能把 Chromium 正确的安装到 node_modules/puppeteer/.local-chromium 目录下。根据操作系统及浏览器版本的不同，浏览器大概占用 200M～400M 的磁盘空间。
