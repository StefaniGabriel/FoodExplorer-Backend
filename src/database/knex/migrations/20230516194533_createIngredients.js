exports.up = knex => knex.schema.createTable("Ingredients", table => {
    table.increments("id");
    table.text("name").notNullable();

    table.integer("product_id").references("id").inTable("product").onDelete("CASCADE");

}) 

exports.down = knex => knex.schema.dropTable("Ingredients");