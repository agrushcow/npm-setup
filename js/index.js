var Bartender = function(mix) {
	this.mix = mix;

	this.questions = [
		'Do ye like yer drinks strong?', 
		'Do ye like it with a salty tang?', 
		"Are ye a lubber who likes it bitter?", 
		"Would ye like a bit of sweetness with yer poison?",
		"Are ye one for a fruity finish?"
	]

	this.ingredients {
		strong: ["Glug of rum", "slug of whisky", "splash of gin"],
		salty: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
		bitter: ["Shake of bitters", "splash of tonic", "twist of lemon peel"],
		sweet: ["Sugar cube", "spoonful of honey", "splash of cola"],
		fruity: ["Slice of orange", "dash of cassis", "cherry on top"]
	}
}

	var drink = function(ingredients) {
		this.strong = ingredients.strong;
		this.salty = ingredients.salty;
		this.bitter = ingredients.bitter;
		this.sweet = ingredients.sweet;
		this.fruity = ingredients.fruity;
	}

	var randomNumber = function() {
		var newNumber = Math.floor((Math.random() * 3) + 0);
		return newNumber;
	}

/*
var Questions = function(question) {
	this.question = question;
}

Bartender.prototype.askQuestion = function() {

}

Bartender.prototype.createDrink = function() {

}
*/