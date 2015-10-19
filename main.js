var matchingPriceItems;
var filterList;
$(document).ready(function(){


	// ANSWER1
	var totalPrice = items.reduce(function(a,b){

		if (typeof a === "number"){

			return a + b.price;
		
		} else {

			return a.price + b.price;
		}

	});

	var avgPrice = totalPrice / items.length;
	var answer1Html = "<p>The average price is $" + avgPrice.toFixed(2) + "</p>";
	$("#answer1").html(answer1Html);


	// ANSWER2
	matchingPriceItems = items.filter(function(item){
		var minPrice = 14;
		var maxPrice = 18;
		if (item.price > minPrice && item.price < maxPrice ) {	 
			return item;
		}
	});

	var titleHtml = matchingPriceItems.map(function(item){
		return "<p>" + item.title + "</p>";
	});

	$("#answer2").html(titleHtml);


 
	 // ANSWER3

	//3. Which item has a "GBP" currency code? Display it's name and price.//

	var gbpItems = items.filter(function(item){

		if (item.currency_code === "GBP") {
			return item;
		}

	});
	

	var itemCosts = gbpItems.map(function(item){
	
	 	return "<p>" + item.title + " costs £" + item.price + "</p>"; 
	 });

	$("#answer3").html(itemCosts);


	//ANSWER4

	//4. Display a list of all items who are made of wood.//

	var woodItems = items.filter(function(item){

		// HERE, WE'RE LOOPING THROUGH ITEMS
		var hasWood = false;

		item.materials.forEach(function(material){
			// HERE WE'RE LOOPING THROUGH MATERIALS IN ITEM
			if (material === "wood") {
				hasWood = true;
			}
		});
		

		if (hasWood) {
			return item;
		}
	});


	var woodItemsHtml = woodItems.map(function(item) {
		return "<p>" + item.title + " is made of wood</p>";
	});

$("#answer4").html(woodItemsHtml);



	




















});








		


 


