
var starWarsSpeciesCtrl = function ($scope, character, $location) {

	$scope.strength = character.strength;
	$scope.dexterity = character.dexterity;
	$scope.constitution = character.constitution;
	$scope.intelligence = character.intelligence;
	$scope.wisdom = character.wisdom;
	$scope.charisma = character.charisma;

	$scope.languages = [
		"Basic",
		"Binary",
		"Bocce",
		"Bothese",
		"Cerean",
		"Dosh",
		"Durese",
		"Ewokese",
		"Gamorrean",
		"Gunganese",
		"HighGalactic",
		"Huttese",
		"Ithorese",
		"Jawa",
		"KelDor",
		"MonCalamarian",
		"Quarrenese",
		"Rodese",
		"Ryl",
		"Shyriiwook",
		"Sullustese",
		"Zabrak"
	];



	$scope.calculateTotals = function () {
		$scope.strengthTotal = $scope.strength + $scope.strengthModifier;
		$scope.dexterityTotal = $scope.dexterity + $scope.dexterityModifier;
		$scope.constitutionTotal = $scope.constitution + $scope.constitutionModifier;
		$scope.intelligenceTotal = $scope.intelligence + $scope.intelligenceModifier;
		$scope.wisdomTotal = $scope.wisdom + $scope.wisdomModifier;
		$scope.charismaTotal = $scope.charisma + $scope.charismaModifier;
	};

	$scope.resetModifiers = function () {
		$scope.strengthModifier = 0;
		$scope.dexterityModifier = 0;
		$scope.constitutionModifier = 0;
		$scope.intelligenceModifier = 0;
		$scope.wisdomModifier = 0;
		$scope.charismaModifier = 0;

		$scope.strengthClass = '';
		$scope.dexterityClass = '';
		$scope.constitutionClass = '';
		$scope.intelligenceClass = '';
		$scope.wisdomClass = '';
		$scope.charismaClass = '';


	};

	$scope.resetLanguages = function () {
		for (var i = 0; i < $scope.languages.length; i++) {
			$scope["speaks" + $scope.languages[i]] = false;
			$scope["reads" + $scope.languages[i]] = false;
			$scope["writes" + $scope.languages[i]] = false;
			$scope["speaks" + $scope.languages[i] + "Disabled"] = false;
			$scope["reads" + $scope.languages[i] + "Disabled"] = false;
			$scope["writes" + $scope.languages[i] + "Disabled"] = false;
		}
	};

	$scope.disableExtraLanguages = function () {
		for (var i = 0; i < $scope.languages.length; i++) {
			$scope["speaks" + $scope.languages[i] + "Disabled"] = true;
			$scope["reads" + $scope.languages[i] + "Disabled"] = true;
			$scope["writes" + $scope.languages[i] + "Disabled"] = true;
		}
	};

	$scope.changeStrength = function (modifier) {
		$scope.strengthModifier = modifier;
		if (modifier == 0) {
			$scope.strengthClass = '';
		} else {
			$scope.strengthClass = modifier > 0 ? 'fa fa-arrow-up text-success' : 'fa fa-arrow-down text-danger';
		}
	}

	$scope.changeDexterity = function (modifier) {
		$scope.dexterityModifier = modifier;
		if (modifier == 0) {
			$scope.dexterityClass = '';
		} else {
			$scope.dexterityClass = modifier > 0 ? 'fa fa-arrow-up text-success' : 'fa fa-arrow-down text-danger';
		}
	}

	$scope.changeIntelligence = function (modifier) {
		$scope.intelligenceModifier = modifier;
		if (modifier == 0) {
			$scope.intelligenceClass = '';
		} else {
			$scope.intelligenceClass = modifier > 0 ? 'fa fa-arrow-up text-success' : 'fa fa-arrow-down text-danger';
		}
	}

	$scope.changeConstitution = function (modifier) {
		$scope.constitutionModifier = modifier;
		if (modifier == 0) {
			$scope.constitutionClass = '';
		} else {
			$scope.constitutionClass = modifier > 0 ? 'fa fa-arrow-up text-success' : 'fa fa-arrow-down text-danger';
		}
	}

	$scope.changeCharisma = function (modifier) {
		$scope.charismaModifier = modifier;
		if (modifier == 0) {
			$scope.charismaClass = '';
		} else {
			$scope.charismaClass = modifier > 0 ? 'fa fa-arrow-up text-success' : 'fa fa-arrow-down text-danger';
		}
	}

	$scope.changeWisdom = function (modifier) {
		$scope.wisdomModifier = modifier;
		if (modifier == 0) {
			$scope.wisdomClass = '';
		} else {
			$scope.wisdomClass = modifier > 0 ? 'fa fa-arrow-up text-success' : 'fa fa-arrow-down text-danger';
		}
	}

	$scope.speciesChanged = function () {
		console.log('species changed to ' + $scope.selectedSpecies)
		$scope.resetModifiers();
		$scope.resetLanguages();

		switch ($scope.selectedSpecies) {
			case 'Human': $scope.selectHuman(); break;
			case 'Bothan': $scope.selectBothan(); break;
			case 'Cerean': $scope.selectCerean(); break;
			case 'Duros': $scope.selectDuros(); break;
			case 'Ewok': $scope.selectEwok(); break;
			case 'Gamorrean': $scope.selectGamorrean(); break;
			case 'Gungan': $scope.selectGungan(); break;
			case 'Ithorian': $scope.selectIthorian(); break;
			case 'Kel Dor': $scope.selectKelDor(); break;
			case 'Mon Calamari': $scope.selectMonCalamari(); break;
			case 'Quarren': $scope.selectQuarren(); break;
			case 'Rodian': $scope.selectRodian(); break;
			case 'Sullustan': $scope.selectSullustan(); break;
			case 'Trandoshan': $scope.selectTrandoshan(); break;
			case "Twi'lek": $scope.selectTwilek(); break;
			case 'Wookiee': $scope.selectWookiee(); break;
			case 'Zabrak': $scope.selectZabrak(); break;
		}
		$scope.calculateTotals();
	};

	$scope.selectHuman = function () {

		// NO MODIFIERS

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
	};

	$scope.selectBothan = function () {

		// APPLY MODIFIERS
		$scope.changeDexterity(2);
		$scope.changeConstitution(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksBothese = true;
		$scope.readsBothese = true;
		$scope.writesBothese = true;

	};

	$scope.selectCerean = function () {

		// APPLY MODIFIERS
		$scope.changeIntelligence(2);
		$scope.changeWisdom(2);
		$scope.changeDexterity(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksCerean = true;
		$scope.readsCerean = true;
		$scope.writesCerean = true;

	};

	$scope.selectDuros = function () {

		// APPLY MODIFIERS
		$scope.changeDexterity(2);
		$scope.changeIntelligence(2);
		$scope.changeConstitution(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksDurese = true;
		$scope.readsDurese = true;
		$scope.writesDurese = true;
	};

	$scope.selectEwok = function () {

		// APPLY MODIFIERS
		$scope.changeDexterity(2);
		$scope.changeStrength(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksEwokese = true;

	};

	$scope.selectGungan = function () {

		// APPLY MODIFIERS
		$scope.changeDexterity(2);
		$scope.changeIntelligence(-2);
		$scope.changeCharisma(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksGunganese = true;
		$scope.readsGunganese = true;
		$scope.writesGunganese = true;
	};

	$scope.selectIthorian = function () {

		// APPLY MODIFIERS
		$scope.changeWisdom(2);
		$scope.changeCharisma(2);
		$scope.changeDexterity(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksIthorese = true;
		$scope.readsIthorese = true;
		$scope.writesIthorese = true;
	};

	$scope.selectGamorrean = function () {

		// APPLY MODIFIERS
		$scope.changeStrength(2);
		$scope.changeDexterity(-2);
		$scope.changeIntelligence(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksGamorrean = true;

		/* GAMORREANS CANT SPEAK ANY LANGUAGE BUT THEIR OWN */
		for (var i = 0; i < $scope.languages.length; i++) {
			$scope["speaks" + $scope.languages[i] + "Disabled"] = true;
		}
		$scope.speaksGamorreanDisabled = false;
	};

	$scope.selectKelDor = function () {

		// APPLY MODIFIERS
		$scope.changeDexterity(2);
		$scope.changeWisdom(2);
		$scope.changeConstitution(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksKelDor = true;
		$scope.readsKelDor = true;
		$scope.writesKelDor = true;

	}

	$scope.selectMonCalamari = function () {

		// APPLY MODIFIERS
		$scope.changeIntelligence(2);
		$scope.changeWisdom(2);
		$scope.changeConstitution(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksMonCalamarian = true;
		$scope.readsMonCalamarian = true;
		$scope.writesMonCalamarian = true;
		$scope.speaksQuarrenese = true;
		$scope.readsQuarrenese = true;
		$scope.writesQuarrenese = true;
	}

	$scope.selectQuarren = function () {

		// APPLY MODIFIERS
		$scope.changeWisdom(-2);
		$scope.changeCharisma(-2);
		$scope.changeConstitution(2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksMonCalamarian = true;
		$scope.readsMonCalamarian = true;
		$scope.writesMonCalamarian = true;
		$scope.speaksQuarrenese = true;
		$scope.readsQuarrenese = true;
		$scope.writesQuarrenese = true;
	}

	$scope.selectRodian = function () {

		// APPLY MODIFIERS
		$scope.changeDexterity(2);
		$scope.changeWisdom(-2);
		$scope.changeCharisma(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksRodese = true;
		$scope.readsRodese = true;
		$scope.writesRodese = true;
		$scope.speaksHuttese = true;
		$scope.readsHuttese = true;
		$scope.writesHuttese = true;
	}

	$scope.selectSullustan = function () {

		// APPLY MODIFIERS
		$scope.changeDexterity(2);
		$scope.changeConstitution(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksSullustese = true;
		$scope.readsSullustese = true;
		$scope.writesSullustese = true;
	}

	$scope.selectTrandoshan = function () {

		// APPLY MODIFIERS
		$scope.changeStrength(2);
		$scope.changeDexterity(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksDosh = true;
		$scope.readsDosh = true;
		$scope.writesDosh = true;
	}

	$scope.selectTwilek = function () {

		// APPLY MODIFIERS
		$scope.changeCharisma(2);
		$scope.changeWisdom(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksHuttese = true;
		$scope.readsHuttese = true;
		$scope.writesHuttese = true;
		$scope.speaksRyl = true;
		$scope.readsRyl = true;
		$scope.writesRyl = true;
	}

	$scope.selectZabrak = function () {

		// NO MODIFIERS

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksZabrak = true;
		$scope.readsZabrak = true;
		$scope.writesZabrak = true;

	}

	$scope.selectWookiee = function () {

		// APPLY MODIFIERS
		$scope.changeStrength(4);
		$scope.changeConstitution(2);
		$scope.changeDexterity(-2);
		$scope.changeWisdom(-2);
		$scope.changeCharisma(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksShyriiwook = true;
		$scope.readsShyriiwook = true;
		$scope.writesShyriiwook = true;

		
		/* WOOKIEES CANT SPEAK ANY LANGUAGE BUT THEIR OWN */
		for (var i = 0; i < $scope.languages.length; i++) {
			$scope["speaks" + $scope.languages[i] + "Disabled"] = true;
		}
		$scope.speaksShyriiwookDisabled = false;
	};


	$scope.accept = function () {

		// SAVE SPECIES
		character.species = $scope.selectedSpecies;

		// SAVE MODIFIERS
		character.strengthModifier = $scope.strengthModifier;
		character.dexterityModifier = $scope.dexterityModifier;
		character.constitutionModifier = $scope.constitutionModifier;
		character.intelligenceModifier = $scope.intelligenceModifier;
		character.wisdomModifier = $scope.wisdomModifier;
		character.charismaModifier = $scope.charismaModifier;
		character.languages = [];

		// SAVE LANGUAGES
		for (var i = 0; i < $scope.languages.length; i++) {
			
			var speaks = $scope["speaks" + $scope.languages[i]];
			var reads = $scope["reads" + $scope.languages[i]];
			var writes = $scope["writes" + $scope.languages[i]];

			if (speaks || reads || writes) {
				character.languages[character.languages.length] = { name: $scope.languages[i], speaks: speaks, reads: reads, writes: writes };
			}
		}

		$location.path('/star-wars-d20/class');
	};


	$scope.resetModifiers();
	$scope.calculateTotals();


};

starWarsSpeciesCtrl.$inject = ['$scope', 'character', '$location'];
angular.module('charGen').controller('starWarsSpeciesCtrl', starWarsSpeciesCtrl);

