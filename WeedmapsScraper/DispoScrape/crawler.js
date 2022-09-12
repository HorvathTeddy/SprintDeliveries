//import fs from 'fs'
const puppeteer = require('puppeteer')
const fs = require('fs')
const { scrollPageToBottom } = require('puppeteer-autoscroll-down')

let dispoData = []

async function scrapeDispos()
{
    // load the page
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://weedmaps.com/listings/in/united-states/california/eureka')

    // scroll to bottom to put all dispos into view
    await page.click('#__next > div.styles__BannerContainer-sc-ctut8x-0.bmiyQI > div > button')
    const selector = '#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg'
    const resultList = await page.waitForSelector('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg > div')
    const scrollableSection = await page.waitForSelector('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg')
    const results = await page.$$('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg > div > ul > li:nth-child(1) > div:nth-child(1)')
    for (let i = 0; i < results.length; i++)
    {
        const result = await (await results[i].getProperty('innerText')).jsonValue()
        console.log(result)
    }
    await page.waitForSelector('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg > div > div:nth-child(7) > ul > li:nth-child(1) > a')

    // storing product data
    const dispoStoreFrontImg = await page.$$eval('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg > div > ul > li > div > div > div > a > div > div.avatar__AvatarStyled-sc-1h8176t-0.jKXrvc > div > div > img', allDispoStoreFrontImg => allDispoStoreFrontImg.map(img => img.src))
    const dispoName = await page.$$eval('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg > div > ul > li > div > div > div > a > div > div.base-card__Info-sc-1fhygl1-4.kdGzny > div.text__Text-sc-fif1uk-0.base-card__Title-sc-1fhygl1-5.eLnWhp.clqklC', allDispoName => allDispoName.map(div => div.textContent))
    const dispoRating = await page.$$eval('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg > div > ul > li > div > div > div > a > div > div.base-card__Info-sc-1fhygl1-4.kdGzny > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.ifUzlM.dtEVmG > div > div.text__Text-sc-fif1uk-0.rating__RatingValue-sc-12pds58-1.hEoFPX.fuwkVS', allDispoRatings => allDispoRatings.map(div => div.textContent))
    const numberOfRatings = await page.$$eval('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg > div > ul > li > div > div > div > a > div > div.base-card__Info-sc-1fhygl1-4.kdGzny > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.ifUzlM.dtEVmG > div > div.text__Text-sc-fif1uk-0.rating__Count-sc-12pds58-2.gAgmtV.gwkZLG', allNumberOfRatings => allNumberOfRatings.map(div => div.textContent))
    const dispoStatus = await page.$$eval('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg > div > ul > li > div > div > div > a > div > div.base-card__Info-sc-1fhygl1-4.kdGzny > span', allDispoStatus => allDispoStatus.map(span => span.textContent))
    const dispoOpenNow = await page.$$eval('#content > div > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styles__MapWrapper-sc-ik4t6d-5.AacKL.dtEVmG.fKerFj > div.styles__ListWrapper-sc-ik4t6d-6.iaCEMB > div.drawer__StyledDrawer-sc-1ai344x-0.fMXSLN.map-content-tray__ResponsiveDrawer-sc-1jlvdww-0.iowzoi > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.map-content-tray-scroll-container__ScrollContainerOuter-sc-1y0hz3v-0.hELklb.dtEVmG.bMWVKg > div > ul > li > div > div > div > a > div > div.base-card__Info-sc-1fhygl1-4.kdGzny > div.src__Box-sc-1sbtrzs-0.src__Flex-sc-1sbtrzs-1.styled-components__ChipRow-sc-1e5myvf-9.fRkjTv.dtEVmG.gvovNr > span', allDispoOpenNow => allDispoOpenNow.map(span => span.textContent))

    await browser.close()

    dispoData.push({dispoStoreFrontImg, dispoName, dispoRating, numberOfRatings, dispoStatus, dispoOpenNow})

    // transform array into json string
    const json = JSON.stringify(dispoData, null, 2)
    console.log(json)

    // write json file
    fs.writeFile('./weedmapsProductData.json', json, err => {
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

scrapeDispos()

