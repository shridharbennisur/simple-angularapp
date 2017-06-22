var app = angular.module('app',['ngRoute', 'angular-advanced-searchbox', 'tooltips', 'angucomplete-alt']);  

app.config(function($routeProvider,$locationProvider) { 





    $routeProvider 
    .when('/', {
        templateUrl : "partials/home.html ",
        controller : 'homeCntrl'
    }) 
    .when('/todolist/', {
        templateUrl : 'partials/todolist.html',
        controller : 'todolistCntrl' 

    })
    .when('/friend', {
        templateUrl : "partials/friend.html",
        controller : 'frndCntrl'
    }) 
    .when('/page1',{
        template : "partials/search.html" 
    })
    .when('/result/:id',{
        template : 'hello'
    })
    .otherwise({
         redirectTo : '/'
    });
    
   
});

