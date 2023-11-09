const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

axios
  .get("https://eloick.fr/")
  .then((response) => {
    const $ = cheerio.load(response.data);
    const data = [];

    $("p, h1, h2, label, button").each((i, element) => {
      data.push({
        tag: element.name,
        text: $(element).text(),
      });
    });

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
  })
  .catch(console.error);
