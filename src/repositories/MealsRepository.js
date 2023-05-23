
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

       await knex("meals").where({ id }).update({
            name,
            description,
            prices,
        });

        const meals_id = id;

       await knex("ingredients").where({ meals_id}).del();

        const ingredientsInsert = ingredients.map(name => ({        
            meals_id,
            name,
        }));

        await knex("ingredients").insert(ingredientsInsert);

        return meal;
    }

    async delete(id) {
        await knex("meals").where({ id }).del();
    }

    async findAll() {
        const meals = await knex("meals").select("*");
        const ingredients = await knex("ingredients").select("*");

        return meals.map(meal => {
            const mealIngredients = ingredients.filter(ingredient => ingredient.meals_id === meal.id);
            return {
                ...meal,
                ingredients: mealIngredients,
            };
        });                         
        }   
        
  
    
    async showOne(id) {
        const meals = await knex("meals").select("*").where({ id }).first();
        const ingredients = await knex("ingredients").select("*").where({ meals_id: id });

        return {
            ...meals,
            ingredients
        }                         
        } 
        
    }


module.exports = MealsRepository;