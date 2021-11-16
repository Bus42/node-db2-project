const mockData = require('../mock_data/CUSTOMERS_MOCK_DATA');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries from file
      return knex('customers').insert(mockData);
    });
};
