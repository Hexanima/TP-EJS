const path = require("path");
const fs = require("fs");

const databasePath = path.join(__dirname, "../db/database.json");
const database = JSON.parse(fs.readFileSync(databasePath, "utf-8"))

module.exports = {
    details:  function(req, res, next) {
        let product = database.find(product => product.id === Number(req.params.id))
        res.render('detalleMenu', {
            product,
            products: database
        });
      }
}