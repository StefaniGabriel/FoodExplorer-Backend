
const knex = require("../database/knex");

class MealsRepository {
    async findByName(name) {
        const meal = await knex("meals").where({ name }).first();

        return meal;
        
    }

    async create(request) {
        const { name, description, ingredients, prices } = request.body;

        const mealsInsert = {
            name,
            description,
            prices
        }

        const insertedIds = await knex("meals").insert(mealsInsert);

        const meals_id = insertedIds[0];

        const ingredientsInsert = ingredients.map(name => ({
            meals_id,
            name,
        }));

        await knex("ingredients").insert(ingredientsInsert);

        return mealsInsert;
    }



    async update(){ 
        const { name, description, ingredients, prices } = request.body;
        const { id } = request.params;

        await knex("meals").update({
            name,
            description,
            prices
        }).where({ id });

        const  ingredientsInsert =  ingredients.map(name => {
            return {
                meals_id: id,
                name,
            }
        });

        await knex("ingredients").insert(ingredientsInsert);
    }

}

module.exports = MealsRepository;