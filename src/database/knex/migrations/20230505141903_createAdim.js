exports.up = knex => knex.schema.createTable("adimin", table=> {
    table.increments("id");
    table.string("name");
    table.text("email");
    table.text("password");
});


exports.down = knex => knex.schema.dropTable("adimin");

