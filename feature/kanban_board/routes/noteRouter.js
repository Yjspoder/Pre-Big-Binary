const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note');

router.get('/' , noteController.list);

router.post('/create' , noteController.create);

router.put('/edit/:id' , noteController.edit);

module.exports = router;