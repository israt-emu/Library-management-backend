const pp = require("puppeteer");
const dotenv = require("dotenv").config();

exports.takeScreenShot = async (url) => {
  try {
    const mySecret = process.env.SCREENSHOT_API_KEY;

    const browser = await pp.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${mySecret}`,
    });

    const page = await browser.newPage();

    await page.goto(url);
    await page.evaluate(() => (document.body.style.background = "#fff"));
    await page.setViewport({width: 400, height: 400});
    const screenshot = await page.screenshot({
      // path: `${title}.jpeg`,
      options: {
        type: "jpeg",
        quality: 1,
      },
      encoding: "base64",
    });

    await browser.close();
    return screenshot;
  } catch (error) {
    console.log(error);
  }
};
