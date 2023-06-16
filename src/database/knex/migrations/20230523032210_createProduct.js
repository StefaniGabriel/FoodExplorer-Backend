exports.up = knex => knex.schema.createTable("product", table=> {
    table.increments("id");
    table.string("name");
    table.string("category");
    table.text("description");
    table.decimal('prices');
    table.text("image");
});


exports.down = knex => knex.schema.dropTable("product");

