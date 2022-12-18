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

test('clicking the Draw button displays the div with id = “choices”', async () =>{
    const choices = await driver.findElement(By.id('choices'))
    const displayed2 = await choices.isDisplayed()
    expect(displayed2).toBe(true)
})

test('clicking an “Add to Duo” button displays the div with id = “player-duo”', async () =>{
    const playerDuo2 = await driver.findElement(By.id('player-duo'))
    const displayed3 = await playerDuo2.isDisplayed()
    expect(displayed3).toBe(true)
})