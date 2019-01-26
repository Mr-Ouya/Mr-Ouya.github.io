





var friendsArray = [
    {
        "name":"Bald Bull",
        "photo":"https://res.cloudinary.com/teepublic/image/private/s--yvwwAgj5--/t_Preview/b_rgb:36538b,c_limit,f_jpg,h_630,q_90,w_630/v1480595419/production/designs/890336_1.jpg",
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
        "name":"King Hippo",
        "photo":"https://cdn.shopify.com/s/files/1/0772/5623/products/king_hippo_grande.jpg?v=1483558316",
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
        "name":"Glass Joe",
        "photo":"https://s.yimg.com/uu/api/res/1.2/lZZqBELZwaofkGY50M6Ssw--~B/aD00MTM7dz0zMTA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/blogs/sptusmlbexperts/glassjoe060413.jpg",
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
/*  var addFriend = function(app) {
    app.post('/api/friends', function(req, res) {
        //console.log(req.body);
        var fInput = req.body;
        var allInput = userInput.scores;
        console.log(allInput);
    }
    )
  }
*/
  //var friendMatch = function() {}
      //res.json for match
  


  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  //module.exports.addFriend = addFriend;
