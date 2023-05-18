const knex = require('../database/knex');

class MealsRepository {
    async create(){
        const { name, description, tags, prices } = request.body;

        const [meals_id] = await knex("meals").insert({
            name,
            description,
            prices
            
        });


        const  tagsInsert =  tags.map(name => {
            return {
                meals_id,
                name,
            }
        });

        await knex("ingredients").insert(tagsInsert);

    }

}

module.exports = MealsRepository;