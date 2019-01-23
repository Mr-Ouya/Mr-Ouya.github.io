var friendsData = require("../app/data/friends");




module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
    res.json(friendsData);
    });
}

app.post('/api/friends', function(req, res) {
    // Capture the user input object
    var userInput = req.body;
     console.log('userInput = ' + JSON.stringify(userInput));

    var userResponses = userInput.scores;

   

   
    var findName = '';
    
    var matchImage = '';
    var totalDifference = 10000; 
    for (var i = 0; i < friends.length; i++) {
      
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        }
        
        if (diff < totalDifference) {
            

            totalDifference = diff;
            findName = friends[i].name;
            matchImage = friends[i].photo;
        }
    }

    friends.push(userInput);

   
    res.json({status: 'OK', findName: matchName, matchImage: matchImage});
});

