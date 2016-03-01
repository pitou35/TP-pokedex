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
   
	

   
  
  $scope.changeOnOption = function () {

        
     var optionSelected = $("select#pokemonList option:selected").val();

       
     $("input#id").val(optionSelected);

    };
	
	/*$scope.go = function () {
	
		var IDpoki = $("input#id").val();
		alert (IDpoki);
	
	}*/
	
	$scope.go = function () {
	$scope.stuffs = [];
	var optionSelected = $("select#pokemonList option:selected").val();
	$http.get("http://pokeapi.co/api/v2/pokemon-species/"+optionSelected)
    .success(function(response) {
		alert('ceci est un resultat temporaire a ajouter au html:\n- id='+response.id+'- name=\n'+response.name+'- gender_rate=\n'+response.gender_rate+'- capture_rate=\n'+response.capture_rate+'- base_happiness=\n'+response.base_happiness+'- is_baby='+response.is_baby+'\net d autres infos a rajouter');
       //alert(response.name);
    });
	};
  
  
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


