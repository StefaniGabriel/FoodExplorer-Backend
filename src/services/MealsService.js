

class MealsService {
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute({name, prices, description, ingredients}) {

        const mealsCreated =  await this.mealsRepository.create({ name, ingredients, prices, description });
        
        return mealsCreated;

   

    }

}

module.exports = MealsService;