const axios = require('axios')
const cheerio = require('cheerio')
const list = []
axios.get("https://fmmods.com/download-center/mega.php").then(urlResponse => {
const $ = cheerio.load(urlResponse.data)
$('div.su-button-center').each((i,element)=> {
const link = $(element)
.find("a")
.attr("href");
const data = {"links":link} 
list.push(data)
})
console.log(list)
});
