exports.up = knex => knex.schema.createTable("drinks", table=> {
    table.increments("id");
    table.string("name");
    table.text("description");
    table.decimal('prices');
});


exports.down = knex => knex.schema.dropTable("drinks");

