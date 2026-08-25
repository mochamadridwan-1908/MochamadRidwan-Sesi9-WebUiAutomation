const { Builder } = require("selenium-webdriver");
const assert = require("assert");

describe("website belajar bareng", function () {

it("Should login and add user successfully", async function () {

const driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://belajar-bareng.onrender.com");

    let username = await driver.findElement({css: 'input[placeholder="Username"]'});
    let password = await driver.findElement({css: 'input[placeholder="Password"]'});
    let loginButton = await driver.findElement({css: 'button[data-testid="login-button"]'});

    await username.click();
    await username.sendKeys("admin");
    await password.click();
    await password.sendKeys("admin");
    await loginButton.click();

    let title = await driver.getTitle()
    assert.strictEqual(title, "User Management")

        await driver.sleep(2000);

   await driver.get("https://belajar-bareng.onrender.com/add");

        let usernameAddUser = await driver.findElement({css: 'input[placeholder="Username"]'});
        let age = await driver.findElement({css: 'input[placeholder="Age"]'});
        let submitButton = await driver.findElement({css: 'button[data-testid="submit-button"]'});

        let addusername ="mochRidwan"
        await usernameAddUser.sendKeys(addusername);
        await age.sendKeys("26");

        await submitButton.click();

        await driver.sleep(1000);

     let expectedAlert =
      `User successfully added, Hi ${addusername}!`;

     let successMessage = await driver.findElement({
      xpath: `//*[contains(text(), 'User successfully added')]`});

     let alertText = await successMessage.getText();
      assert.strictEqual(alertText, expectedAlert);
 
 
   await driver.quit();
});
});