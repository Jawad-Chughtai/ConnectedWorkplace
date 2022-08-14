
(function () {
    'use strict'
    angular
        .module('myApp')
        .controller('PeopleController', function ($scope) {
            $scope.names = [
                { name: 'Jani', country: 'Norway' },
                { name: 'Hege', country: 'Sweden' },
                { name: 'Kai', country: 'Denmark' }
            ];
        });

})();