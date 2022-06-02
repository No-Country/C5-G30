const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);



api.post('/Profesor', (req, res) => req.status(201).send({ success: true }))
api.post('/Materia', (req, res) => req.status(201).send({ success: true }))
api.post('/Tarea', (req, res) => req.status(201).send({ success: true }))
api.post('/Curso', (req, res) => req.status(201).send({ success: true }))

module.exports = api


module.exports = router; 