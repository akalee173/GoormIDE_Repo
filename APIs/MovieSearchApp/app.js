var express = require("express");
var app=express();
var request = require("request");
var bodyParser = require("body-parser");

//Set ejs extension to all view files
app.set("view engine", "ejs");

app.listen(3001, function(){
	console.log("The server is listening on port 3001");
});

app.get("/search", function(req,res) {
	res.render("search");
});

app.get("/results", function(req,res){
	var newSearch = req.query.search; //Setting a variable to form input
	console.log(newSearch);
	request("http://www.omdbapi.com/?s=" + newSearch + "&apikey=thewdb", function(error,response,body) {
		if(!error && response.statusCode == 200 ) {
			var data = JSON.parse(body);	
			res.render("results", {data:data});
		}
	});
});
	