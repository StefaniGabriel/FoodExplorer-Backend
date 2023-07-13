const knex = require('../database/knex');

class UserRepository {

    async findByEmail(email){
       
        const user = await knex("users").where({ email }).first();
        
        return user;
    }

    async create({name, email, password, type}){
        
        const userId = await knex("users").insert({ name, email, password, type});

        return userId;
    }

    async findByType(type){
        const user = await knex("users").where({ type }).first();

        return user;
    }
}

module.exports = UserRepository;