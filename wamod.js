const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const port = process.env.PORT || 3000;
app.get('/', async (req, res) => {
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
res.send(list)
});})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
