var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Use body-parser
app.use(bodyParser.urlencoded({extended:true}));

//Set ejs extension to all view files
app.set("view engine", "ejs");

var friends = [
		"Tony", "Miranda", "Marat", "Andy"
	];

app.get("/", function(req,res){
	res.render("home");
});

app.post("/addFriend", function(req,res) {
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.get("/friends", function(req,res){
	
	res.render("friends",{friends:friends});
});

app.listen(3001, function(){
	console.log("The server is listening on port 3001");
});