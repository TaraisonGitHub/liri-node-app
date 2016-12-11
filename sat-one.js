// turn series of user input numbers int sorted array
/*
var nodeArg = process.argv;

// create arra to hold the numbers
var numArray = [];

// Create a for lope that starts with index 2 
//this array holds the numbers
for (var i; i < nodeArg.length; i++) {

	//puse "puss each of these things to numArray
	// need convert number to "floats"
	numArray.push(parseFloat(nodeArg[i]));
}

	console.log(numArray);

	console.log(numArray.sort(sortNums));



//This function makes Javascript sort function other than alphabetically strings
function sortNums (a,b) {
	return (a - b);
}
*/
//==========================================================================
// Here we include the weather-js so we can use it in our Node application.
var weather = require("weather-js");

// Then we use the package to search for the weather at a location
var search = { search: "Chicago, IL", degreeType: "C" };
weather.find(search, function(err, result) {

  // If there is an error log it.
  if (err) {
    console.log(err);
  }

  // If there is no error... then print out the weather data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(result, null, 2));

});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
