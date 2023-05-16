exports.up = knex => knex.schema.createTable("meals", table=> {
    table.increments("id");
    table.string("name");
    table.text("description");
    table.decimal('prices');
});


exports.down = knex => knex.schema.dropTable("meals");


