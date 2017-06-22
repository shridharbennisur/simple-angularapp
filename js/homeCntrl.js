app.controller('homeCntrl', function($scope, $http){
    $scope.message = "home ";
    $scope.name = "dssd";
   

    $scope.change = function() {
    
        if ($scope.search != 'undefined' &&  $scope.search.length > 2) { 
             var request = $http({
             method: "post",
             url: "databasefile/getuser.php",
             data: {
                 search: $scope.search
             },
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
             }
         });
         request.success(function (data) { 
                 
                 if (data.length == 0) {
                     $scope.user = 'no result founds' ; 
                 } else {
                     $scope.user = data ;
                 }
         });
            
        }  
       if($scope.search.length == 1) {
           $scope.user = '';
       }  
         
    };
});