const { Router } = require("express");

const ProductController = require("../controllers/ProductController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");

const productRoutes = Router();

const productController = new ProductController(); 


productRoutes.post("/",ensureAuthentication, productController.create);
productRoutes.put("/:id",ensureAuthentication, productController.update);
productRoutes.delete("/:id",ensureAuthentication, productController.delete);
productRoutes.get("/", productController.showAll);
productRoutes.get("/:id", productController.showOne);


module.exports = productRoutes;