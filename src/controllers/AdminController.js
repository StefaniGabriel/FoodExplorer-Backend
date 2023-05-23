const UserController = require('./UserController');


class AdminController extends UserController {
    async userAdmin() {
        const userAdminCreate = {
            name: 'admin',
            email: 'adimin@email.com',
            password: 'admin',
            type: 'admin'
        }

        const userController = new UserController();
        const userAdmin = await userController.create(userAdminCreate);

        return userAdmin;



    }
}
      
    

module.exports = AdminController;