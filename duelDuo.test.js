const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const builder = new webdriver.Builder().forBrowser('chrome');
const {By} = require('selenium-webdriver');
const chromeOptions = new chrome.Options();
chromeOptions.setChromeBinaryPath("C:/Program Files/Google/Chrome/Application/chrome.exe");
builder.setChromeOptions(chromeOptions);
const driver = builder.build();


// import { Builder, Capabilities, By } from "selenium-webdriver"

// require('chromedriver')

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})