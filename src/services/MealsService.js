

class MealsService {
    constructor(mealsRepository){
        this.mealsRepository = mealsRepository;
    }

    async execute({name, prices, description, ingredients}) {

        const mealsCreated =  await this.mealsRepository.create({ name, ingredients, prices, description });
        
        return mealsCreated;

   

    }

    async updateMeals(){
            
    }

}

module.exports = MealsService;