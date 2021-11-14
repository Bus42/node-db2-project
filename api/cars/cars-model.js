const db = require('../../data/db-config');

const getAll = () => {
  return db('cars')
    .orderBy('id')
    .then(cars => {
      return cars;
    })
}

const getById = (id) => {
  return db('cars')
    .where({ id })
    .first()
    .then(car => {
      return car;
    })
}

const create = (car) => {
  return db('cars')
    .insert(car)
    .then(ids => {
      return getById(ids[0]);
    })
}

// delete record and return deleted record from the database
const remove = (id) => {
  return db('cars')
    .where({ id })
    .del()
    .then(car => {
      return car;
    })
}

module.exports = {
  getAll,
  getById,
  create,
  remove
}
