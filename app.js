var app = angular.module("redditClone", ['angularMoment', 'ngAnimate']);

app.controller("RedditApp", function($scope){
  $scope.toggleNewPost = function () {
    $scope.newPost === true ? $scope.newPost = false : $scope.newPost = true
  }
  $scope.toggleComments = function (article) {
    article.open === true ? article.open = false : article.open = true
  }
  $scope.toggleNewComment = function (article) {
    $scope.article.newComment === true ? $scope.article.newComment = false : $scope.article.newComment = true
  }
  $scope.newComment = function (article) {
    var index = $scope.articles.indexOf(article);
    $scope.articles[index].comments.push({author: $scope.articles[index].commentAuthor, text: $scope.articles[index].commentText})
    $scope.articles[index].commentAuthor = ''
    $scope.articles[index].commentText= ''
  }
  $scope.addPost = function () {
    if ($scope.title && $scope.author && $scope.image && $scope.description) {
      $scope.toggleNewPost()
      $scope.articles.push({
        title: $scope.title,
        author: $scope.author,
        description: $scope.description,
        image: $scope.image,
        votes: 0,
        date: new Date(),
        comments: []
      })
      $scope.title = ''
      $scope.author = ''
      $scope.description = ''
      $scope.image = ''
      $scope.submitted = false
    } else {
      $scope.submitted = true
    }
  }
  $scope.upVote = function (article) {
    article.votes++
  }
  $scope.downVote = function (article) {
    article.votes--
  }
  $scope.articles = [
    {title: "Homemade Figurines", author: "Kadin Tucker",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices sodales felis, non porta massa tincidunt ut. Sed a urna orci. Donec ac pharetra lectus. Mauris placerat arcu eget viverra vulputate. Mauris finibus tempus ligula, id pellentesque sapien luctus vitae. Integer sodales interdum sagittis. Vestibulum tellus neque, consectetur non ante",
      image: "http://www.booooooom.com/wp-content/uploads/2009/03/homemade_gi_joe_04.jpg",
      votes: 4, date: "Sun Aug 16 2015 10:37:17 GMT-0600 (MDT)",
      comments: [{author: "dan", text: "lorem"}]},
    {title: "Organizing Your Fabric", author: "Jenny Knuth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices sodales felis, non porta massa tincidunt ut. Sed a urna orci. Donec ac pharetra lectus. Mauris placerat arcu eget viverra vulputate. Mauris finibus tempus ligula, id pellentesque sapien luctus vitae. Integer sodales interdum sagittis. Vestibulum tellus neque, consectetur non ante",
      image: "http://forum.missouriquiltco.com/attachments/look-what-i-found-quilting-links-resources/19382d1334714387-organizing-my-stash-fabric-mini-bolts-organization_0073.jpg",
      votes: -1, date: "Sun Aug 16 2015 10:37:17 GMT-0600 (MDT)",
      comments: [{author: "bob", text: "lorem"}, {author: "joe", text: "lorem"}]},
    {title: "Medicine Horse", author: "Susan Hallowell",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices sodales felis, non porta massa tincidunt ut. Sed a urna orci. Donec ac pharetra lectus. Mauris placerat arcu eget viverra vulputate. Mauris finibus tempus ligula, id pellentesque sapien luctus vitae. Integer sodales interdum sagittis. Vestibulum tellus neque, consectetur non ante euismod, laoreet rutrum urna. Vestibulum ante ipsum primis in faucibus orci luctus",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQi_5dMlMzsRkFct4DzTnvJNhColX7Yxq_duKsnKTCnUnbfLoMK",
      votes: 2, date: 'Sat Aug 15 2015 10:37:17 GMT-0600 (MDT)',
      comments: []},
    {title: "A Week in Paris", author: "Eve Rose",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices sodales felis, non porta massa tincidunt ut. Sed a urna orci. Donec ac pharetra lectus. Mauris placerat arcu eget viverra vulputate. Mauris finibus tempus ligula, id pellentesque sapien luctus vitae. Integer sodales interdum sagittis. Vestibulum tellus neque, consectetur non ante euismod, laoreet rutrum urna. Vestibulum ante ipsum primis in faucibus orci luctus",
      image: "http://static1.squarespace.com/static/50305c7684ae7fae2e65756a/t/55749592e4b082d12f610284/1433703827780/?format=750w",
      votes: 0, date: 'Sun Aug 16 2015 10:37:17 GMT-0600 (MDT)',
      comments: [{author: "pink", text: "lorem"}]}
  ]
})
