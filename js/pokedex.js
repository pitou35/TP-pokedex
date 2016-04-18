var pokeApp = angular.module('pokedex', ['ngResource']);

var $loader = $('p#p_loader');

var res = $("#res_poki");

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
    }).then(function successCallback(response)
		{
			$loader.hide();
		});
   
	

   
  
  $scope.changeOnOption = function () {

        
     var optionSelected = $("select#pokemonList option:selected").val();

       
     $("input#id").val(optionSelected);

    };
	
	
	
	$scope.go = function () {
	$loader.show();
	res.hide();
	$scope.stuffs = [];
	var optionSelected = $("select#pokemonList option:selected").val();
	$http.get("http://pokeapi.co/api/v2/pokemon-species/"+optionSelected)
    .success(function(response) {
		$loader.hide();
		res.show();
		return $scope.poke = {
                        "id": response.id,
                        "name": response.name,
                        "order": response.order,
						"gender_rate": response.gender_rate,
						"capture_rate":response.capture_rate,
						"base_happiness":response.base_happiness,
						"is_baby":response.is_baby,
						"hatch_counter":response.hatch_counter,
						"has_gender_differences":response.has_gender_differences,
						"forms_switchable":response.forms_switchable
                        
                    }; 
       
    });
	};
  
  
});




