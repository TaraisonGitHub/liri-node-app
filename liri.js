
//====== PSEUDO-CODE ===========================================================================

// The end result of this app is a command line application (Liri) that gives different feedback depending on what is typed in the console
// Users will "talk" to Liri in the command line and Liri will respond with information (supplied dynamically by the APIs)
// The app needs to get information from three different APIs (Twitter, Spotify, and OMDB), so Liri has feedback to give
// Liri's functionality (feedback):
//		1. my-tweets: Liri returns the last ten user tweets
//		2. spotify-this-song <song name>: Liri returns some Spotify info about the song
//		3. movie-this <movie name>: Liri returns som OMDB info about the movie
//		4. do-what-it-says: Liri displays the contents of random.txt

//====== SWITCH EXPRESSION =====================================================================
 /*
switch (heyLiri) {
	case "my-tweets":
		// function 1
		break;
	case "spotify-this-song":
		// function 2
		break;
	case "movie-this":
		// function 3
		break;
	default "do-what-it-says":
		// function 4;
}
*/
//======= API CALLS =============================================================================

//======= OMDB API call =========================================================================
// Global Variables: myMoive stores the user's input
// request stores the request object using Node's "require" ability
var myMovie = process.argv[2];
var request = require('request');

	// Node gets the OMDB data, substituting the user's input for the title query
	request('http://www.omdbapi.com/?t=' + myMovie + '&r=JSON', function (error, response, body) {

		for (var i = 2; i < myMovie.length; i++) {
		}

		// If there's no error and the query is good, console the movie's rating
		if (!error && response.statusCode == 200) {
			console.log("the movie's rating is " + JSON.parse(body).title);
			console.log("the movie was released in " + JSON.parse(body).Year);
			console.log("the movie's IMDB rating is ' " + JSON.parse(body).imdbRating);
			console.log("the movie originated in " + JSON.parse(body).country);
			console.log("the movie was released in " + JSON.parse(body).language);
			console.log("the movie's plot is: " + JSON.parse(body).plot);
			console.log("the actors are: " + JSON.parse(body).actors);
			console.log("the movie's Rotten Tomatoes score is: ' " + JSON.parse(body).metascore);
		// Otherwise, show the error (for debugging purposes)
	  	} else {
	  		console.log("there was an error", "error", error, "response", response.statusCode);
	  	}
 });

 //Spotify package on npm

//======= FUNCTIONS ==============================================================================

/*


  	console.log("the movie was released in " + JSON.parse(body).Year);
  }

 });

 */