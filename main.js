var matchingPriceItems;
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

});





 


