var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let note = [];


//We set up the route for the App. We first use the app.get option.
router.get('/', function (req, res) {
  res.render('notes', {
    note: note
  });
});



//then, we use app.post option.
router.post("/addNotes", function (req, res) {
  //assigning Note id to the notes using math.random
  const userNote = {};
  userNote.id = Math.random() * 100;
  userNote.body = req.body.newNote
  note.push(userNote);
  //then we redirect it to the root route
  res.redirect('/');
});

//Handling the delete request

router.post('/deleteNote/:id', function (req, res) {
  console.log(req.params.id);
  const deleteNotes = note.filter(item => item.id != req.params.id);
  note = deleteNotes;
  return res.redirect('/');
});


// router.post('/', urlencodedParser, (req, res) => {
//   res.json({requestBody: req.body});
// });
module.exports = router;