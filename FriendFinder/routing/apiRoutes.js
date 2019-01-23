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

    // console.log('userResponses = ' + userResponses);

   
    var matchName = '';
    var matchImage = '';
    var totalDifference = 10000; 
    for (var i = 0; i < friends.length; i++) {
        // console.log('friend = ' + JSON.stringify(friends[i]));

        // Compute differenes for each question
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        }
        
        if (diff < totalDifference) {
            

            totalDifference = diff;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
        }
    }

    friends.push(userInput);

   
    res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
});
*/
