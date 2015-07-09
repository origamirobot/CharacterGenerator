
var starWarsFeatsCtrl = function ($scope, character, $location) {

	$scope.totalFeats = 1;
	$scope.featsLeft = 1;
	$scope.baseFeats = character.feats.length;

	$scope.feats = [
		{ name: 'Acrobatic Strike', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Armor Proficiency (heavy)', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Armor Proficiency (medium)', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Armor Proficiency (light)', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Bantha Rush', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Burst Fire', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Careful Shot', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Charging Fire', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Cleave', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Combat Reflexes', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Coordinated Attack', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Crush', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Cybernetic Surgery', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Deadeye', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Dodge', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Double Attack', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Dreadful Rage', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Dual Weapon Mastery I', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Dual Weapon Mastery II', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Dual Weapon Mastery III', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Exotic Weapon Proficiency', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Extra Rage', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Extra Second Wind', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Far Shot', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Force Boon', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Force Sensitivity', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Force Training', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Great Cleave', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Improved Charge', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Improved Defenses', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Improved Disarm', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Improved Damage Threshold', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Martial Arts I', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Martial Arts II', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Martial Arts III', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Melee Defense', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Mighty Swing', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Mobility', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Pin', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Point Blank Shot', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Power Attack', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Powerful Charge', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Precise Shot', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Quick Draw', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Rapid Shot', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Rapid Strike', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Running Attack', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Shake It Off', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Skill Focus', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Skill Training', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Sniper', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Strong in the Force', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Surgical Expertise', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Throw', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Toughness', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Trip', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Triple Attack', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Triple Crit', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Vehicular Combat', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Weapon Finese', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Weapon Focus', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Weapon Proficiency (advanced melee weapons)', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Weapon Proficiency (heavy weapons)', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Weapon Proficiency (light sabers)', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Weapon Proficiency (pistols)', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Weapon Proficiency (rifles)', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Weapon Proficiency (simple weapons)', disabled: true, value: false, prereq: '', benefit: '' },
		{ name: 'Whirlwind Attack', disabled: true, value: false, prereq: '', benefit: '' },
	];


	$scope.checkPrerequisites = function () {

		// ACROBATIC STRIKE
		for (var i = 0; i < character.skills.length; i++) {
			if (character.skills[i].name == "Acrobatics" && character.skills[i].value)
				$scope.feats[0].disabled = false;
		}

		// ARMOR PROFICIENCY (HEAVY)
		for (i = 0; i < character.feats.length; i++) {
			if (character.feats[i].name == "Armor Proficiency (light)" || character.feats[i].name == "Armor Proficiency (medium)")
				$scope.feats[1].disabled = false;
		}

		// ARMOR PROFICIENCY (MEDIUM)
		for (i = 0; i < character.feats.length; i++) {
			if (character.feats[i].name == "Armor Proficiency (light)")
				$scope.feats[2].disabled = false;
		}

		// ARMOR PROFICIENCY (LIGHT)
		$scope.feats[3].disabled = false;



		// ENABLE ALL THE REST CAUSE I'M LAZY
		for (i = 4; i < $scope.feats.length; i++) {
			$scope.feats[i].disabled = false;
		}

		// ENABLE ALREADY EXISTING FEATS
		for (i = 0; i < $scope.feats.length; i++) {
			for (var j = 0; j < character.feats.length; j++) {
				if (character.feats[j].name == $scope.feats[i].name)
					$scope.feats[i].value = character.feats[j].value;
			}
		}

	};


	$scope.featsChanged = function () {
		var count = 0;
		for (var i = 0; i < $scope.feats.length; i++) {
			if ($scope.feats[i].value)
				count++;
		}
		$scope.featsLeft = $scope.totalFeats + $scope.baseFeats - count;
	};


	$scope.accept = function () {
		if ($scope.featsLeft != 0)
			return;


		var featsToUse = [];
		for (var i = 0; i < $scope.feats.length; i++) {
			if ($scope.feats[i].value)
				featsToUse[featsToUse.length] = $scope.feats[i];
		}

		character.feats = featsToUse;
		$location.path('/star-wars-d20/character');
	};

	$scope.checkPrerequisites();
};

starWarsFeatsCtrl.$inject = ['$scope', 'character', '$location'];
angular.module('charGen').controller('starWarsFeatsCtrl', starWarsFeatsCtrl);

