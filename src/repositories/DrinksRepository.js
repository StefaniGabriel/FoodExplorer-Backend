
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
        const drinks = await knex("drinks").where({ id }).first();
        return drinks;
    }
    
    
    async update({ id, name, description, prices, ingredients }) { 

       const drinks =await knex("drinks").where({ id }).update({
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
        const drinks = await knex('drinks').select('*');
      
        const ingredients = await knex
          .select('ingredients.*')
          .from('ingredients')
          .join('drinks', 'ingredients.drinks_id', '=', 'drinks.id')
          .where('drinks.id', 'ingredients.drinks_id');
      
        const drinksWithIngredients = drinks.map((drink) => {
          const drinkIngredients = ingredients.filter(
            (ingredient) => ingredient.drinks_id === drink.id
          );
          return {
            ...drink,
            ingredients: drinkIngredients,
          }
        
        });

    
      
        return drinksWithIngredients;
      }
      
    
    async show(id) {
        const drinks = await knex("drinks").select("*").where({ id }).first();
        const ingredients = await knex("ingredients").select("*").where({ drinks_id: id });

        return {
            ...drinks,
            ingredients
        }                         
        } 
        
    }


module.exports = DrinksRepository;