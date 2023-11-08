const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

axios
  .get("https://website.com")
  .then((response) => {
    const $ = cheerio.load(response.data);
    const data = {};

    $("p, h1, h2").each((i, element) => {
      data[i] = $(element).text();
    });

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
  })
  .catch(console.error);
