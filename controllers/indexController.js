const path = require("path");
const fs = require("fs");

const databasePath = path.join(__dirname, "../db/database.json");
const database = JSON.parse(fs.readFileSync(databasePath, "utf-8"))

module.exports = {
    index:  function(req, res, next) {
        res.render('index', {
            title: "Pimienta & Sal",
            products: database
        });
      }
}