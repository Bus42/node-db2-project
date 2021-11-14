const mockData = require('../mock_data/CARS_MOCK_DATA_01');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert(mockData);
    });
};
