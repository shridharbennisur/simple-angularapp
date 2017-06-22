app.directive('simpleNavbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/navabar.html',
        controller: function ($scope, $location) {
            $scope.isActive = function (path) {
                var currentPath = $location.path().split('/')[1];
                if (currentPath.indexOf('?') !== -1) {
                    currentPath = currentPath.split('?')[0];
                }
                return currentPath === path.split('/')[1];
            };
        },
    };
});

app.directive('searchTab', function () {
    return {
        restrict: 'EA',
        templateUrl: 'partials/search.html'

    };

});

/**
 * @directive searchPopover
 */
app.directive('searchPopover', function ($compile, $templateCache) {
    var searchController = ['$scope', '$http', function ($scope, $http) {
        var link_url = $scope.url;
        var searchBy = $scope.id;
        $scope.$watch('search', function (newValue, oldValue) {
           
                if (newValue !== undefined && newValue.length >= 3) {
                 
                    var request = $http({
                        method: "post",
                        url: link_url,
                        data: {
                            search: newValue,
                            searchBy: searchBy
                        },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                    request.success(function (data) {
                        if (data.length == 0) {
                            $scope.result = 'no results found ...';
                        } else {
                            $scope.result = data;
                        }
                    });
                } else {
                    $scope.result = '';
                }
            
        });
    }];
    //function will give template on basis of search by attributes id 
    var getTemplate = function (contentType) {
        var template = '';
        switch (contentType) {
            case 'search_by_job_id':
                template = $templateCache.get('templateJobId.html');
                break;
            case 'search_by_name':
                template = $templateCache.get("templateName.html");
                break;
        }
        return template;
    }
    return {
        restrict: "A",
        controller: searchController,
        scope: {
            url: '@',
            id: '@'
        },
        link: function (scope, element, attrs) {
            var popOverContent;
            popOverContent = getTemplate(attrs.id); //on basis of attribute id template will popup                 
            var options = {
                content: $compile($(popOverContent))(scope),
                placement: "bottom",
                html: true,
            };
            $(element).popover(options);
        }
    };
});













// app.directive('secondPopover', function ($compile,$templateCache) {

// // var getTemplate = function (contentType) {
// //     var template = '';
// //     switch (contentType) {
// //         case 'user':
// //             //  template = $templateCache.get("partials/home.html");
// //              template = "<input type='text' placeholder='search something by name' >";
// //             break;  
// //         case 'text' :
// //              template = $templateCache.get("templateId.html");

// //           break;
// //     }
// //     return template;
// // }
// return {
//     restrict: "A",
//     template : "<input type='text' placeholder='search something' >",
//     link: function (scope, element, attrs) {
//         var popOverContent;

//         // popOverContent = getTemplate(attrs.id);  //on basis of sttribute id template will popup                 

//         var options = {
//             // content: popOverContent,
//            // content : $compile($(template))(scope),
//             placement: "bottom",
//             html: true,

//         };
//         $(element).popover(options);
//     }
// };
// });


// app.directive('nextLevel', function ($compile) {

//       var controller = ['$scope', function ($scope) {
//               $scope.name = "shri";  
//               $scope.$watch('ss',function(){
//                   console.log($scope.ss);
//               });
//       }]; 
//       var template = '<input type="text" ng-blur="change()" placeholder="search something..."> {{name}}';
//         return {
//             restrict: 'EA',
//             controller : controller ,
//             scope:{ 
//                    popoverHtml:'@',
//                     url:'@' }, // Isolated the scope 
//             template: '<a ui-sref="register" tabindex="0" linkdisabled="{{type}}" class="btn btn-block btn-success ng-class: {disabled: !(type)}" role="button" >next {{url}}</a> ',
//             link: function (scope, el, attrs){ 
//                 console.log(scope.url);
//                 $(el).popover({
//                     trigger: 'click',
//                     html: true,
//                     toggle:'popover',   
//                     title: 'notice !!',
//                     content: $compile($(template))(scope),  // Access the popoverHtml html
//                     placement: 'bottom'
//                 });
//             }
//         };
//     });







// angular.module('Job')
//     .directive('searchPopover', function ($compile, $templateCache, $http) { 
//     // var searchController = ['$scope', '$http', function ($scope, $http) {
//     //     var link_url = $scope.url;
//     //     var searchBy = $scope.id;
//     //     var charLength;
//     //     $scope.$watch('search', function (newValue, oldValue) { 
//     //         charLength = $scope.search.length;
//     //         if (charLength >= 3) {
//     //             var request = $http({
//     //                 method: "post",
//     //                 url: link_url,
//     //                 data: {
//     //                     search: newValue,
//     //                     searchBy: searchBy
//     //                 },
//     //                 headers: {
//     //                     'Content-Type': 'application/x-www-form-urlencoded'
//     //                 }
//     //             });
//     //             request.success(function (data) {
//     //                 if (data.length == 0) {
//     //                     $scope.result = 'no results found ...';
//     //                 } else {
//     //                     $scope.result = data;
//     //                     console.log($scope.result.dreambuilder);
//     //                 }
//     //             });
//     //         } else {
//     //             $scope.result = '';
//     //         }
//     //     });
//     // }];
//     //function will give template on basis of search by attributes id 
//     var getTemplate = function (contentType) {
//         var template = '';
//         switch (contentType) {
//             case 'search_by_Job_number':
//                //template = $templateCache.get('templateJobNumber.html');
//                template = '<input type="text" \
//                placeholder="search by job_Number....."   ng-model="search" />{{search}} ';
//                 break;
//             case 'search_by_name':
//                 template = $templateCache.get("templateName.html");
//                 break;
//         }
//         return template;
//     }
//     return {
//         restrict: "A",
//         link: function (scope, element, attrs) {
//             var popOverContent;
//            console.log(attrs.id);
//             popOverContent = getTemplate(attrs.id); //on basis of attribute id template will popup                 
//            // console.log("popover without compile "+popOverContent);
//             var options = {
//                 content: $compile($(popOverContent))(scope),
//                 placement: "bottom",
//                 html: true,
//             };

//             $(element).popover("destroy");
//             $(element).popover(options); 
//             scope.$watch('search',function(){
//              scope.result = scope.search;


//             });
//         }
//     };
// });