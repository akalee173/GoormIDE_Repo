var express		= require("express"),
	app			= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose")


mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));

//Set ejs extension to all view files
app.set("view engine", "ejs");



//SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);


/*Campground.create
Campground.create( 
	{
		name:"Granite Hill", 
		image: "https://cdn.pixabay.com/photo/2017/11/24/03/04/tent-2974050_960_720.jpg",
		description: "This is a hufe granite hill, no bathrooms. No water. Beautiful granite!"
	}, function(err, camp){
	if(err){
		console.log(err);
	} else {
		console.log("Successfully created new campground");
		console.log(camp);
	}
}); */



//Landing page
app.get("/", function(req,res) {
	res.render("landing");
});

/*
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
	] */


// INDEX  - show all campgrounds
app.get("/campgrounds", function(req,res){
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("index", {campgrounds:allCampgrounds});
		}
	})
});


//CREATE - add new campground to DB
app.post("/campgrounds", function(req,res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image:image, description: desc};
	//Create a new CampGround and save to DB
	Campground.create(newCampground, function(err, newlyCreate){
		if(err){
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});
});
 

//NEW - show form to create new campground 
app.get("/campgrounds/new", function(req,res){
	res.render("new.ejs");
});



//SHOW 
app.get("/campgrounds/:id", function(req,res){
	//res.send("THIS WILL BE THE SHOW PAGE ONE DAY!")
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			res.render("show", {campground: foundCampground});
		}
	})
});


app.listen(3001, function(){
	console.log("YelpCamp has started");
});



/*RESTFUL ROUTES
name	url			verb	desc.
------------------------------------------
INDEX   /dogs		GET		Display a list of all dog
NEW		/dogs/new	GET		Displays  to make a new dog
CREATE	/dogs 		POST	Add new dog to DB
SHOW	/dogs/:id	GET		Shows info about one dog */


