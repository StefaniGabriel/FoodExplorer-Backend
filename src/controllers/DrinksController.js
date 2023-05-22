const DrinksRepository = require("../repositories/DrinksRepository");
const DrinksService = require("../services/DrinksService");   

class DrinksController {  

    async create(request, response){    
        const { name, description, prices, ingredients } = request.body;

        const drinksRepository = new DrinksRepository();  
        const drinksService = new DrinksService(drinksRepository); 

        await drinksService.executeCreate({ name, description, prices, ingredients });

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
    module.exports = DrinksController;