import axios from 'axios';
import * as cheerio from 'cheerio';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

let htmlContent;

await axios.get(url).then((response) => {
  htmlContent = response.data;
});

const $ = cheerio.load(htmlContent);

$('a').each((i, elem) => {
  console.log($(elem).find('img').attr('src'));
});
