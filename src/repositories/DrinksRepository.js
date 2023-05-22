
const knex = require("../database/knex");

class DrinksRepository {
    async findByName(name) {
        const nameExists = await knex("drinks").where({ name }).first();

        return nameExists;
        
    }

    async create({name, description, prices, ingredients}) {
        const drinks = await knex("drinks").insert({
            name,
            description,
            prices
        });

        const drinks_id = drinks[0];

        const ingredientsInsert = ingredients.map(name => ({
            drinks_id,
            name,
        }));

        await knex("ingredients").insert(ingredientsInsert);

        return drinks;
    }

    async findById(id) {    
        const drinks = await knex("meals").where({ id }).first();
        return drinks;
    }
    
    
    async update({ id, name, description, prices, ingredients }) { 

       await knex("drinks").where({ id }).update({
            name,
            description,
            prices,
        });

        const drinks_id = id;

       await knex("ingredients").where({ drinks_id}).del();

        const ingredientsInsert = ingredients.map(name => ({        
            drinks_id,
            name,
        }));

        await knex("ingredients").insert(ingredientsInsert);

        return drinks;
    }

    async delete(id) {
        await knex("drinks").where({ id }).del();
    }

    async findAll() {
        const drinks = await knex("drinks").select("*");
        const ingredients = await knex("ingredients").select("*");

        return drinks.map(meal => {
            const mealIngredients = ingredients.filter(ingredient => ingredient.drinks_id === drinks.id);
            return {
                ...drinks,
                ingredients: mealIngredients,
            };
        });                         
        }   
        
  
    
    async showOne(id) {
        const drinks = await knex("drinks").select("*").where({ id }).first();
        const ingredients = await knex("ingredients").select("*").where({ drinks_id: id });

        return {
            ...drinks,
            ingredients
        }                         
        } 
        
    }


module.exports = DrinksRepository;