
const UserRepository = require('../repositories/UserRepository');
const UserService = require('../services/UserService');

async function createAdminAccount() {
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
  
    const adminName = "Food Delivery Admin";
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminType = "admin";
  
    try {
      const existingAdmin = await userRepository.findByType(adminType);
      if (existingAdmin) {
        console.log("Admin account already exists.");
        return;
      }
  
      await userService.execute({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
        type: adminType,
      });
  
      console.log("Admin account created successfully.");
    } catch (error) {
      console.error("Error creating admin account:", error);
    }
  }
  
  module.exports = createAdminAccount;
