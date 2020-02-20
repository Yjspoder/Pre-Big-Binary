const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Kanban Board' });
});

module.exports = router;
