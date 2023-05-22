exports.up = knex => knex.schema.createTable("Ingredients", table => {
    table.increments("id");
    table.text("name").notNullable();

    table.integer("meals_id").references("id").inTable("meals").onDelete("CASCADE");
    table.integer("drinks_id").references("id").inTable("drinks").onDelete("CASCADE");



}) 

exports.down = knex => knex.schema.dropTable("Ingredients");