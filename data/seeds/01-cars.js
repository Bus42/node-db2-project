// const mockData = require('../mock_data/CARS_MOCK_DATA.js')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([{ "vin": "2T1BU4EE8BC386488", "make": "Pontiac", "model": "6000", "mileage": 122676, "title": null, "transmission": "automatic" }]);
    });
};
