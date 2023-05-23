const { Router } = require("express");

const ProductController = require("../controllers/ProductController");

const productRoutes = Router();

const productController = new ProductController(); 


productRoutes.post("/", productController.create);
productRoutes.put("/:id", productController.update);
productRoutes.delete("/:id", productController.delete);
productRoutes.get("/", productController.showAll);
productRoutes.get("/:id", productController.showOne);


module.exports = productRoutes;