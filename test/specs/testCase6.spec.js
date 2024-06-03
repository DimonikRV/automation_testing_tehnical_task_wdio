const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("Sorting", () => {
  it("All the products were sorted, by title, in ascending order", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    const textArray = await InventoryPage.selectOfSortingInventoryItems("az");
    InventoryPage.isAscSorted(textArray);
  });
  it("All the products were sorted, by title, in descending order", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    const textArray = await InventoryPage.selectOfSortingInventoryItems("za");
    InventoryPage.isDescSorted(textArray);
  });
  it("All the products were sorted, by price, in ascending order", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    const textArray = await InventoryPage.selectOfSortingInventoryItems("lohi");
    InventoryPage.isAscSorted(textArray);
  });
  it("All the products were sorted, by price, in descending order", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    const textArray = await InventoryPage.selectOfSortingInventoryItems("hilo");
    InventoryPage.isDescSorted(textArray);
  });
});
