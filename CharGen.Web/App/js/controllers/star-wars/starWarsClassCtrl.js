
var starWarsClassCtrl = function ($scope, $location) {

	var character = JSON.parse(localStorage.getItem("character"));


	$scope.class = character.class;

	$scope.classDescription = "Select a class from the left to view that class's description.";

	$scope.feats = [];

	$scope.classChanged = function () {

		switch ($scope.selectedClass) {
			case "Jedi": $scope.selectJedi(); break;
			case "Noble": $scope.selectNoble(); break;
			case "Scoundrel": $scope.selectScoundrel(); break;
			case "Scout": $scope.selectScout(); break;
			case "Soldier": $scope.selectSoldier(); break;
		}
	};

	$scope.selectJedi = function () {
		$scope.classDescription = "";
		$scope.feats = [
			{ name: "Force Sensitivity", value: true },
			{ name: "Weapon Proficiency (light sabers)", value: true },
			{ name: "Weapon Proficiency (light simple weapons)", value: true },
		];
	};

	$scope.selectNoble = function () {
		$scope.classDescription = "";
		$scope.feats = [
			{ name: "Weapon Proficiency (pistols)", value: true },
			{ name: "Weapon Proficiency (simple weapons)", value: true },
		];

		// MUST MEET REQUIREMENT OF 13 INTELLIGENCE FOR LINGUIST FEAT
		if (character.intelligence + character.intelligenceModifier >= 13)
			$scope.feats[2] = { name: "Linguist", value: true };

	};

	$scope.selectScoundrel = function () {
		$scope.classDescription = "";
		$scope.feats = [
			{ name: "Point Blank Shot", value: true },
			{ name: "Weapon Proficiency (pistols)", value: true },
			{ name: "Weapon Proficiency (simple weapons)", value: true }
		];
	};

	$scope.selectScout = function () {
		$scope.classDescription = "";
		$scope.feats = [
			{ name: "Weapon Proficiency (pistols)", value: true },
			{ name: "Weapon Proficiency (rifles)", value: true },
			{ name: "Weapon Proficiency (simple weapons)", value: true },
		];
	};

	$scope.selectSoldier = function () {
		$scope.classDescription = "";
		$scope.feats = [
			{ name: "Armor Proficiency (light)", value: true },
			{ name: "Armor Proficiency (medium)", value: true },
			{ name: "Weapon Proficiency (pistols)", value: true },
			{ name: "Weapon Proficiency (rifles)", value: true },
			{ name: "Weapon Proficiency (simple weapons)", value: true },
		];
	};

	$scope.checkRecommendations = function () {

		var str = character.strength + character.strengthModifier;
		var dex = character.dexterity + character.dexterityModifier;
		var int = character.intelligence + character.intelligenceModifier;
		var con = character.constitution + character.constitutionModifier;
		var wis = character.wisdom + character.wisdomModifier;
		var cha = character.charisma + character.charismaModifier;

		if (wis > 11 && cha > 11)
			$scope.jediRecommendation = "fa fa-thumbs-up text-success";
		else if(wis < 9 && cha < 9)
			$scope.jediRecommendation = "fa fa-thumbs-down text-danger";

		if (cha > 11 && wis > 11 && int > 11)
			$scope.nodleRecommendation = "fa fa-thumbs-up text-success";
		else if (cha < 9 && wis < 9 && int < 9)
			$scope.nodleRecommendation = "fa fa-thumbs-down text-danger";

		if (dex > 11 && int > 11)
			$scope.scoundrelRecommendation = "fa fa-thumbs-up text-success";
		else if (dex < 9 && int < 9)
			$scope.scoundrelRecommendation = "fa fa-thumbs-down text-danger";

		if (dex > 11 && int > 11)
			$scope.scoutRecommendation = "fa fa-thumbs-up text-success";
		else if (dex < 9 && int < 9)
			$scope.scoutRecommendation = "fa fa-thumbs-down text-danger";

		if (dex > 11 && con > 11 && str > 11)
			$scope.soldierRecommendation = "fa fa-thumbs-up text-success";
		else if (dex < 9 && con < 11 && str < 11)
			$scope.soldierRecommendation = "fa fa-thumbs-down text-danger";
	};

	$scope.accept = function () {
		character.class = $scope.selectedClass;
		character.feats = $scope.feats;
		localStorage.setItem("character", JSON.stringify(character));
		$location.path("/star-wars-d20/skills");
	};


	$scope.checkRecommendations();


	if ($scope.class) {
		$scope.classChanged();

	}

};

starWarsClassCtrl.$inject = ["$scope", "$location"];
angular.module("charGen").controller("starWarsClassCtrl", starWarsClassCtrl);

