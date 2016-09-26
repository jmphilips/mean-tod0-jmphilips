'use strict'

angular.module('meantodo', ['ngRoute'])
    .config(($routeProvider) => {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/home.html'
        })
    })
    .controller('MainCtrl', function($scope, $http) {
        $http
            .get('/api/title')
            .then((data) => {
                $scope.tasks = data
            })
    })