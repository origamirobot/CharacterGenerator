var starWarsSpeciesCtrl = function ($scope, $location, abilityService) {


	var character = JSON.parse(localStorage.getItem("character"));

	

	$scope.strength = character.strength;
	$scope.dexterity = character.dexterity;
	$scope.constitution = character.constitution;
	$scope.intelligence = character.intelligence;
	$scope.wisdom = character.wisdom;
	$scope.charisma = character.charisma;


	$scope.stengthBonus = character.strengthBonus;
	$scope.dexterityBonus = character.dexterityBonus;
	$scope.wisdomBonus = character.wisdomBonus;
	$scope.intelligenceBonus = character.intelligenceBonus;
	$scope.charismaBonus = character.charismaBonus;
	$scope.constitutionBonus = character.constitutionBonus;

	$scope.strengthModifier = character.strengthModifier;
	$scope.dexterityModifier = character.dexterityModifier;
	$scope.constitutionModifier = character.constitutionModifier;
	$scope.intelligenceModifier = character.intelligenceModifier;
	$scope.wisdomModifier = character.wisdomModifier;
	$scope.charismaModifier = character.charismaModifier;

	$scope.selectedSpecies = character.species;
	


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
		$scope.strengthTotal = $scope.strength + $scope.strengthBonus;
		$scope.dexterityTotal = $scope.dexterity + $scope.dexterityBonus;
		$scope.constitutionTotal = $scope.constitution + $scope.constitutionBonus;
		$scope.intelligenceTotal = $scope.intelligence + $scope.intelligenceBonus;
		$scope.wisdomTotal = $scope.wisdom + $scope.wisdomBonus;
		$scope.charismaTotal = $scope.charisma + $scope.charismaBonus;
	};

	$scope.calculateModifiers = function () {

		$scope.loadingModifiers = true;

		var str = $scope.strength + $scope.strengthBonus;
		var dex = $scope.dexterity + $scope.dexterityBonus;
		var inte = $scope.intelligence + $scope.intelligenceBonus;
		var con = $scope.constitution + $scope.constitutionBonus;
		var wis = $scope.wisdom + $scope.wisdomBonus;
		var cha = $scope.charisma + $scope.charismaBonus;

		abilityService.getModifiers(str, dex, inte, con, wis, cha).then(function (result) {
			$scope.loadingModifiers = false;
			$scope.strengthModifier = result.strengthModifier;
			$scope.dexterityModifier = result.dexterityModifier;
			$scope.constitutionModifier = result.constitutionModifier;
			$scope.intelligenceModifier = result.intelligenceModifier;
			$scope.wisdomModifier = result.wisdomModifier;
			$scope.charismaModifier = result.charismaModifier;
		});


	};


	$scope.getModifier = function (abilityScore) {
		abilityService.getModifier(abilityScore).then(function(result) {
			return result.modifier;
		});


		//if (abilityScore == 1) return -5;
		//else if (abilityScore >= 2 && abilityScore <= 3) return -4;
		//else if (abilityScore >= 4 && abilityScore <= 5) return -3;
		//else if (abilityScore >= 6 && abilityScore <= 7) return -2;
		//else if (abilityScore >= 8 && abilityScore <= 9) return -1;
		//else if (abilityScore >= 10 && abilityScore <= 11) return 0;
		//else if (abilityScore >= 12 && abilityScore <= 13) return 1;
		//else if (abilityScore >= 14 && abilityScore <= 15) return 2;
		//else if (abilityScore >= 16 && abilityScore <= 17) return 3;
		//else if (abilityScore >= 18 && abilityScore <= 19) return 4;
		//else if (abilityScore >= 20 && abilityScore <= 21) return 5;
		//else if (abilityScore >= 22 && abilityScore <= 23) return 6;
		//else if (abilityScore >= 24 && abilityScore <= 25) return 7;
		//else if (abilityScore >= 26 && abilityScore <= 27) return 8;
		//else if (abilityScore >= 28 && abilityScore <= 29) return 9;
		//else if (abilityScore >= 30 && abilityScore <= 31) return 10;
		//else if (abilityScore >= 32 && abilityScore <= 33) return 11;
		//else if (abilityScore >= 34 && abilityScore <= 35) return 12;
		//else if (abilityScore >= 36 && abilityScore <= 37) return 13;
	};


	$scope.resetBonuses = function () {
		$scope.strengthBonus = 0;
		$scope.dexterityBonus = 0;
		$scope.constitutionBonus = 0;
		$scope.intelligenceBonus = 0;
		$scope.wisdomBonus = 0;
		$scope.charismaBonus = 0;

		$scope.strengthClass = "";
		$scope.dexterityClass = "";
		$scope.constitutionClass = "";
		$scope.intelligenceClass = "";
		$scope.wisdomClass = "";
		$scope.charismaClass = "";


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

	$scope.changeStrength = function (bonus) {
		$scope.strengthBonus = bonus;
		if (bonus == 0) {
			$scope.strengthClass = "";
		} else {
			$scope.strengthClass = bonus > 0 ? "fa fa-arrow-up text-success" : "fa fa-arrow-down text-danger";
		}
	}

	$scope.changeDexterity = function (bonus) {
		$scope.dexterityBonus = bonus;
		if (bonus == 0) {
			$scope.dexterityClass = "";
		} else {
			$scope.dexterityClass = bonus > 0 ? "fa fa-arrow-up text-success" : "fa fa-arrow-down text-danger";
		}
	}

	$scope.changeIntelligence = function (bonus) {
		$scope.intelligenceBonus = bonus;
		if (bonus == 0) {
			$scope.intelligenceClass = "";
		} else {
			$scope.intelligenceClass = bonus > 0 ? "fa fa-arrow-up text-success" : "fa fa-arrow-down text-danger";
		}
	}

	$scope.changeConstitution = function (bonus) {
		$scope.constitutionBonus = bonus;
		if (bonus == 0) {
			$scope.constitutionClass = "";
		} else {
			$scope.constitutionClass = bonus > 0 ? "fa fa-arrow-up text-success" : "fa fa-arrow-down text-danger";
		}
	}

	$scope.changeCharisma = function (bonus) {
		$scope.charismaBonus = bonus;
		if (bonus == 0) {
			$scope.charismaClass = "";
		} else {
			$scope.charismaClass = bonus > 0 ? "fa fa-arrow-up text-success" : "fa fa-arrow-down text-danger";
		}
	}

	$scope.changeWisdom = function (bonus) {
		$scope.wisdomBonus = bonus;
		if (bonus == 0) {
			$scope.wisdomClass = "";
		} else {
			$scope.wisdomClass = bonus > 0 ? "fa fa-arrow-up text-success" : "fa fa-arrow-down text-danger";
		}
	}

	$scope.speciesChanged = function () {
		console.log("species changed to " + $scope.selectedSpecies)
		$scope.resetBonuses();
		$scope.resetLanguages();

		switch ($scope.selectedSpecies) {
			case "Human": $scope.selectHuman(); break;
			case "Bothan": $scope.selectBothan(); break;
			case "Cerean": $scope.selectCerean(); break;
			case "Duros": $scope.selectDuros(); break;
			case "Ewok": $scope.selectEwok(); break;
			case "Gamorrean": $scope.selectGamorrean(); break;
			case "Gungan": $scope.selectGungan(); break;
			case "Ithorian": $scope.selectIthorian(); break;
			case "Kel Dor": $scope.selectKelDor(); break;
			case "Mon Calamari": $scope.selectMonCalamari(); break;
			case "Quarren": $scope.selectQuarren(); break;
			case "Rodian": $scope.selectRodian(); break;
			case "Sullustan": $scope.selectSullustan(); break;
			case "Trandoshan": $scope.selectTrandoshan(); break;
			case "Twi'lek": $scope.selectTwilek(); break;
			case "Wookiee": $scope.selectWookiee(); break;
			case "Zabrak": $scope.selectZabrak(); break;
		}
		$scope.calculateTotals();
		$scope.calculateModifiers();
	};

	$scope.selectHuman = function () {

		// NO BONUSES

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
	};

	$scope.selectBothan = function () {

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
		$scope.changeDexterity(2);
		$scope.changeStrength(-2);

		// SET DEFAULT LANGUAGES
		$scope.speaksEwokese = true;

	};

	$scope.selectGungan = function () {

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// APPLY BONUSES
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

		// NO BONUSES

		// SET DEFAULT LANGUAGES
		$scope.speaksBasic = true;
		$scope.readsBasic = true;
		$scope.writesBasic = true;
		$scope.speaksZabrak = true;
		$scope.readsZabrak = true;
		$scope.writesZabrak = true;

	}

	$scope.selectWookiee = function () {

		// APPLY BONUSES
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

		// SAVE BONUSES
		character.stengthBonus = $scope.strengthBonus;
		character.dexterityBonus = $scope.dexterityBonus;
		character.wisdomBonus = $scope.wisdomBonus;
		character.intelligenceBonus = $scope.intelligenceBonus;
		character.charismaBonus = $scope.charismaBonus;
		character.constitutionBonus = $scope.constitutionBonus;

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

		localStorage.setItem("character", JSON.stringify(character));
		$location.path("/star-wars-d20/class");
	};


	$scope.resetBonuses();
	$scope.calculateTotals();

	if($scope.selectedSpecies) {

		$scope.speciesChanged();


		
		for (var i = 0; i < character.languages.length; i++) {
			var lang = character.languages[i];
			$scope["speaks" + lang.name] = lang.speaks;
			$scope["reads" + lang.name] = lang.reads;
			$scope["writes" + lang.name] = lang.writes;
		}
		
	}

};

starWarsSpeciesCtrl.$inject = ["$scope", "$location", "abilityService"];
angular.module("charGen").controller("starWarsSpeciesCtrl", starWarsSpeciesCtrl);

