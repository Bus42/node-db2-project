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

const remove = (id) => {
  return db('cars')
    .where({ id })
    .del()
    .then(count => {
      return count;
    })
}

const update = (id, car) => {
  //return updated record from the database
  return db('cars')
    .where({ id })
    .update(car)
    .then(() => {
      return getById(id);
    })
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update
}
