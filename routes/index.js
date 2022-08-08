var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
// const asyncHandler = require('express-async-handler');

router.use(express.json());


router.get('/', (req, res) => {
  res.render('index.html');
});

router.post('/', (req, res) => {
  // https://levelup.gitconnected.com/render-dynamic-content-in-nodejs-using-templates-a58cae681148
  const {
    site_key,
    module_name,
    start_date,
    end_date,
    experience_id
  } = req.body;

  // res.render('result', {
  //   siteKey: site_key,
  //   moduleName: module_name,
  //   startDate: start_date,
  //   endDate: end_date,
  //   experienceId: experience_id
  // });

  

  res.render('pie', {
    siteKey: site_key,
    moduleName: module_name,
    startDate: start_date,
    endDate: end_date,
    experienceId: experience_id
  }); 
});

router.get('/taggstar', (req, res) => {
  res.render('taggstar.html');
});


router.post('/taggstar', (req, res) => {
  res.render('taggstar');
});



module.exports = router;