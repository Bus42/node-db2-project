const carsModel = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
  const id = req.params.id;
  carsModel.getById(id)
    .then(car => {
      if (car) {
        next();
      } else {
        res.status(404).send({ message: `car with id ${id} is not found` });
      }
    })
}

const checkCarPayload = (req, res, next) => {
  const car = req.body;
  const requiredFields = ["vin", "make", "model", "mileage"];
  const missingField = requiredFields.find(field => !car[field]);
  if (missingField) {
    res.status(400).send({ message: `${missingField} is missing` });
  } else {
    next();
  }
}

const checkVinNumberValid = (req, res, next) => {
  const isValid = vinValidator.validate(req.body.vin);
  if (isValid) {
    next();
  } else {
    res.status(400).send({ message: `vin ${req.body.vin} is invalid` });
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const vin = req.body.vin;
  await carsModel.getAll()
    .then(cars => {
      const isUnique = cars.every(car => car.vin !== vin);
      if (isUnique) {
        next();
      } else {
        res.status(400).send({ message: `vin ${vin} already exists` });
      }
    })
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
