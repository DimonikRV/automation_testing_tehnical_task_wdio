const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("Footer links", () => {
  it("Twitter is opended, in the new tab, by clicking on the Twitter link", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    await InventoryPage.selectSocialLink("twitter");
  });
  it("Facebook is opended, in the new tab, by clicking on the Facebook link", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    await InventoryPage.selectSocialLink("facebook");
  });
  it("Linkedin is opended, in the new tab, by clicking on the Linkedin link", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    await InventoryPage.selectSocialLink("linkedin");
  });
});
