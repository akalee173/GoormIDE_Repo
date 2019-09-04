var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/cat_app");


// defining the pattern each cat will be modeled
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema); //compiling the pattern into a model


/*
var george = new Cat({
	name:"Mrs. Norris",
	age: 7,
	temperament: "Evil"
});

george.save(function(err,cat){
	if(err){
		console.log("Something went wrong!")
	} else {
		console.log("WE JUST SAVED A CAT TO THE DB")
		console.log(cat);
	}
}); */

Cat.create({
	name: "Snow White",
	age:15,
	temperament: "Bland"
}, function(err, cat){
	if(err){
		console.log("Something wnet wrong");
	} else {
		console.log(cat);
	}
});

Cat.find({}, function(err, cats){
	if(err){
		console.log("Oh NO, ERROR!");
		console.log(err);
	} else {
		console.log("All the Cats....");
		console.log(cats);
	}
})