export default class Page {
  open(path) {
    if (path) {
      return browser.url(`https://www.saucedemo.com/${path}`);
    }
    return browser.url("https://www.saucedemo.com/");
  }
}
