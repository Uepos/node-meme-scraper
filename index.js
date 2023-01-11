import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

const htmlContent = fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
)
  //In this line, we're waiting to receive the response from the  web server and converting it to text format:

  .then((res) => res.text())

  //Here we're waiting for the result of the previous conversion and printing it to the console:

  .then((text) => console.log(text));

console.log(htmlContent);
