const fs = require('fs')
const weedmapsProductData = require('./weedmapsProductData.json')

let prods = []

for (let i=0; i<10; i++)
{
    let dispoStoreFrontImg = weedmapsProductData[0].dispoStoreFrontImg[i]
    let dispoName = weedmapsProductData[0].dispoName[i]
    let dispoRating = weedmapsProductData[0].dispoRating[i]
    let numberOfRatings = weedmapsProductData[0].numberOfRatings[i]
    let dispoStatus = weedmapsProductData[0].dispoStatus[i]
    let dispoOpenNow = weedmapsProductData[0].dispoOpenNow[i]

    prods.push([
    {
        dispoStoreFrontImg,
        dispoName,
        dispoRating,
        numberOfRatings,
        dispoStatus,
        dispoOpenNow
    }
              ])
}

prods.join('\r\n')

data = JSON.stringify(prods)
fs.writeFile('./formattedWeedmapsProductData.json', data, (err) => {
    if (err) throw err
    console.log('The "data to append" was appended to the file!')
})