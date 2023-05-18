const AppError = require('../utils/AppError');

class MealsService {
    constructor(mealsRepository){
        this.mealsRepository = mealsRepository; 
    }
  
    async executeCreate({ name, description, prices, ingredients }){

        const mealExists = await  this.mealsRepository.findByName(name);

        if(mealExists){
            throw new AppError("Este prato já existe!");
        } 

        const meal = await this.mealsRepository.create({ name, description, prices, ingredients });
    
        return meal;

      
    }

    async executeUpdate({ id, name, description, prices, ingredients }) {
      

        const nameExists = await  this.mealsRepository.findByName(name);

        if(nameExists){
            throw new AppError("Este prato já existe!");
        } 
      
        const updateMeals = await this.mealsRepository.update({ id, name, description, prices, ingredients });
      
        return updateMeals;
        
      }
      

}

module.exports = MealsService;