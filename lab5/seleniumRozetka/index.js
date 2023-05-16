const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

const searchRozetka = async () => {
    let driver = await new Builder().forBrowser('chrome').build();


    try {
        await driver
            .manage()
            .window()
            .maximize();
        await driver.manage().deleteAllCookies();

        await driver.get('https://www.rozetka.com.ua/ua/');
        if (await driver.findElement(By.xpath("//input[@placeholder='Я шукаю...']"))) {
            await driver.findElement(By.xpath("//input[@placeholder='Я шукаю...']")).click();
            //driver.sleep(8000);
            await driver.findElement(By.xpath('//button[text()=" Знайти "]')).click();
           // console.log("FOUND SEARCH!");
            await driver.findElement(By.className('search-form__input ng-pristine ng-valid ng-touched')).sendKeys("Samsung Galaxy M33");
            //driver.sleep(8000);
            await driver.findElement(By.className('button button_color_green button_size_medium search-form__submit ng-star-inserted')).click();
            //driver.sleep(8000);
            await driver.findElement(By.xpath('//a[@href="https://rozetka.com.ua/ua/samsung-sm-m336bzngsek/p340280239/"]')).click();
            //await driver.findElement(By.xpath('//span[text()=" Мобільний телефон Samsung Galaxy M33 5G 6/128GB Brown (SM-M336BZNGSEK) "]')).click();
            //driver.sleep(8000);
            await driver.findElement(By.className('buy-button button button--with-icon button--green button--medium buy-button--tile ng-star-inserted')).click();
        } else {
            console.log("SEARCH NOT FOUND!");
        }

    } catch (err) {
        console.error(err);
    } finally {
        console.log('complete rozetka search!');
        driver.quit();
    }
};

searchRozetka();