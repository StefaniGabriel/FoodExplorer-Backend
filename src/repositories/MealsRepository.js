
const knex = require("../database/knex");

class MealsRepository {
    async findByName(name) {
        const meal = await knex("meals").where({ name }).first();

        return meal;
        
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
    
    
    
    
    async update({ id, name, description, prices, ingredients }) { 
     
        const meal = await knex("meals").where({ id }).first();

        if(!meal){
            throw new AppError("Prato não encontrado!");
            
        }


       await knex("meals").where({ id }).update({
            name,
            description,
            prices,
        });



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