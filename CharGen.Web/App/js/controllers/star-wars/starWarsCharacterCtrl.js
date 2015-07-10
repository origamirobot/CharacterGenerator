
var starWarsCharacterCtrl = function ($scope, $location) {

	var character = JSON.parse(localStorage.getItem("character"));
	$scope.character = character;


	


};

starWarsCharacterCtrl.$inject = ['$scope', '$location'];
angular.module('charGen').controller('starWarsCharacterCtrl', starWarsCharacterCtrl);

