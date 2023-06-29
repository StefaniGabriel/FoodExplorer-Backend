const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");

const ProductController = require("../controllers/ProductController");
const ImageProductController = require("../controllers/ImageProductController");

const productRoutes = Router();
const upload = multer(uploadConfig.upload);


const productController = new ProductController(); 
const imageProductController = new ImageProductController();


productRoutes.post("/",productController.create);
productRoutes.put("/:id", productController.update);
productRoutes.delete("/:id", productController.delete);
productRoutes.get("/", productController.showAll);
productRoutes.get("/:id", productController.showOne);
productRoutes.patch("/image/:id", upload.single("image"), imageProductController.update);



module.exports = productRoutes;