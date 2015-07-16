var starWarsSpeciesListCtrl = function ($scope, $location, speciesService) {


	$scope.loadSpecies = function () {

		speciesService.list().then(function (result) {
			$scope.species = result;
		});

	};

	$scope.loadSpecies();


};

starWarsSpeciesListCtrl.$inject = ["$scope", "$location", "speciesService"];
angular.module("charGen").controller("starWarsSpeciesListCtrl", starWarsSpeciesListCtrl);

