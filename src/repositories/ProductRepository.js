
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class ProductRepository {
    async findByName(name) {
        const nameExists = await knex("product").where({ name }).first();

        return nameExists;
        
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

        return product;
    }

    async findById(id) {
        try{    
        const product = await knex("product").where({ id }).first();
        return product;
        } catch (error) {
            throw new AppError("Produto não encontrado", 404);
        }
    }
    
    
    async update({ id, name, category, description, prices, ingredients }) { 

       await knex("product").where({ id }).update({
            name,
            category,
            description,
            prices,
        });

        const product_id = id;

       await knex("ingredients").where({ product_id}).del();

        const ingredientsInsert = ingredients.map(name => ({        
            product_id,
            name,
        }));

        await knex("ingredients").insert(ingredientsInsert);

        return product;
    }

    async delete(id) {
        await knex("product").where({ id }).del();
    }

    async findAll() {
        const product = await knex("product").select("*");
        const ingredients = await knex("ingredients").select("*");

        return product.map(meal => {
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