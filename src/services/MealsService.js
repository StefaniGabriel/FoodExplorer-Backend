const AppError = require("../utils/AppError");

class MealsService {
    constructor(mealsRepository){
        this.mealsRepository = mealsRepository; 
    }
  
    async executeCreate({ name, description, prices, ingredients }){

        const mealExists = await this.mealsRepository.findByName(name);

        if(mealExists){
            throw new AppError("Este prato já existe!");
        } 

        const meal = await this.mealsRepository.create({ name, description, prices, ingredients });
    
        return meal;

      
    }

    async executeUpdate({ id, name, description, prices, ingredients }) {

        const meals = await this.mealsRepository.findById(id);
        console.log(meals);

        if(!meals){
            throw new AppError("Este prato não existe", 401);
        }
         
        const nameExists = await this.mealsRepository.findByName(name);

        if(nameExists && nameExists.id !== id){
            throw new AppError("Este nome já está em uso", 401);
        } 

     
        const updateMeals = await this.mealsRepository.update({ id, name, description, prices, ingredients });
      
        return updateMeals;
        
      }
    
    async executeDelete(id) {       
        const meals = await this.mealsRepository.findById(id);

        if(!meals){
            throw new AppError("Este prato não existe", 401);
        }

        await this.mealsRepository.delete(id);
    }    
    
    async executeShowAll(){
        const meals = await this.mealsRepository.findAll();
        return meals;               
    }

    async ExecuteShowOne(id){
        const meals = await this.mealsRepository.showOne(id);
        return meals;               
    }

}

module.exports = MealsService;