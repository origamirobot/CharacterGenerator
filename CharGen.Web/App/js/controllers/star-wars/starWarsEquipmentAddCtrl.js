
var starWarsEquipmentAddCtrl = function ($scope, $location, equipmentService) {




	$scope.loadTypes = function () {
		$scope.loadingTypes = true;
		equipmentService.listTypes().then(function (result) {
			$scope.loadingTypes = false;
			$scope.types = result;
		});
	};


	$scope.save = function () {
		$scope.saving = true;
		equipmentService.save($scope.equipment).then(function (result) {
			$scope.saving = false;
			$scope.responseMessage = result.Message;
			$scope.showErrorMessage = !result.Success;
			$scope.showSuccessMessage = result.Success;
			console.log(result);
		});
	};


	$scope.loadTypes();

};

starWarsEquipmentAddCtrl.$inject = ["$scope", "$location", "equipmentService"];
angular.module("charGen").controller("starWarsEquipmentAddCtrl", starWarsEquipmentAddCtrl);

