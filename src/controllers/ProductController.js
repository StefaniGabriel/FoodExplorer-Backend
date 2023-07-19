const ProductService = require("../services/ProductService");   
const ProductRepository = require("../repositories/ProductRepository");


class ProductController { 


    async create(request, response){    
        const { name, category, description, prices, ingredients} = request.body;


        const productRepository = new ProductRepository();
        const productService = new ProductService(productRepository);

        const product = await productService.executeCreate({ name, category, description, prices, ingredients});

        return response.status(201).json(product);

    }


    async update(request, response){    
        const {id} = request.params;
      
        const { name, category, description, prices, ingredients } = request.body;

        const productRepository = new ProductRepository();  
        const productService = new ProductService(productRepository); 

         await productService.executeUpdate({ id, name, category, description, prices, ingredients });

        return response.status(201).json("Produto atualizado com sucesso!");
    }

    async delete(request, response){
        const { id } = request.params;

        const productRepository = new ProductRepository();  
        const productService = new ProductService(productRepository); 

        await productService.executeDelete(id);

        return response.status(201).json();
    }

    async showAll(request, response){
        const productRepository = new ProductRepository();  
        const productService = new ProductService(productRepository); 

        const product = await productService.executeFindAll();

        return response.status(200).json(product);
    }

    async showOne(request, response){
        const { id } = request.params;

        const productRepository = new ProductRepository();  
        const productService = new ProductService(productRepository); 

        const product = await productService.executeShowOne(id);

        return response.status(200).json(product);
    }

    
 

};
    module.exports = ProductController;