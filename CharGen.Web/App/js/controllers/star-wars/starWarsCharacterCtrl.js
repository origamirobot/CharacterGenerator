
var starWarsCharacterCtrl = function ($scope, character, $location) {

	$scope.character = character;


	console.log(character);


};

starWarsCharacterCtrl.$inject = ['$scope', 'character', '$location'];
angular.module('charGen').controller('starWarsCharacterCtrl', starWarsCharacterCtrl);

