
exports.up = async function(knex) {
  // create customers table with firstName, lastName, email, phone, and address
    knex.schema.createTable('customers', function(table) {
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email');
        table.string('phone').notNullable();
        table.string('address').notNullable();
        }
    );
};

exports.down = async function(knex) {
    // drop customers table
        knex.schema.dropTable('customers');
};
