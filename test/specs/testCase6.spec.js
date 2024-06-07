import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";

describe("Sorting", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("All the products were sorted, by title, in ascending order", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    const textArray = await inventoryPage.selectOfSortingInventoryItems("az");
    inventoryPage.isAscSorted(textArray);
  });
  it("All the products were sorted, by title, in descending order", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    const textArray = await inventoryPage.selectOfSortingInventoryItems("za");
    inventoryPage.isDescSorted(textArray);
  });
  it("All the products were sorted, by price, in ascending order", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    const textArray = await inventoryPage.selectOfSortingInventoryItems("lohi");
    inventoryPage.isAscSorted(textArray);
  });
  it("All the products were sorted, by price, in descending order", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    const textArray = await inventoryPage.selectOfSortingInventoryItems("hilo");
    inventoryPage.isDescSorted(textArray);
  });
});
