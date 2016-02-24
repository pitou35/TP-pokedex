var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

var pokeApiUrl = "http://pokeapi.co/"

pokeApp.controller('MyCtrl', function($scope) {
    //$scope.name = 'Kaliop';
	//$scope.items = ['sfovjnp', 'sdfgsdf', 'fooqsdfbqsdfbar'];
});

pokeApp.controller("CtrlList", function($scope) {
  $scope.poki = [
    { name: "Peter",   age: 20 },
    { name: "Pablo",   age: 55 },
    { name: "Linda",   age: 20 },
    { name: "Marta",   age: 37 },
    { name: "Othello", age: 20 },
    { name: "Markus",  age: 32 }
  ];
});

