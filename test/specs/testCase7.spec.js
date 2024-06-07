import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";

describe("Footer links", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("Twitter is opended, in the new tab, by clicking on the Twitter link", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.selectSocialLink("twitter");
  });
  it("Facebook is opended, in the new tab, by clicking on the Facebook link", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.selectSocialLink("facebook");
  });
  it("Linkedin is opended, in the new tab, by clicking on the Linkedin link", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.selectSocialLink("linkedin");
  });
});
