const AppError = require("../utils/AppError");

class ProductService {
    constructor(productRepository){
        this.productRepository = productRepository; 
    }
  
    async executeCreate({ name, category, description, prices, ingredients }){

        const productExists = await this.productRepository.findByName(name);

        if(productExists){
            throw new AppError("Este prato já existe!");
        } 

        const product = await this.productRepository.create({ name, category, description, prices, ingredients });
    
        return product;

      
    }

    async executeUpdate({ id, name, category, description, prices, ingredients }) {

        const product = await this.productRepository.findById(id);

        if(!product){
            throw new AppError("Este prato não existe", 401);
        }
         
        const nameExists = await this.productRepository.findByName(name);

        if(nameExists && nameExists.id !== product.id){
            throw new AppError("Este nome já está em uso", 401);
        } 

     
        const updateProduct = await this.productRepository.update({ id, name, category, description, prices, ingredients });
      
        return updateProduct;
        
      }
    
    async executeDelete(id) {       
        const product = await this.productRepository.findById(id);

        if(!product){
            throw new AppError("Este prato não existe", 401);
        }

        await this.productRepository.delete(id);
    }    
    
    async executeShowAll(){
        const product = await this.productRepository.findAll();
        return product;               
    }

    async ExecuteShowOne(id){
        const product = await this.productRepository.showOne(id);
        return product;               
    }

}

module.exports = ProductService;