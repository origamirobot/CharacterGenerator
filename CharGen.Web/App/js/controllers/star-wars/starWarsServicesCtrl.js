
var starWarsServicesCtrl = function ($scope, $location, serviceService) {

	$scope.loadServices = function () {
		$scope.loading = true;
		serviceService.list().then(function (result) {
			$scope.loading = false;
			$scope.services = result;
		});
	};

	$scope.loadServices();



};

starWarsServicesCtrl.$inject = ["$scope", "$location","serviceService"];
angular.module("charGen").controller("starWarsServicesCtrl", starWarsServicesCtrl);

