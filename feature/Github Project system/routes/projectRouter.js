const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');

router.get('/' , projectController.list);

router.put('/edit/:id' , projectController.edit);

module.exports = router;