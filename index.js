'use scrict'
const webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build()
const request = require('request');
var By = webdriver.By
export default class seleniumInstagram {

    constructor(login, senha) {
        this._login = login
        this._senha = senha
        this.driver = driver
    }
    async sleep(interval){
        return await new Promise(function (resolve, reject) {
    
            setTimeout(async () => {
                resolve(1)
            },interval)
        })
    }
    async login(timeawait = 5000){
        await this.driver.get("https://www.instagram.com/accounts/login").then(async ()=> {
            setTimeout( async () => {
                var username = await this.driver.findElement(By.xpath("//input[@name='username']"))
                var password = await this.driver.findElement(By.xpath("//input[@name='password']"))
                await username.click()
                await username.clear()
                await username.sendKeys(this._login)
                await password.click()
                await password.clear()
                await password.sendKeys(this._senha)
                setTimeout(async () => {

                    await password.sendKeys(webdriver.Key.RETURN)
                    setTimeout(async() => {
                        await this.abreSorteio()

                    },timeawait)
                },500)
            }, timeawait);

        })
    }
}