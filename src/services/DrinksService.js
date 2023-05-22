const AppError = require("../utils/AppError");

class DrinksService {
    constructor(drinksRepository){
        this.drinksRepository = drinksRepository; 
    }
  
    async executeCreate({ name, description, prices, ingredients }){

        const drinksExists = await this.mealsRepository.findByName(name);

        if(drinksExists){
            throw new AppError("Este prato já existe!");
        } 

        const drinks = await this.drinksRepository.create({ name, description, prices, ingredients });
    
        return drinks;

      
    }

    async executeUpdate({ id, name, description, prices, ingredients }) {

        const drinks = await this.drinksRepository.findById(id);
        console.log(drinks);

        if(!drinks){
            throw new AppError("Este prato não existe", 401);
        }
         
        const nameExists = await this.drinksRepository.findByName(name);

        if(nameExists && nameExists.id !== id){
            throw new AppError("Este nome já está em uso", 401);
        } 

     
        const updateDrinks = await this.drinksRepository.update({ id, name, description, prices, ingredients });
      
        return updateDrinks;
        
      }
    
    async executeDelete(id) {       
        const drinks = await this.drinksRepository.findById(id);

        if(!drinks){
            throw new AppError("Este prato não existe", 401);
        }

        await this.drinksRepository.delete(id);
    }    
    
    async executeShowAll(){
        const drinks = await this.drinksRepository.findAll();
        return drinks;               
    }

    async ExecuteShowOne(id){
        const drinks = await this.drinksRepository.showOne(id);
        return drinks;               
    }

}

module.exports = DrinksService;