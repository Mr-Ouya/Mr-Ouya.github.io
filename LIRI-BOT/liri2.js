require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require("fs");

var keys = require("./keys.js");
var names=require("./test.js");
var middlename = names.name.middle;
console.log(middlename);
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

 
switch(command){
    
    case 'concert-this':
    Concert();
    break;
    case 'spotify-this-song':
    SpotifySong();
    break;
    
    
    case 'do-what-it-says':
    DoWhatItSays();
    break;
    case 'movie-this':
    Movie();
    break;
}

function DoWhatItSays() {
    //fs.readFile("random.txt", "utf8", function(error, data) 
        console.log("DoWhatIsay");

}
function Concert(){
    var url = ("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")

    axios.get(url).then(response => {

        /* Need .catch? To function with a artist who has 0 shows
            if (response.data.venue.name === undefined) {
                console.log("No show dates");
            } else {}
        */
            console.log("Venue: " + response.data[0].venue.name)
        console.log("City: " + response.data[0].venue.city)

        console.log("Date: " + response.data[0].datetime)

            
    })
}



function SpotifySong() {
    spotify.search({ type: 'track', query: userInput,limit:1, }, function(err, data) {
        
        
        
        if (err) {
            console.log('Error occurred: ' + err);
          return 
        };
        
        
        if(data.tracks.total===0){
            userInput="The Sign%20artist:Ace of Base";
            SpotifyThisSong();
            return;
        };
        


      var Artists=data.tracks.items[0].artists[0].name;
      var TrackName=data.tracks.items[0].name;
      var PreviewURL=data.tracks.items[0].preview_url;
      var Album=data.tracks.items[0].album.name;
      console.log("Artists: "+ Artists); 
      console.log("Track Name: "+ TrackName); 
      console.log("Preview Link: "+ PreviewURL);
      console.log("Album: "+ Album);
      });
      };

      
      function Movie() {
        if(userInput===""){
            userInput= 'Mr. Nobody.';
        } else 
        //var url =("http://www.omdbapi.com/?i=tt3896198&apikey=da9e377b" + userInput)
        axios.get("http://www.omdbapi.com/?t=" + userInput + "&apikey=da9e377b").then(function(response){
        var Title=response.data.Title;
        
        var Year=response.data.Year;
        var IMDB=response.data.Ratings[0].Value;
        var RottenTomatoesRating=response.data.Ratings[0].Value;
        var Country=response.data.Country;
        var Language=response.data.Language;
        var Plot=response.data.Plot;
        var Actors=response.data.Actors;

        
        console.log("Title: "+ Title);
        console.log("Year: "+ Year);
        console.log("IMDB Rating: "+ IMDB);
        console.log("Rotten Tomatoes Rating: "+ RottenTomatoesRating);
        console.log("Country: "+ Country);
        console.log("Language: "+ Language);
        console.log("Plot: "+ Plot);
        console.log("Actors: "+ Actors);
        });
        };
    
     





