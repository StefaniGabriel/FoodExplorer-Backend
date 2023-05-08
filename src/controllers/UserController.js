const UserRepository = require("../repositories/UserRepository");
const UserService = require("../services/UserService");

class UserController {
    async create(request, response){
        const {name, email, password} = request.body;

    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    
    await userService.execute({ name, email, password });


    return response.status(201).json();
}
}

module.exports = UserController;