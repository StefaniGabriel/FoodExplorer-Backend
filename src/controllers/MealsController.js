const MealsService = require("../services/MealsService");   
const MealsRepository = require("../repositories/MealsRepository");

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

    async delete(request, response){
        const { id } = request.params;

        const mealsRepository = new MealsRepository();  
        const mealsService = new MealsService(mealsRepository); 

        await mealsService.executeDelete(id);

        return response.status(201).json();
    }

    async showAll(request, response){
        const mealsRepository = new MealsRepository();  
        const mealsService = new MealsService(mealsRepository); 

        const meals = await mealsService.ExecuteShowAll();

        return response.status(200).json(meals);
    }

    async showOne(request, response){
        const { id } = request.params;

        const mealsRepository = new MealsRepository();  
        const mealsService = new MealsService(mealsRepository); 

        const meals = await mealsService.ExecuteShowOne(id);

        return response.status(200).json(meals);
    }
};
    module.exports = MealsController;