var express = require("express");
var app=express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

//Set ejs extension to all view files
app.set("view engine", "ejs");

//Landing page
app.get("/", function(req,res) {
	res.render("landing");
});

var campgrounds = [
		{name:"Salmon Creek", image: "https://cdn.pixabay.com/photo/2015/10/12/14/57/campfire-984020_960_720.jpg"},
		{name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2017/11/24/03/04/tent-2974050_960_720.jpg"},
		{name:"Mountain Goat's Rest", image: "https://image.shutterstock.com/image-photo/burning-campfire-forest-600w-490275766.jpg"},
		{name:"Salmon Creek", image: "https://cdn.pixabay.com/photo/2015/10/12/14/57/campfire-984020_960_720.jpg"},
		{name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2017/11/24/03/04/tent-2974050_960_720.jpg"},
		{name:"Mountain Goat's Rest", image: "https://image.shutterstock.com/image-photo/burning-campfire-forest-600w-490275766.jpg"},
		{name:"Salmon Creek", image: "https://cdn.pixabay.com/photo/2015/10/12/14/57/campfire-984020_960_720.jpg"},
		{name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2017/11/24/03/04/tent-2974050_960_720.jpg"},
		{name:"Mountain Goat's Rest", image: "https://image.shutterstock.com/image-photo/burning-campfire-forest-600w-490275766.jpg"}
	]

app.get("/campgrounds", function(req,res){
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image:image};
	campgrounds.push(newCampground)
	//redirect back campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
	res.render("new.ejs");
});


app.listen(3001, function(){
	console.log("YelpCamp has started");
});

console.log(campgrounds)



