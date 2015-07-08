
var starWarsAbilitiesCtrl = function ($scope, character, $location) {


	$scope.selectedGenMethod = "";
	$scope.genMethodDescription = "";
	$scope.showGenDescription = false;
	$scope.showAbilityForm = false;

	$scope.plannedDefaultValue = 8;

	$scope.strength = 0;
	$scope.dexterity = 0;
	$scope.constitution = 0;
	$scope.intelligence = 0;
	$scope.wisdom = 0;
	$scope.charisma = 0;

	$scope.defaultAmountToSpend = 25;
	$scope.amountLeftToSpend = 0;
	$scope.showAmountToSpend = false;
	$scope.amountLeftToSpendClass = 'text-success';
	$scope.abilitiesReadOnly = false;

	$scope.genMethodChanged = function () {
		$scope.showAbilityForm = false;
		if ($scope.selectedGenMethod) {
			switch ($scope.selectedGenMethod) {
				case "DieRollGeneration": $scope.genMethodDescription = "Ability scores are generated based off six random rolls of four six-sided diece (4d6)."; break;
				case "PlannedGeneration": $scope.genMethodDescription = "Instead of rolling dice, you may select the scores you want by using the planned character generation method. This requires a bit more thought and effor on your part, since you need to know what kind of character you want to play so you can select your scores appropriately.  Your character's ability scores all start at 8, You have 25 points to spend to increase these scores."; break;
				case "StandardScorePackage": $scope.genMethodDescription = "The standard score package is a balanced mixof scores designed to quickly create hero chraracters. Assign the scores to the abilities as you like. After you assign your scores, apply species modifiers. The standard score package is: 15, 14, 13, 12, 10, and 8."; break;
			}
			$scope.showGenDescription = true;
		} else {
			$scope.showGenDescription = false;
		}
	};

	$scope.acceptMethod = function () {
		if (!$scope.selectedGenMethod)
			return;

		$scope.showAbilityForm = true;

		character.generationMethod = $scope.selectedGenMethod;

		switch ($scope.selectedGenMethod) {
			case "DieRollGeneration":
				$scope.abilitiesReadOnly = false;
				$scope.showAmountToSpend = false;
				$scope.amountLeftToSpend = 0;
				break;
			case "PlannedGeneration":
				$scope.abilitiesReadOnly = false;
				$scope.showAmountToSpend = true;
				$scope.amountLeftToSpend = $scope.defaultAmountToSpend;
				$scope.strength = $scope.plannedDefaultValue;
				$scope.dexterity = $scope.plannedDefaultValue;
				$scope.constitution = $scope.plannedDefaultValue;
				$scope.intelligence = $scope.plannedDefaultValue;
				$scope.wisdom = $scope.plannedDefaultValue;
				$scope.charisma = $scope.plannedDefaultValue;
				break;
			case "StandardScorePackage":
				$scope.abilitiesReadOnly = true;
				$scope.showAmountToSpend = false;
				$scope.amountLeftToSpend = 0;
				$scope.strength = 15;
				$scope.dexterity = 14;
				$scope.constitution = 13;
				$scope.intelligence = 12;
				$scope.wisdom = 10;
				$scope.charisma = 8;
				break;
		}
	}


	$scope.abilityChanged = function () {
		if ($scope.selectedGenMethod !== "PlannedGeneration")
			return;

		var base = $scope.plannedDefaultValue * 6;
		var current = $scope.strength + $scope.dexterity + $scope.constitution + $scope.intelligence + $scope.wisdom + $scope.charisma;
		var offset = current - base;
		$scope.amountLeftToSpend = $scope.defaultAmountToSpend - offset;

		$scope.amountLeftToSpendClass = ($scope.amountLeftToSpend < 0) ? "text-danger" : "text-success";

	}

	$scope.acceptScores = function () {
		if ($scope.amountLeftToSpend !== 0)
			return;

		character.strength = $scope.strength;
		character.dexterity = $scope.dexterity;
		character.constitution = $scope.constitution;
		character.intelligence = $scope.intelligence;
		character.wisdom = $scope.wisdom;
		character.charisma = $scope.charisma;
		$location.path('/star-wars-d20/species');
	};

};

starWarsAbilitiesCtrl.$inject = ['$scope', 'character','$location'];
angular.module('charGen').controller('starWarsAbilitiesCtrl', starWarsAbilitiesCtrl);

