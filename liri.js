
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
	

		for (var i = 2; i < myMovie.length; i++) {
		}

		request('http://www.omdbapi.com/?t=' + myMovie + '&r=JSON', function (error, response, body) {

		// If there's no error and the query is good, console the movie's rating
		if (!error && response.statusCode == 200) {
			console.log("the movie's title is: " + JSON.parse(body).Title);
			console.log("the movie was released in: " + JSON.parse(body).Year);
			console.log("the movie's IMDB rating is: ' " + JSON.parse(body).imdbRating);
			console.log("the movie originated in: " + JSON.parse(body).Country);
			console.log("the movie was released in: " + JSON.parse(body).Language);
			console.log("the movie's plot is: " + JSON.parse(body).Plot);
			console.log("the actors are: " + JSON.parse(body).Actors);
			console.log("the movie's Rotten Tomatoes score is: ' " + JSON.parse(body).Metascore);
		// Otherwise, show the error (for debugging purposes)
	  	} else {
	  		console.log("there was an error", "error", error, "response", response.statusCode);
	  	}
 });

// ====== Twitter API Call ==========================================================================
//1. Get twitter keys from keys.js:
var stuffINeed = require('./keys.js');

// 1. Download twitter npm app
var npmTwitter = require('twitter');
console.log(stuffINeed.twitterKeys);

//
var params = {screen_name: 'nodejs'};

client.get('statuses/user_timeline&screen_name=breakfast_ennui&count=10', params, function(error, tweets, response) {

  if (!error & response.statusCode === 200) {

    console.log(tweets);

  } else ("there was an error", "error", error, "response", response.statusCode);
});

//====== Spotify API Call ==============================================================================

var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});





/*//================ read a file ====================
//NPM packagef ofor reading and writing files
var fs = require('fs');


//this block of code reads movies.txt
// it's importatnt to include utf8 parameter or the code will
//the conde stores the contenst
fs.readFile("movies.txt", 'utf8', function (error,data) {


	console.log(data);


	var dataArr = data.split(',');


	console.log(dataArr);

});

 //Spotify package on npm

//======= FUNCTIONS ==============================================================================

/*


  	console.log("the movie was released in " + JSON.parse(body).Year);
  }

 });

 */