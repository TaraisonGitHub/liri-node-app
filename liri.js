
//====== PSEUDO-CODE ===========================================================================

// The end result of this app is a command line application (Liri) that gives different feedback depending on what is typed in the console
// Users will "talk" to Liri in the command line and Liri will respond with information (supplied dynamically by the APIs)
// The app needs to get information from three different APIs (Twitter, Spotify, and OMDB), so Liri has feedback to give
// Liri's functionality (feedback):
//		1. my-tweets: Liri returns the last ten user tweets
//		2. spotify-this-song <song name>: Liri returns some Spotify info about the song
//		3. movie-this <movie name>: Liri returns som OMDB info about the movie
//		4. do-what-it-says: Liri displays the contents of random.txt

// ====== GLOBAL VARIABLES ====================================================================

var myinput = process.argv;
var request = require('request');
var movieList = "";

//====== SWITCH EXPRESSION =====================================================================

 switch (myinput[2]) {
	case "my-tweets":
		twitterTweets();
		break;
	case "spotify-this-song":
		trySpotify();
		break;
	case "movie-this":
		OMDBMovies();
		break;
	case "do-what-it-says"
		randomFile();
		break;
	default:
		console.log("\nSorry, I didn't understand that. \n \nHere is a list of commands I can understand: \nmovie-this <movie-name> I can tell you about a movie. \nspotify-this-song <song name> I can tell you about a specific song. \nmy-tweets I can return a list of tweets from the user @breakfast_ennui.");
}

//======= OMDB API call =========================================================================

// request stores the request object using Node's "require" ability
function OMDBMovies() {
	// loop over the indexes that make up the user's input
	for (var i = 3; i < myinput.length; i++) {

		if (i == 3) {
			//if there is only one input, the movie just equals the third index
			movieList = myinput[i];
		} else {
			// otherwise, insert a plus sign after each index (to match OMDB's requirements for multi-word)
			movieList = movieList + "+" + myinput[i];
		}
	}

		request('http://www.omdbapi.com/?t=' + movieList + '&r=JSON', function (error, response, body) {

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
}

// ====== Twitter API Call ==========================================================================

//1. Get twitter keys from keys.js:

function twitterTweets () {
	var stuffINeed = require('./keys.js');

	// 1. Download twitter npm app
	var Twitter = require('twitter');

	var client = new Twitter(stuffINeed.twitterKeys);

	//
	var params = {screen_name: 'breakfast_ennui'};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {

	  if (!error) {

	    console.log(tweets[0].created_at);
	    console.log(tweets[1].text);
	    console.log(tweets[1].created_at);
	    console.log(tweets[1].text);
	    console.log(tweets[2].created_at);
	    console.log(tweets[2].text);
	    console.log(tweets[3].created_at);
	    console.log(tweets[3].text);
	    console.log(tweets[4].created_at);
	    console.log(tweets[4].text);
	    console.log(tweets[5].created_at);
	    console.log(tweets[5].text);
	    console.log(tweets[6].created_at);
	    console.log(tweets[6].text);
	    console.log(tweets[7].created_at);
	    console.log(tweets[7].text);
	    console.log(tweets[8].created_at);
	    console.log(tweets[8].text);
	    console.log(tweets[9].created_at);
	    console.log(tweets[9].text);
	    console.log(tweets[10].created_at);
	    console.log(tweets[10].text);
	    console.log(tweets[11].created_at);
	    console.log(tweets[11].text);
	    console.log(tweets[12].created_at);
	    console.log(tweets[12].text);
	    console.log(tweets[13].created_at);
	    console.log(tweets[13].text);
	    console.log(tweets[14].created_at);
	    console.log(tweets[14].text);
	    console.log(tweets[15].created_at);
	    console.log(tweets[15].text);
	    console.log(tweets[16].created_at);
	    console.log(tweets[16].text);
	    console.log(tweets[17].created_at);
	    console.log(tweets[17].text);
	    console.log(tweets[18].created_at);
	    console.log(tweets[18].text);
	    console.log(tweets[19].created_at);
	    console.log(tweets[19].text);
	  	}
	});

}
//====== Spotify API Call ==============================================================================
/*
function trySpotify() {

	var spotify = require('spotify');
 
	spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
	    
		if (!err) {

		}
	    else if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 
	    // Do something with 'data' 
	});

}
*/
// ====== DO-WHAT-IT-SAYS-CODE ========================================================================

function randomFile() {
	//NPM packagef ofor reading and writing files
	var fs = require('fs');

	//this block of code reads movies.txt
	// it's importatnt to include utf8 parameter or the code will
	//the conde stores the contenst
	fs.readFile("random.txt", 'utf8', function (error,data) {

		console.log(data);
		//var dataArr = data.split(',');
		//console.log(dataArr);
	});

}