exports.up = knex => knex.schema.createTable("favorite", table=> {
    table.increments("id");
    table.string("product_id");
    table.string("user_id");
    table.foreign("product_id").references("product.id");
    table.foreign("user_id").references("users.id");
});


exports.down = knex => knex.schema.dropTable("favorite");
