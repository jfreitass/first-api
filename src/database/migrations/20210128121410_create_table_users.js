
exports.up = function(knex) {
    return knex.schema.createTable('tblusers', function(table){
        table.increments('iduser').primary()
        table.string('name',30).notNullable()
        table.integer('idade',3).notNullable()
        table.string('email',35).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tblusers')
};
