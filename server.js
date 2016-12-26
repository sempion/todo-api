var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get("/", function(req, res) {
	res.send("Todo heroku openAPI Root");
});

// GET /todos
app.get("/todos", function(req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get("/todos/:id", function(req, res) {
	var todoID = parseInt(req.params.id, 10);
	var matchedData;
	todos.forEach(function(data) {
		if (data.id === todoID) {
			matchedData = data;
		}
	});

	if (matchedData) {
		res.json(matchedData);
	} else {
		res.status(404).send();
	}
});

// POST /todos
app.post("/todos", function(req, res) {
	var body = req.body;

	//add id field
	
	body.id = todoNextId++;

	//push body into array
	todos.push(body);

	res.json(todos);
});



app.listen(PORT, function() {
	console.log("Express listening on port " + PORT);
});