
var starWarsBasicCtrl = function ($scope, $location) {


	$scope.playerName = "Chris Lees";
	$scope.characterName = "Ah'Laes";
	$scope.age = 33;
	$scope.sex = "Male";
	$scope.eyes = "Black";
	$scope.skin = "Green";
	$scope.hair = "None";
	$scope.height = "6'";
	$scope.weight = 190;


	$scope.accept = function() {

		var character = {
			playerName: $scope.playerName,
			characterName: $scope.characterName,
			age: $scope.age,
			weight: $scope.weight,
			height: $scope.height,
			sex: $scope.sex,
			hair: $scope.hair,
			eyes: $scope.eyes,
			skin: $scope.skin,
		};

		localStorage.setItem("character", JSON.stringify(character));
		$location.path("/star-wars-d20/abilities");
	};

};

starWarsBasicCtrl.$inject = ["$scope", "$location"];
angular.module("charGen").controller("starWarsBasicCtrl", starWarsBasicCtrl);

