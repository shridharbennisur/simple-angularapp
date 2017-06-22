app.controller('frndCntrl', function ($scope, frndService, $anchorScroll, $location) {

    $scope.contacts = frndService.list();

    $scope.saveContact = function () {
        frndService.save($scope.newcontact);
        $scope.newcontact = {};
    }


    $scope.delete = function (id) {

        frndService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(frndService.get(id));
    }

    $scope.moveDown = function() {
           $location.hash('downLink'); 
            $anchorScroll();
    }; 

    $scope.moveTop = function() {
          $location.hash('upLink'); 
          $anchorScroll();
    };
});