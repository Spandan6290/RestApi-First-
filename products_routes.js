const express = require("express")
const router = express.Router()
const {getAllProducts,getAllProductsTesting,getAllProductsAddtocart} = require("../controlers/products_controlers");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/addtocart").get(getAllProductsAddtocart);

module.exports = router
