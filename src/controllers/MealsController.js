const MealsRepository = require("../repositories/MealsRepository");
const MealsService = require("../services/MealsService");   

class MealsController {  

    async create(request, response){    
        const { name, description, prices, ingredients } = request.body;

        const mealsRepository = new MealsRepository();  
        const mealsService = new MealsService(mealsRepository); 

        await mealsService.executeCreate({ name, description, prices, ingredients });

        return response.status(201).json();

    }


    async update(request, response){    
        const { id } = request.params;
        const { name, description, prices, ingredients } = request.body;

        const mealsRepository = new MealsRepository();  
        const mealsService = new MealsService(mealsRepository); 

        mealsService.executeUpdate({ id, name, description, prices, ingredients });

        return response.status(201).json();
    }
};
    module.exports = MealsController;