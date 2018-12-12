require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require("fs")

var keys = require("./keys.js")
var names=require("./test.js")
var middlename = names.name.middle;
console.log(middlename);
var spotify = new Spotify(keys.spotify);



var command = process.argv[2];
var name = process.argv.slice(3).join(" ");



if (command === "concert-this") {
    var url = ("https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp")

    axios.get(url).then(response => {

        console.log("Venue: " + response.data[1].venue.name)
        console.log("City: " + response.data[1].venue.city)
        console.log("Date of Concert: " + response.data[1].datetime)


    })



} else if (command === "spotify-this-song") {
   
    spotify.search({
        type: "track",
        query: name,
        limit: 1
    }, function (err, data) {

        if (err) {
            return console.log(err)
        }
        console.log("Song name: " + data.tracks.items[0].name);
        for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
            console.log("Artist name: " + data.tracks.items[0].artists[i].name);
        }
        console.log("Preview of song: " + data.tracks.items[0].preview_url);
        console.log("Album name: " + data.tracks.items[0].album.name);

    })
    


} else if (command === "movie-this") {

    if (name === "") {

        axios.get("http://www.omdbapi.com/?t=" + "Mr.Nobody" + "&apikey=799e27df").then(response => {

            console.log("Title of movie: " + response.data.title);
            console.log("When it has released: " + response.data.Released);
            console.log("IMDB rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Source);
            console.log("Where it was produced: " + response.data.Country);
            console.log("Original language: " + response.data.Language);
            console.log("Plot of movie: " + response.data.Plot);
            console.log("Acters: " + response.data.Actors);


        }).catch(error => {
            console.log(error);
        });

    } else {
        axios.get("http://www.omdbapi.com/?t=" + name + "&apikey=799e27df").then(response => {

            console.log("Title of movie: " + response.data.title);
            console.log("When it has released: " + response.data.Released);
            console.log("IMDB rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Source);
            console.log("Where it was produced: " + response.data.Country);
            console.log("Original language: " + response.data.Language);
            console.log("Plot of movie: " + response.data.Plot);
            console.log("Acters: " + response.data.Actors);

        }).catch(error => {
            if (error.response)
                console.log(error.data);
        });


    }



} else if (command === "do-what-it-says") {


    fs.readFile("random.txt", "utf8", function (err, txt) {

        //var txt = data.split(",");
        var txts = txt.split(",");
        //  var txtx = txt.split(",");
        if (err) {

            console.log(err);

        }

        {
            spotify.search({
                type: "track",
                query: txts[1],
                limit: 3
            }, function (err, data) {

                if (err) {
                    return console.log(err)
                }

                console.log("Song name: " + data.tracks.items[0].name);
                for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
                    console.log("Artist name: " + data.tracks.items[0].artists[i].name)
                };
                console.log("Preview of song: " + data.tracks.items[0].preview_url);
                console.log("Album name: " + data.tracks.items[0].album.name);
            })

        }



    })


}