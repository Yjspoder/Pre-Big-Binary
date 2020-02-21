const express = require('express');
const router = express.Router();
const columnController = require('../controllers/column');

router.get('/list' , columnController.list);

router.post('/create' , columnController.create);

router.delete('/delete/:id' , columnController.delete);

module.exports = router;
