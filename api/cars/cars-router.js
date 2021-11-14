const express  = require('express');
const router   = express.Router();
const carsModel = require('./cars-model');

router.get('/', (req, res) => {
  carsModel.getAll()
  .then(cars => {
    res.status(200).json(cars);
  })
  .catch(message => {
    res.status(500).json({message});
  });
});

module.exports = router;
