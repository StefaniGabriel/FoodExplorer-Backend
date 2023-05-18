const AppError = require('../utils/AppError');
class MealsService {
    constructor(mealsRepository){
        this.mealsRepository = mealsRepository;
    }

    async execute({ name, description, prices, ingredients }){
        const meal = await this.mealsRepository.findByName(name);

        if(meal){
            throw new AppError("Este prato já existe");
        }

        await this.mealsRepository.create({ name, description, prices, ingredients });
    }
}

module.exports = MealsService;