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

        const drinksRepository = new DrinksRepository();  
        const drinksService = new DrinksService(drinksRepository); 

        drinksService.executeUpdate({ id, name, description, prices, ingredients });

    
        return response.status(201).json();
    }

    async delete(request, response){
        const { id } = request.params;

        const drinksRepository = new DrinksRepository();  
        const drinksService = new DrinksService(drinksRepository); 

        await drinksService.executeDelete(id);

        return response.status(201).json("Deleteado com sucesso!");
    }

    async findAll(response){
        const drinksRepository = new DrinksRepository();  
        const drinksService = new DrinksService(drinksRepository); 

        const drinks = await drinksService.executeFindAll();

        return response.json(drinks);
    }

    async show(request, response){
        const { id } = request.params;

        const drinksRepository = new DrinksRepository();  
        const drinksService = new DrinksService(drinksRepository); 

        const drinks = await drinksService.executeShow(id);

        return response.status(200).json(drinks);
    }
};
    module.exports = DrinksController;