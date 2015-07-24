
var starWarsAbilitiesCtrl = function ($scope, $location, abilityService) {

	var character = JSON.parse(localStorage.getItem("character"));

	$scope.selectedGenMethod = character.generationMethod;
	$scope.genMethodDescription = "";
	$scope.showGenDescription = false;
	$scope.showAbilityForm = false;
	$scope.showDieRollButton = false;
	$scope.diceRolled = false;
	$scope.plannedDefaultValue = 8;

	$scope.strength = character.strength;
	$scope.dexterity = character.dexterity;
	$scope.constitution = character.constitution;
	$scope.intelligence = character.intelligence;
	$scope.wisdom = character.wisdom;
	$scope.charisma = character.charisma;


	$scope.defaultAmountToSpend = 25;
	$scope.amountLeftToSpend = 0;
	$scope.showAmountToSpend = false;
	$scope.amountLeftToSpendClass = "text-success";
	$scope.abilitiesReadOnly = false;

	$scope.genMethodChanged = function () {
		console.log('Generation method changed to ' + $scope.selectedGenMethod);
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
				$scope.showDieRollButton = true;
				$scope.amountLeftToSpend = 0;
				break;
			case "PlannedGeneration":
				$scope.showDieRollButton = false;
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
				$scope.showDieRollButton = false;	
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

	$scope.rollDice = function () {

		$scope.strRoll1 = Math.floor((Math.random() * 6) + 1);
		$scope.strRoll2 = Math.floor((Math.random() * 6) + 1);
		$scope.strRoll3 = Math.floor((Math.random() * 6) + 1);
		$scope.strength = $scope.strRoll1 + $scope.strRoll2 + $scope.strRoll3;

		$scope.conRoll1 = Math.floor((Math.random() * 6) + 1);
		$scope.conRoll2 = Math.floor((Math.random() * 6) + 1);
		$scope.conRoll3 = Math.floor((Math.random() * 6) + 1);
		$scope.constitution = $scope.conRoll1 + $scope.conRoll2 + $scope.conRoll3;

		$scope.dexRoll1 = Math.floor((Math.random() * 6) + 1);
		$scope.dexRoll2 = Math.floor((Math.random() * 6) + 1);
		$scope.dexRoll3 = Math.floor((Math.random() * 6) + 1);
		$scope.dexterity = $scope.dexRoll1 + $scope.dexRoll2 + $scope.dexRoll3;

		$scope.intRoll1 = Math.floor((Math.random() * 6) + 1);
		$scope.intRoll2 = Math.floor((Math.random() * 6) + 1);
		$scope.intRoll3 = Math.floor((Math.random() * 6) + 1);
		$scope.intelligence = $scope.intRoll1 + $scope.intRoll2 + $scope.intRoll3;

		$scope.wisRoll1 = Math.floor((Math.random() * 6) + 1);
		$scope.wisRoll2 = Math.floor((Math.random() * 6) + 1);
		$scope.wisRoll3 = Math.floor((Math.random() * 6) + 1);
		$scope.wisdom = $scope.wisRoll1 + $scope.wisRoll2 + $scope.wisRoll3;

		$scope.chaRoll1 = Math.floor((Math.random() * 6) + 1);
		$scope.chaRoll2 = Math.floor((Math.random() * 6) + 1);
		$scope.chaRoll3 = Math.floor((Math.random() * 6) + 1);
		$scope.charisma = $scope.chaRoll1 + $scope.chaRoll2 + $scope.chaRoll3;

		$scope.diceRolled = true;
	};

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

		if ($scope.generationMethod === "DieRollGeneration" && !$scope.diceRolled)
			return;

		character.strength = $scope.strength;
		character.dexterity = $scope.dexterity;
		character.constitution = $scope.constitution;
		character.intelligence = $scope.intelligence;
		character.wisdom = $scope.wisdom;
		character.charisma = $scope.charisma;

		if ($scope.generationMethod === "DieRollGeneration") {
			character.strRoll1 = $scope.strRoll1;
			character.strRoll2 = $scope.strRoll2;
			character.strRoll3 = $scope.strRoll3;
			character.conRoll1 = $scope.conRoll1;
			character.conRoll2 = $scope.conRoll2;
			character.conRoll3 = $scope.conRoll3;
			character.dexRoll1 = $scope.dexRoll1;
			character.dexRoll2 = $scope.dexRoll2;
			character.dexRoll3 = $scope.dexRoll3;
			character.intRoll1 = $scope.intRoll1;
			character.intRoll2 = $scope.intRoll2;
			character.intRoll3 = $scope.intRoll3;
			character.wisRoll1 = $scope.wisRoll1;
			character.wisRoll2 = $scope.wisRoll2;
			character.wisRoll3 = $scope.wisRoll3;
			character.chaRoll1 = $scope.chaRoll1;
			character.chaRoll2 = $scope.chaRoll2;
			character.chaRoll3 = $scope.chaRoll3;
		}


		localStorage.setItem("character", JSON.stringify(character));
		$location.path("/star-wars-d20/species");
	};


	if ($scope.selectedGenMethod) {
		$scope.genMethodChanged();
		$scope.acceptMethod();
		$scope.strength = character.strength;
		$scope.dexterity = character.dexterity;
		$scope.constitution = character.constitution;
		$scope.intelligence = character.intelligence;
		$scope.wisdom = character.wisdom;
		$scope.charisma = character.charisma;

		$scope.strRoll1 = character.strRoll1;
		$scope.strRoll2 = character.strRoll2;
		$scope.strRoll3 = character.strRoll3;
		$scope.conRoll1 = character.conRoll1;
		$scope.conRoll2 = character.conRoll2;
		$scope.conRoll3 = character.conRoll3;
		$scope.dexRoll1 = character.dexRoll1;
		$scope.dexRoll2 = character.dexRoll2;
		$scope.dexRoll3 = character.dexRoll3;
		$scope.intRoll1 = character.intRoll1;
		$scope.intRoll2 = character.intRoll2;
		$scope.intRoll3 = character.intRoll3;
		$scope.wisRoll1 = character.wisRoll1;
		$scope.wisRoll2 = character.wisRoll2;
		$scope.wisRoll3 = character.wisRoll3;
		$scope.chaRoll1 = character.chaRoll1;
		$scope.chaRoll2 = character.chaRoll2;
		$scope.chaRoll3 = character.chaRoll3;


		$scope.abilityChanged();
	}



};

starWarsAbilitiesCtrl.$inject = ["$scope", "$location", "abilityService"];
angular.module("charGen").controller("starWarsAbilitiesCtrl", starWarsAbilitiesCtrl);

