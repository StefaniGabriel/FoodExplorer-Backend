const MealsService = require("../services/MealsService");
const MealsRepository = require("../repositories/MealsRepository");


class MealsController{
    async create(request, response){
        const {name, prices, description, ingredients} = request.body;
        
        const mealsRepository = new MealsRepository();
        const mealsService = new MealsService(mealsRepository);

        await mealsService.execute({ name, ingredients, description, prices})


        return response.status(201).json();
}

}

module.exports = MealsController;