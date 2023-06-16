const UserRepository = require("../repositories/UserRepository");
const UserService = require("../services/UserService");

class UserController {
    async create(request, response){
        const {name, email, password, type} = request.body;

    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    
    await userService.execute({ name, email, password, type });


    return response.status(201).json();

   
}


}
module.exports = UserController;