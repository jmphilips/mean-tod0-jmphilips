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
        $scope.createNewTask = () => {
            const tsk = {
                "author": $scope.author,
                "task": $scope.task
            }

            $http  
                .post('/api/title', tsk)
                .then(() => {$scope.tasks.push(tsk)})
                .catch(console.error)
        }

        $scope.deleteTask = (objectId) => {
            $http.delete('/api/title/' + objectId)

            $http
            .get('/api/title')
            .then(({data: { tasks } }) => {
                $scope.tasks = tasks
            })
        }

        $http
            .get('/api/title')
            .then(({data: { tasks } }) => {
                $scope.tasks = tasks
            })
        
    })