
exports.up = function(knex) {
  // create customers table with firstName, lastName, email, phone, and address
    knex.schema.createTable('customers', function(table) {
        table.increments('id').primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('email');
        table.string('phone').notNullable();
        table.string('address').notNullable();
        }
    );
};

exports.down = function(knex) {
    // drop customers table
        knex.schema.dropTable('customers');
};
