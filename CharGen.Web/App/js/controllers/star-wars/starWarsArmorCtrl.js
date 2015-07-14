
var starWarsArmorCtrl = function ($scope, $location, armorService) {


	$scope.loadArmor = function () {
		$scope.loading = true;
		armorService.list().then(function (result) {
			$scope.loading = false;
			$scope.armor = result;
		});
	};

	$scope.loadArmor();

};

starWarsArmorCtrl.$inject = ["$scope", "$location", "armorService"];
angular.module("charGen").controller("starWarsArmorCtrl", starWarsArmorCtrl);

