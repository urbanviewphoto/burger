var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burger.all('burgers', function(data){
		// res.send(data);
		res.render('burgers/index', {burgers: data});
	});	
});

router.post("/create", function(req, res){
	var cols = ['burger_name', 'devoured', 'date_eaten'];
	var vals = [req.body.burger_name, req.body.devoured, req.body.date_eaten];

	burger.create(cols, vals, function(response){
		res.redirect('/burgers');
	});
})



//make a get route to show the form

//make a post route to submit the form to it

// Export routes for server.js to use.
module.exports = router;