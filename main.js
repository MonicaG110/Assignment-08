var matchingPriceItems;
$(document).ready(function(){

	function answer1() {
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
	}

	answer1();
	/*
	matchingPriceItems = items.filter(function(item){
		var minPrice = 14;
		var maxPrice = 18;
		if (item.price >= minPrice && item.price <= maxPrice ) {	 
			return item;
		}
	});
	$("#answer2").html(matchingPriceItems.map(function(item){
		return item.title;
	}));

	/*	
	var titles = matchingPriceItems.map(function(item){
		return "<p>" + item.title + "</p>";
	});
	*/
	

});





 


