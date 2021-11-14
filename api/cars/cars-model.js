const db = require('../../data/db-config');

const getAll = () => {
  return db('cars')
    .then(res => {
      console.log(res);
      return res;
    })
}

const getById = (id) => {
  return db('cars')
    .where({ id })
    .first()
    .then(res => {
      return res;
    })
}

const create = (car) => {
  return db('cars')
    .insert(car)
    .then(res => {
      return getById(res[0]);
    })
}

module.exports = {
  getAll,
  getById,
  create
}
