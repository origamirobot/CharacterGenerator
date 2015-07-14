
var starWarsEquipmentCtrl = function ($scope, $location, equipmentService) {

	$scope.loadEquipment = function () {
		$scope.loading = true;
		equipmentService.list().then(function (result) {
			$scope.loading = false;
			$scope.equipment = result;
		});
	};

	$scope.loadEquipment();

};

starWarsEquipmentCtrl.$inject = ["$scope", "$location", "equipmentService"];
angular.module("charGen").controller("starWarsEquipmentCtrl", starWarsEquipmentCtrl);

