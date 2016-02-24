var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

var pokeApiUrl = "http://pokeapi.co/"

pokeApp.controller('MyCtrl', function($scope) {
    //$scope.name = 'Kaliop';
});
