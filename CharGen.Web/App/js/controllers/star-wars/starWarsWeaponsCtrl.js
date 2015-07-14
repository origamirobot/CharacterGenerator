
var starWarsWeaponsCtrl = function ($scope, $location, weaponService) {


	$scope.loadWeapons = function () {
		$scope.loading = true;
		weaponService.list().then(function (result) {
			$scope.loading = false;
			$scope.weapons = result;
		});
	};

	$scope.loadWeapons();

};

starWarsWeaponsCtrl.$inject = ["$scope", "$location","weaponService"];
angular.module("charGen").controller("starWarsWeaponsCtrl", starWarsWeaponsCtrl);

