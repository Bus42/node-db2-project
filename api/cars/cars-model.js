const db = require('../../data/db-config');

const getAll = () => {
  return db('cars')
  .then(res => {
    console.log(res);
    return res;
  })
}

const getById = () => {
  // DO YOUR MAGIC
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create
}
