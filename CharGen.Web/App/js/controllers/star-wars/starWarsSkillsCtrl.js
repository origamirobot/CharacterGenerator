
var starWarsSkillsCtrl = function ($scope, character, $location) {

	$scope.totalSkills = 0;
	$scope.skillsLeft = 0;
	$scope.showJediSkills = false;
	$scope.showNobleSkills = false;
	$scope.showScoutSkills = false;
	$scope.showScoundrelSkills = false;
	$scope.showSoldierSkills = false;


	$scope.jediSkills = [
		{ name: 'Acrobatics', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Endurance', value: false, ability: 'CON', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Initiative', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Knowledge (Bureaucracy)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Galactic Lore)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Life Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Physical Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Social Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Tactics)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Technology)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Pilot', ability: 'DEX', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Use The Force', ability: 'CHA', value: false, useUntrained: true, armorCheckPenalty: false }
	];

	$scope.nobleSkills = [
		{ name: 'Deception', value: false, ability: 'CHA', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Gather Information', value: false, ability: 'CHA', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Initiative', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Knowledge (Bureaucracy)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Galactic Lore)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Life Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Physical Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Social Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Tactics)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Technology)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Mechanics', value: false, ability: 'INT', useUntrained: false, armorCheckPenalty: false },
		{ name: 'Perception', value: false, ability: 'WIS', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Persuasion', value: false, ability: 'CHA', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Pilot', ability: 'DEX', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Stealth', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Use Computer', value: false, ability: 'INT', useUntrained: true, armorCheckPenalty: false }
	];

	$scope.scoutSkills = [
		{ name: 'Climb', value: false, ability: 'STR', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Endurance', value: false, ability: 'CON', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Initiative', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Jump', value: false, ability: 'STR', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Knowledge (Bureaucracy)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Galactic Lore)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Life Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Physical Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Social Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Tactics)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Technology)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Mechanics', value: false, ability: 'INT', useUntrained: false, armorCheckPenalty: false },
		{ name: 'Perception', value: false, ability: 'WIS', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Pilot', ability: 'DEX', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Ride', value: false },
		{ name: 'Stealth', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Survival', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Swim', value: false, ability: 'STR', useUntrained: true, armorCheckPenalty: true },
	];

	$scope.soldierSkills = [
		{ name: 'Climb', value: false, ability: 'STR', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Endurance', value: false, ability: 'CON', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Initiative', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Jump', value: false, ability: 'STR', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Knowledge (Bureaucracy)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Galactic Lore)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Life Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Physical Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Social Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Tactics)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Technology)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Mechanics', value: false, ability: 'INT', useUntrained: false, armorCheckPenalty: false },
		{ name: 'Perception', value: false, ability: 'WIS', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Pilot', ability: 'DEX', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Swim', value: false, ability: 'STR', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Treat Injury', value: false, ability: 'WIS', useUntrained: true, armorCheckPenalty: false},
		{ name: 'Use Computer', value: false, ability: 'INT', useUntrained: true, armorCheckPenalty: false }
	];

	$scope.scoundrelSkills = [
		{ name: 'Acrobatics', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Deception', value: false, ability: 'CHA', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Gather Information', value: false, ability: 'CHA', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Initiative', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Knowledge (Bureaucracy)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Galactic Lore)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Life Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Physical Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Social Sciences)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Tactics)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Knowledge (Technology)', ability: 'INT', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Mechanics', value: false, ability: 'INT', useUntrained: false, armorCheckPenalty: false },
		{ name: 'Perception', value: false, ability: 'WIS', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Persuasion', value: false, ability: 'CHA', useUntrained: true, armorCheckPenalty: false },
		{ name: 'Pilot', ability: 'DEX', value: false, useUntrained: true, armorCheckPenalty: false },
		{ name: 'Stealth', value: false, ability: 'DEX', useUntrained: true, armorCheckPenalty: true },
		{ name: 'Use Computer', value: false, ability: 'INT', useUntrained: true, armorCheckPenalty: false }
	];


	$scope.jediSkillsChanged = function () {
		var count = 0;
		for (var i = 0; i < $scope.jediSkills.length; i++) {
			if ($scope.jediSkills[i].value)
				count++;
		}
		$scope.skillsLeft = $scope.totalSkills - count;
	};

	$scope.nobleSkillsChanged = function () {
		var count = 0;
		for (var i = 0; i < $scope.nobleSkills.length; i++) {
			if ($scope.nobleSkills[i].value)
				count++;
		}
		$scope.skillsLeft = $scope.totalSkills - count;
	};

	$scope.scoutSkillsChanged = function () {
		var count = 0;
		for (var i = 0; i < $scope.scoutSkills.length; i++) {
			if ($scope.scoutSkills[i].value)
				count++;
		}
		$scope.skillsLeft = $scope.totalSkills - count;
	};

	$scope.scoundrelSkillsChanged = function () {
		var count = 0;
		for (var i = 0; i < $scope.scoundrelSkills.length; i++) {
			if ($scope.scoundrelSkills[i].value)
				count++;
		}
		$scope.skillsLeft = $scope.totalSkills - count;
	};

	$scope.soldierSkillsChanged = function () {
		var count = 0;
		for (var i = 0; i < $scope.soldierSkills.length; i++) {
			if ($scope.soldierSkills[i].value)
				count++;
		}
		$scope.skillsLeft = $scope.totalSkills - count;
	};
	

	$scope.activateCorrectSkills = function () {
		$scope.showJediSkills = false;
		$scope.showNobleSkills = false;
		$scope.showScoutSkills = false;
		$scope.showScoundrelSkills = false;
		$scope.showSoldierSkills = false;

		var intelligence = character.intelligence + character.intelligenceModifier;
		var intModifier = intelligence - 11;
		if (intModifier < 0)
			intModifier = 0;
		

		switch (character.class) {
			case "Jedi":
				$scope.showJediSkills = true;
				$scope.totalSkills = 2 + intModifier;
				console.log("Total skills = " + $scope.totalSkills);
				break;
			case "Noble":
				console.log("Activating Noble skills");
				$scope.showNobleSkills = true;
				$scope.totalSkills = 6 + intModifier;
				break;
			case "Scout":
				$scope.showScoutSkills = true;
				$scope.totalSkills = 5 + intModifier;
				break;
			case "Scoundrel":
				$scope.showScoundrelSkills = true;
				$scope.totalSkills = 4 + intModifier;
				break;
			case "Soldier":
				$scope.showSoldierSkills = true;
				$scope.totalSkills = 3 + intModifier;
				break;
		}
		$scope.skillsLeft = $scope.totalSkills;

	};


	$scope.accept = function () {

		if ($scope.skillsLeft != 0)
			return;

		var skillsToUse = [];

		switch (character.class) {
			case "Jedi": skillsToUse = $scope.jediSkills; break;
			case "Noble": skillsToUse = $scope.nobleSkills; break;
			case "Scout":
				skillsToUse = $scope.scoutSkills;
				// SCOUTS GET AN EXTRA FEAT CALLED "Shake It Off" WHEN TRAINED IN Endurance AND HAVE A Constitution OF 13+
				if (character.constitution + character.constitutionModifier >= 13) {
					for (var i = 0; i < $scope.scoutSkills.length; i++) {
						if ($scope.scoutSkills[i].name == "Endurance" && $scope.scoutSkills[i].value) {
							character.feats[character.feats.length] = { name: "Shake It Off" };
						}
					}
				}
				break;
			case "Scoundrel": skillsToUse = $scope.scoundrelSkills; break;
			case "Soldier": skillsToUse = $scope.soldierSkills; break;
		}


		character.skills = [];
		for (var i = 0; i < skillsToUse.length; i++) {
			if (skillsToUse[i].value) {
				character.skills[character.skills.length] = skillsToUse[i];
			}
		}


		$location.path('/star-wars-d20/feats');
	};


	$scope.activateCorrectSkills();
};

starWarsSkillsCtrl.$inject = ['$scope', 'character', '$location'];
angular.module('charGen').controller('starWarsSkillsCtrl', starWarsSkillsCtrl);

