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
  .where({id})
  .first()
  .then(res => {
    return res;
  })
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create
}
