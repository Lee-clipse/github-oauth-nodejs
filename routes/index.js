const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  let dataObject = {};
  if (req.cookies.userData !== undefined) {
    const { userName, userRepo } = req.cookies.userData;
    dataObject = { userName, userRepo }
  }
  res.render('index', { ...dataObject });
  next();
});

module.exports = router;
