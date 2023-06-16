const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class ImageProductRepository {
  async findById(id) {
    const product = await knex("product").where({ id }).first();

    if (!product) {
      throw new AppError("Produto não existe!", 404);
    }

    return product;
  }

  async update({ id, image }) {
    const product = await this.findById(id);
    const diskStorage = new DiskStorage();

    if (!product) {
      throw new AppError("Produto não existe!", 404);
    }

    if (product.image) {
      await diskStorage.deleteFile(product.image);
    }

   

    const filename = await diskStorage.saveFile(image);
    product.image = filename;

    await knex("product").update({ image: filename }).where({ id });

    return product;
  }
}

module.exports = ImageProductRepository;
