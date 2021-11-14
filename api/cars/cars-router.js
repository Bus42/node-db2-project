const express = require('express');
const router = express.Router();
const carsModel = require('./cars-model');

router.get('/', (req, res) => {
    carsModel.getAll()
        .then(cars => {
            res.status(200).send(cars);
        })
        .catch(message => {
            res.status(500).send(message);
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    carsModel.getById(id)
        .then(car => {
            res.status(200).send(car);
        })
        .catch(message => {
            res.status(500).send(message);
        });
});

router.post('/', (req, res) => {
    const car = req.body;
    carsModel.create(car)
        .then(car => {
            res.status(201).send(car);
        })
        .catch(message => {
            res.status(500).send(message);
        });
});


module.exports = router;
