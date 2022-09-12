const weedmapsItemData = require('./weedmapsItemData.json')
const fs = require('fs')

let items = []

for (let i=0; i<10; i++)
{
    let itemImg = weedmapsItemData[0].itemImg[i]
    let itemType = weedmapsItemData[0].itemType[i]
    let itemName = weedmapsItemData[0].itemName[i]
    let thcPercentage = weedmapsItemData[0].thcPercentage[i]
    let unitCost = weedmapsItemData[0].unitCost[i]

    items.push([
    {
        itemImg,
        itemType,
        itemName,
        thcPercentage,
        unitCost
    }
              ])
}

items.join('\r\n')

data = JSON.stringify(items)
fs.writeFile('./formattedWeedmapsItemData.json', data, (err) => {
    if (err) throw err
    console.log('The "data to append" was appended to the file!')
})
