var app = angular.module('memoriesApp', [])
console.log('.....is loaded')

app.controller('memoriesController', function($scope, $http){
  console.log('.....memoriesController')
  $http.get('http://g12-ryan-bird-memories.cfapps.io/api/v1/memories').then(function(response){
    // var memoriesArray = [];
    $scope.memories = response.data.data
console.log(response.data.data, '......response......')

    // $scope.old_days = response.data.attributes.old_days
    // $scope.these_days = response.data.attributes.these_days
    // $scope.year = response.data.attributes.year

    // $scope.memoriesStuff = function (old_days, these_days, year){
    //   memoriesArray.push($scope.old_days, $scope.these_days, $scope.year)
    // }
  })
})

// app.config(function($routeProvider){
//   $routeProvider
//   .when('/memories', {
//     templateUrl: 'partials/memories.html',
//     controller: 'memoriesController'
//   })

// })