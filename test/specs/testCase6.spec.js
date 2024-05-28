const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("Sorting", () => {
  it("All the products were sorted, by title, in ascending order", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    const textArray = await InventoryPage.selectOfSortingInventoryItems("az");
    return textArray.every((value, index, array) => {
      if (index === 0) return true;
      return value >= array[index - 1];
    });
  });
  it("All the products were sorted, by title, in descending order", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    const textArray = await InventoryPage.selectOfSortingInventoryItems("za");
    return textArray.every((value, index, array) => {
      if (index === 0) return true;
      return value <= array[index - 1];
    });
  });
  it("All the products were sorted, by price, in ascending order", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    const textArray = await InventoryPage.selectOfSortingInventoryItems("lohi");
    return textArray.every((value, index, array) => {
      if (index === 0) return true;
      return value >= array[index - 1];
    });
  });
  it("All the products were sorted, by price, in descending order", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    const textArray = await InventoryPage.selectOfSortingInventoryItems("hilo");
    return textArray.every((value, index, array) => {
      if (index === 0) return true;
      return value <= array[index - 1];
    });
  });
});
