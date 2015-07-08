
var starWarsSpeciesCtrl = function ($scope, character) {

	console.dir(character);

};

starWarsSpeciesCtrl.$inject = ['$scope', 'character', '$location'];
angular.module('charGen').controller('starWarsSpeciesCtrl', starWarsSpeciesCtrl);

