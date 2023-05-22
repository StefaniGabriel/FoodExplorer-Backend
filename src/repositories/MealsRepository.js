
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MealsRepository {
    async findByName(name) {
        const nameExists = await knex("meals").where({ name }).first();

        return nameExists;
        
    }

    async create({name, description, prices, ingredients}) {
        const meal = await knex("meals").insert({
            name,
            description,
            prices
        })

        const meals_id = meal[0];

        const ingredientsInsert = ingredients.map(name => ({
            meals_id,
            name,
        }));

        await knex("ingredients").insert(ingredientsInsert);

        return meal;
    }

    async findById(id) {    
        const meal = await knex("meals").where({ id }).first();
        return meal;
    }
    
    
    async update({ id, name, description, prices, ingredients }) { 

        const meal = await knex("meals").where({ id }).first();

       await knex("meals").where({ id }).update({
            name,
            description,
            prices,
        });

        const meals_id = meal[0]

       await knex("ingredients").where({ meals_id: id }).del();

        const ingredientsInsert = ingredients.map(name => ({        
            meals_id: id,
            name,
        }));

        await knex("ingredients").insert(ingredientsInsert);

        return meal;
    }


  
}

module.exports = MealsRepository;