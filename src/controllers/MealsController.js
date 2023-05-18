const MealsService = require("../services/MealsService");
const MealsRepository = require("../repositories/MealsRepository");


class MealsController{
    async create(request, response){
        const { name, description, prices, ingredients } = request.body;

        const mealsRepository = new MealsRepository();
        const mealsService = new MealsService(mealsRepository);

        await mealsService.execute({ name, description, prices, ingredients});

        return response.status(201).json(mealsService);
}

    async update(request, response){
        const {id} = request.params;
        const {name, prices, description, ingredients } = request.body;
        
        const mealsRepository = new MealsRepository();
        const mealsService = new MealsService(mealsRepository);

        await mealsService.execute({ name, ingredients, description, prices, id})
    }
}

module.exports = MealsController;