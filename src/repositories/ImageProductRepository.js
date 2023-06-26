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
    const diskStorage = new DiskStorage();
    const product = await this.findById(id);
  

    if (!product) {
      throw new AppError("Produto não existe!", 404);
    }

    const filename = await diskStorage.saveFile(image);
    product.image = filename;

    await knex("product").update({ image: filename }).where({ id });

    return product;
  }
}

module.exports = ImageProductRepository;
