





var friendsArray = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Fred",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            1,
            1,
            1,
            4,
            5,
            5,
            2,
            5,
            4,
            5
          ]
      },
      {
        "name":"Louis",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            3,
            3,
            4,
            4,
            5,
            3,
            2,
            3,
            4,
            3
          ]
      }
  ];
  
  // newFriend = [ 2, 1, 4]
// allFriends = [   [5, 1, 4], [1, 1, 1], [3, 3, 4]    ]
// [3, 0, 0 ] = 3
// [1, 0, 3 ] 4
// [1, 2, 0 ] = 3

//finalArray[3, 4, 3, 2, 1, 5] = 4th index
//friendsArray[4th].name
  var addFriend = function(app) {
    app.post('/api/friends', function(req, res) {
        //console.log(req.body);
        var fInput = req.body;
        var allInput = userInput.scores;
        console.log(allInput);
    }
    )
  }

  var friendMatch = function() {
      //res.json for match
  }


  // Note how we export the array. This makes it accessible to other files using require.
  module.exports.friendsArray = friendsArray;
  module.exports.addFriend = addFriend;
