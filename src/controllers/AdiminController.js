const AdiminRepository = require("../repositories/AdiminRepository");

const AppError = require("../utils/AppError");




class AdiminController{
   async create(request, response){
    const user = {
        name: "User test",
        email: "user@test.com",
        password: "123456"
    };
    
    const adiminRepository = new AdiminRepository();

    const checkUserExists = await adiminRepository.findByEmail(user.email);
    
    if(checkUserExists){
        throw new AppError("Este e-mail já está em uso.")
    }

    
  


    const userCreated = await adiminRepository.create(user);
   

    return response.status(201).json();
   
   }

    }

    module.exports = AdiminController;