const knex = require("../database/knex");

class IngredientsController {
    async index(request, response) {
        const user_id = request.user.id;

        const tags = await knex("ingredients")
        .where({ meals_id })
        .groupBy("name")


        return response.json(tags);
    }
}