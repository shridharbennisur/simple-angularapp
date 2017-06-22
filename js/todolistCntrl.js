app.controller('todolistCntrl', function($scope, $routeParams) {
   $scope.name = "shri";
   $scope.availableSearchParams = ['gulbarga','bidar', 'bangalore', 'hubli'];
   $scope.search = function() {
       console.log("ff");
   };
});