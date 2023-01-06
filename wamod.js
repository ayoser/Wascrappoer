const axios = require('axios')
const cheerio = require('cheerio')
module.exports.wamod = async () => {
const list = []
axios.get("https://fmmods.com/download-center/mega.php").then(urlResponse => {
const $ = cheerio.load(urlResponse.data)
$('div.su-button-center').each((i,element)=> {
const link = $(element)
.find("a")
.attr("href");
const data = {"link":link} 
list.push(data)
})
return list
});}
