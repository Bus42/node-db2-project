const mockDataOne = require('../mock_data/CARS_MOCK_DATA_01')
const mockDataTwo = require('../mock_data/CARS_MOCK_DATA_02')
const mockDatathree = require('../mock_data/CARS_MOCK_DATA_03')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert(mockDataOne);
    })
    .then(function () {
      return knex('cars').insert(mockDataTwo);
    })
    .then(function () {
      return knex('cars').insert(mockDatathree);
    });
};
