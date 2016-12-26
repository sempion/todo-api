var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: "Meet mom for lunch",
	completed: false
}, {
	id: 2,
	description: "Go to market",
	completed: false
}, {
	id: 3,
	description: "Complete the challenge",
	completed: true
}];

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

app.listen(PORT, function() {
	console.log("Express listening on port " + PORT);
});