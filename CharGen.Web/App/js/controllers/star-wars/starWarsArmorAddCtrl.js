
var starWarsArmorAddCtrl = function ($scope, $location, armorService) {


	$scope.loadAvailabilities = function () {
		$scope.loadingAvailabilities = true;
		armorService.listAvailabilities().then(function (result) {
			$scope.loadingAvailabilities = false;
			$scope.availabilities = result;
		});
	};

	$scope.loadTypes = function () {
		$scope.loadingTypes = true;
		armorService.listTypes().then(function (result) {
			$scope.loadingTypes = false;
			$scope.types = result;
		});
	};

	$scope.save = function () {
		$scope.saving = true;

		for (var i = 0; i < $scope.types.length; i++) {
			if ($scope.types[i].Id == $scope.armor.TypeId)
				$scope.armor.Type = $scope.types[i];
		}

		for (i = 0; i < $scope.availabilities.length; i++) {
			if ($scope.availabilities[i].Id == $scope.armor.AvailabilityId)
				$scope.armor.Availability = $scope.availabilities[i];
		}

		armorService.save($scope.armor).then(function (result) {
			console.log(result);
		});
	};

	$scope.loadAvailabilities();
	$scope.loadTypes();


};

starWarsArmorAddCtrl.$inject = ["$scope", "$location", "armorService"];
angular.module("charGen").controller("starWarsArmorAddCtrl", starWarsArmorAddCtrl);

