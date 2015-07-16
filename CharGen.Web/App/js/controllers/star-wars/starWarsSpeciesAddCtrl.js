var starWarsSpeciesAddCtrl = function ($scope, $location, speciesService) {


	$scope.save = function () {
		speciesService.save($scope.species).then(function (result) {
			if (result.Success) {
				$location.path('/star-wars-d20/species/list');
			} else {
				// SHOW ERROR HERE
			}
		});
	};

};

starWarsSpeciesAddCtrl.$inject = ["$scope", "$location", "speciesService"];
angular.module("charGen").controller("starWarsSpeciesAddCtrl", starWarsSpeciesAddCtrl);

