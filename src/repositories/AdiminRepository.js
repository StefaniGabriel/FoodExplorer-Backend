const sqliteConnection = require('../database/sqlite');
const { hash } = require("bcryptjs");

class AdiminRepository {
    async findByEmail(email){
        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM adimin WHERE email = (?)", [email])
        
        return user;
    }
    
    
    async create({name, email, password}){

        const database = await sqliteConnection()
        const hashedPassword = await hash(password, 8);
        const userId = await database.run(
            "INSERT INTO adimin (name, email, password) VALUES (?, ?, ?)", 
            [name, email, hashedPassword]);

            return { id: userId };
    }

}

module.exports = AdiminRepository;