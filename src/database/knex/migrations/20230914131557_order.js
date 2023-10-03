exports.up = knex => knex.schema.createTable("orders", table=> {
    table.increments("id");
    table.string("user_id");
    table.string("product_id");
    table.string("quantity");
    table.string("total");
    table.foreign("product_id").references("product.id");
    table.foreign("user_id").references("users.id");
}
);

exports.down = knex => knex.schema.dropTable("orders");

