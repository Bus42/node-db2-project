const express = require('express');
const router = express.Router();
const carsModel = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');

router.get('/', (req, res) => {
    carsModel.getAll()
        .then(cars => {
            res.status(200).send(cars);
        })
        .catch(message => {
            res.status(500).send(message);
        });
});

router.get('/:id', checkCarId, (req, res) => {
    const id = req.params.id;
    carsModel.getById(id)
        .then(car => {
            res.status(200).send(car);
        })
        .catch(message => {
            res.status(500).send(message);
        });
});

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, (req, res) => {
    const car = req.body;
    carsModel.create(car)
        .then(car => {
            res.status(201).send(car);
        })
        .catch(message => {
            res.status(500).send(message);
        });
});

router.delete('/:id', checkCarId, (req, res) => {
    const id = req.params.id;
    carsModel.remove(id)
        .then(car => {
            console.log(car)
            res.status(200).end();
        })
        .catch(message => {
            res.status(500).send(message);
        });
});


module.exports = router;
