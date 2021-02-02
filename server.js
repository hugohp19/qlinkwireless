const express = require("express");
let fs = require('file-system');
let os = require("os");
let path = require('path');
const app = express();
let apiRouter = express.Router();
const PORT = process.env.PORT || 5628;
const uuid = require('uuid/v4');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.get('/products', function (req, res) {
    fs.readFile(__dirname + '/API/products.json', (err, data) => {
        if (err) throw err;
        res.header("Access-Control-Allow-Origin", "*");
        let candidate = JSON.parse(data);
        res.json(candidate);
    });
});

app.get('/product/:productID', function (req, res) {
    fs.readFile(__dirname + '/API/productDetails.json', (err, data) => {
        if (err) throw err;
        res.header("Access-Control-Allow-Origin", "*");

        let products = JSON.parse(data);
        let reCapIds = req.params.productID.charAt(0) + req.params.productID.slice(1);
        let items = products.filter(item => item.ProductId == reCapIds);
        res.json(items);
    });
});


app.listen(PORT, () => {
    console.log("Server is listening on port:"+ PORT);
  });
