
const knex = require("../database/knex");
const AppError = require("../utils/AppError");


class ProductRepository {
   
    
    async findByName(name) {
        const product = await knex("product").where({ name }).first();
        return product;
    }

    async create({name, category, description, prices, ingredients}) {
        const product = await knex("product").insert({
            name,
            category,
            description,
            prices
        })

        const product_id = product[0];

        

        const ingredientsInsert = ingredients.map(name => ({
            product_id,
            name,
        }));

        await knex("ingredients").insert(ingredientsInsert);

        await knex("product").where({ id: product_id }).first();

        const  productInfos = await knex("product").where({ id: product_id }).first();

        return productInfos;
      
    }

    async findById(id) {
        const product = await knex("product").where({ id }).first();
        return product;
    }
    
    
    async updated({ id, name, category, description, prices, ingredients }) { 
        const product = await this.findById(id);

        if(!product){
            throw new AppError("Este prato não existe", 401);
        }

        const productExists = await this.findByName(name);

        if(productExists && productExists.id !== product.id){
            throw new AppError("Já existe um prato com este nome", 401);
        }
        

        name = name ?? product.name;
        category = category ?? product.category;
        description = description ?? product.description;
        prices = prices ?? product.prices;
        ingredients = ingredients ?? product.ingredients;
        

       const productUpdated = await knex("product").where({ id }).update({
            name,
            category,
            description,
            prices
          
        });

        const product_id = id;

        await knex("ingredients").where({ product_id }).del();

        const ingredientsInsert = ingredients.map(name => ({        
            product_id,
            name,
        }));

        await knex("ingredients").insert(ingredientsInsert);

       return productUpdated;

    }

    async delete(id) {
        await knex("product").where({ id }).del();
    }

    async findAll() {
        const products = await knex("product").select("*");
        const ingredients = await knex("ingredients").select("*")
        

        return products.map(product => {
            const productIngredients = ingredients.filter(ingredient => ingredient.product_id === product.id);
            return {
                ...product,
                ingredients: productIngredients,
            };
        });                         
        }   
    
    
    async showOne(id) {
        const product = await knex("product").select("*").where({ id }).first();
        const ingredients = await knex("ingredients").select("*").where({ product_id: id });

        return {
            ...product,
            ingredients
        }                         
        } 


    
        
    }


module.exports = ProductRepository;