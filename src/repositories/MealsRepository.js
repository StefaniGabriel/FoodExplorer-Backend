const knex = require('../database/knex');

class MealsRepository {
    async create({name, prices, ingredients}){
        const { title, description, ingredients, prices } = request.body;

        const [meals_id] = await knex("meals").insert({
            title,
            description,
            ingredients,
            prices
            
        });


        const  ingredientsInsert =  ingredients.map(name => {
            return {
                meals_id,
                name,
            }
        });

        await knex("ingredients").insert(ingredientsInsert);

    }

}

module.exports = MealsRepository;