//Including and executing express
var express = require("express");
var app = express();


//Serve the content of "public" directory
app.use(express.static("public"));

//Setting ejs extension to all view files
app.set("view engine", "ejs");


// Response to homepage
app.get("/", function(req,res) {
	res.render("home");
});

//Response to posts page
app.get("/posts", function(req,res){
	var posts = [
		{title: "Post1", author: "Susy" },
		{title: "Uhhh I'm learning fast", author: "Ali"},
		{title: "It's fucking fun", author: "Akalee" }
	];
	res.render("posts",{posts:posts});
});

//Response to FallInLove page
app.get("/fallinlovewith/:thing", function(req,res){
	var thing = req.params.thing;
	res.render("love",{thingVar:thing});
});


// Configuring the port
app.listen(3001, function(){
	console.log("The server started on port 3001");
});