
(function () {
    'use strict'
    angular
        .module('myApp', ['ngRoute'])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

            $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                templateUrl: 'Main/Views/Home/Home.html',
                controller: 'HomeController'
            })
            .when('/home', {
                redirectTo: '/'
            })
            .when('/people', {
                templateUrl: 'Main/Views/People/People.html',
                controller: 'PeopleController'
            })
            .otherwise({
                redirectTo: '/'
            })
    }]);

})();