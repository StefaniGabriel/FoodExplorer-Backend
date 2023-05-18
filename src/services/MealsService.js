const AppError = require('../utils/AppError');
class MealsService {
    constructor(mealsRepository){
        this.mealsRepository = mealsRepository;
    }

    async execute({ name, ingredients, description, prices, id }){
        const meal = await this.mealsRepository.findByName(name);

        if(meal){
            throw new AppError("Este prato já existe");
        }

        await this.mealsRepository.create({ name, ingredients, description, prices, id});
    }
}

module.exports = MealsService;