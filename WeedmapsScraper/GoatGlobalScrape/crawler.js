//import fs from 'fs'
const puppeteer = require('puppeteer')
const fs = require('fs')
const { scrollPageToBottom } = require('puppeteer-autoscroll-down')

let dispoData = []
const baseUrl = 'https://weedmaps.com/'
const menuUrl = 'https://weedmaps.com/dispensaries/dr-greenthumb-humboldt'

async function scrapeDispos(url)
{
    // load the page
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto(menuUrl)
    await page.click('body > div.modal-portal > div > div > div > div:nth-child(2) > div > div > div > div.global-age-gate__ButtonContainer-sc-1s12x61-2.juJtsI > button.button__Button-sc-1lygdz3-0.global-age-gate__ApproveButton-sc-1s12x61-4.bmyAxx.hEjHRB')

    // scroll to bottom to put all dispos into view
    const results = await page.$$('#content')
    for (let i = 0; i < results.length; i++)
    {
        const result = await (await results[i].getProperty('innerText')).jsonValue()
        console.log(result)
    }
    await page.waitForSelector('#content')

    // storing product data
    const itemImg = await page.$$eval('#menu-tab-wrapper > ol > li > div.styles__ImgWrapper-sc-65n7at-4.dDccxY > div > div > img', itemImg => itemImg.map(img => img.src))
    const itemType = await page.$$eval('#menu-tab-wrapper > ol > li > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__CardContent-sc-65n7at-5.ifUzlM.dtEVmG.iSSFqT > a > div > span', itemType => itemType.map(span => span.textContent))
    const itemName = await page.$$eval('#menu-tab-wrapper > ol > li > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__CardContent-sc-65n7at-5.ifUzlM.dtEVmG.iSSFqT > a > div > div', itemName => itemName.map(div => div.textContent))
    const thcPercentage = await page.$$eval('#menu-tab-wrapper > ol > li > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__CardContent-sc-65n7at-5.ifUzlM.dtEVmG.iSSFqT > a > div > span > div > div', thcPercentage => thcPercentage.map(div => div.textContent))
    const unitCost = await page.$$eval('#menu-tab-wrapper > ol > li > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__CardContent-sc-65n7at-5.ifUzlM.dtEVmG.iSSFqT > div > div', unitCost => unitCost.map(span => span.textContent))

    await browser.close()

    dispoData.push({
        itemImg,
        itemType,
        itemName,
        thcPercentage,
        unitCost
    })
            // go to next pages})

    // transform array into json string
    const json = JSON.stringify(dispoData, null, 2)
    console.log(json)

    // write json file
    fs.writeFile('./weedmapsItemData.json', json, err => {
        if (err)
        {
            console.log('Error writing file', err)
        }
        else
        {
            console.log('successfully wrote file')
        }
    })
    
}

scrapeDispos(menuUrl)

