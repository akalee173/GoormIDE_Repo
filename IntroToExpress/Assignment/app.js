console.log("Our Express app will go here");

var express=require("express");
var app = express();


// "/" => "Hi there!"
app.get("/",function(req,res){
	res.send("Welcome to my assignment!!!");
});


app.get("/speak/:animalName", function(req,res){
	
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		cat: "Meow"
	};
	var animal = req.params.animalName;
	var sound = sounds[animal];
	res.send("The "+animal+" says " +sound);
});
	

app.get("/repeat/:phraseName/:num", function(req,res){
	
	var phrase = req.params.phraseName;
	var number = Number(req.params.num);
	var string ="";
	for(var i=0;i<number;i++) {
		string+=" " + phrase;
	}
	
	res.send(string);
});

app.get("*",function(req,res){
	res.send("ASFASF");
});
	

//Tell express to listen for requests (start server)

app.listen(3001,function(){
	console.log("Server has strated");
}); 