const AppError = require("../utils/AppError");

class ProductService {
    constructor(productRepository){
        this.productRepository = productRepository; 
    }
  
    async executeCreate({ name, category, description, prices, ingredients }){

         await this.productRepository.findByName(name);

        const product = await this.productRepository.create({ name, category, description, prices, ingredients });
    
        return product;

      
    }

    async executeUpdate({response ,id, name, category, description, prices, ingredients }) {
        const product = await this.productRepository.findById(id);

        if(!product){
            throw new AppError("Este prato não existe", 401);
        }

        const nameAlreadyExists = await this.productRepository.findByName(name);
       

        if(nameAlreadyExists){
            if(nameAlreadyExists.id !== id){
                throw new AppError("Já existe um prato com este nome", 401);
            }  
        } 

        await this.productRepository.updated({ id, name, category, description, prices, ingredients });

        return product;
      }
    
    async executeDelete(id) {       
        const product = await this.productRepository.findById(id);

        if(!product){
            throw new AppError("Este prato não existe", 401);
        }

        await this.productRepository.delete(id);
    }    
    
    async executeFindAll(){
        const product = await this.productRepository.findAll();
        return product;               
    }

    async executeShowOne(id){
        const product = await this.productRepository.showOne(id);
        return product;               
    }

}

module.exports = ProductService;