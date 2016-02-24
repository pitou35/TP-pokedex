var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.factory('photosFactory', function($http) {
  return{
    getPhotos : function() {
        return $http({
            url: 'http://pokeapi.co/api/v2/pokemon',
            method: 'GET'
        })
    }
 }
});

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);



pokeApp.controller('MyCtrl', function($scope) {
    //$scope.name = 'Kaliop';
	//$scope.items = ['sfovjnp', 'sdfgsdf', 'fooqsdfbqsdfbar'];
});

pokeApp.controller("CtrlList", function($scope,$http) {
	$http.get("http://pokeapi.co/api/v2/pokedex/1")
    .success(function(response) {
       $scope.items = response.pokemon_entries;
    });
   

	//var lesPoke = $resource('http://pokeapi.co/api/v1/type/:id/');
	//$scope.items=lesPoke;
  /*$scope.items = [
    { name: "Peter",   value: 20 },
    { name: "Pablo",   value: 55 },
    { name: "Linda",   value: 20 },
    { name: "Marta",   value: 37 },
    { name: "Othello", value: 20 },
    { name: "Markus",  value: 32 }
  ];*/
  //$scope.items=lesPoke.get({id:1});
  
  $scope.changeOnOption = function () {

        
     var optionSelected = $("select#pokemonList option:selected").val();

       
     $("input#id").val(optionSelected);

    };
	
	/*$scope.go = function () {
	
		var IDpoki = $("input#id").val();
		alert (IDpoki);
	
	}*/
  
  
});


/*pokeApp.controller('selectedValue',function($scope){

  
  
  

  $scope.options = [
    { label: 'one', value: 1 },
    { label: 'two', value: 2 }
  ];
    
  // Although this object has the same properties as the one in $scope.options,
  // Angular considers them different because it compares based on reference
  $scope.selected_by_copy = { label: 'two', value: 2 };
    
  
  
});*/


