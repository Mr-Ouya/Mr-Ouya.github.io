var path = require('path');

var friendsData = require("../app/data/friends");




module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
    res.json(friendsData);
    });


app.post('/api/friends', function(req, res) {
    // Capture the user input object
    var userInput = req.body;
     console.log('userInput = ' + JSON.stringify(userInput));

    var userResponses = userInput.scores;

   

   
    var matchName = '';
    
    var matchImage = '';
    var totalDifference = 10000; 
    for (var i = 0; i < friendsData.length; i++) {
      
        var eachDifference = 0;
        for (var j = 0; j < userResponses.length; j++) {
            eachDifference += Math.abs(friendsData[i].scores[j] - userResponses[j]);
        }
        
        if (eachDifference < totalDifference) {
            

            totalDifference = eachDifference;
            findName = friendsData[i].name;
            matchImage = friendsData[i].photo;
        }
    }

    friendsData.push(userInput);

   
    res.json({status: 'OK', findName: matchName, matchImage: matchImage});
});

};