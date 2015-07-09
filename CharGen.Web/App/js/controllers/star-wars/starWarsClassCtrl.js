
var starWarsClassCtrl = function ($scope, character, $location) {

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
		$scope.classDescription = "Jedi combine physical training with mastery of the Force. Jedi concentrate on battle prowess, defense, and lightsaber training. Additionally, they are ambassadors of the Jedi order, protecting the Republic from all dangers. Few are strong enough in the Force and have the dvotion to walk the Jedi's path. but those few are awarded with a powerful ally. They walk in ta larger world than those who neither feel nor heed the Force.";
		$scope.feats = [
			{ name: 'Force Sensitivity', value: true },
			{ name: 'Weapon Proficiency (light sabers)', value: true },
			{ name: 'Weapon Proficiency (light simple weapons)', value: true },
		];
	};

	$scope.selectNoble = function () {
		$scope.classDescription = "Members of the noble class use their intelligence and natural charisma to make their way in the galaxy. From true royalty to elected officials, military commanders to crime lords, traders, merchants, ambassadors, holovid stars, and influential corporate magnates, character types who appear in the noble class are varied and numerous. Some bring honor to the name,. Others are sly, treacherous, and dishonorable to the core.";
		$scope.feats = [
			{ name: 'Weapon Proficiency (pistols)', value: true },
			{ name: 'Weapon Proficiency (simple weapons)', value: true },
		];

		// MUST MEET REQUIREMENT OF 13 INTELLIGENCE FOR LINGUIST FEAT
		if (character.intelligence + character.intelligenceModifier >= 13)
			$scope.feats[2] = { name: 'Linguist', value: true };

	};

	$scope.selectScoundrel = function () {
		$scope.classDescription = "Scoundrels are rogues-good, bad, and neutral-who either live outside the law or fiht against it in order to get the upper hand. They can come from any world or reion of the galaxy. Most use their intelligence and dexterityto accomplish tasks, and many rely on charisma as a fallback when all else fails.";
		$scope.feats = [
			{ name: 'Point Blank Shot', value: true },
			{ name: 'Weapon Proficiency (pistols)', value: true },
			{ name: 'Weapon Proficiency (simple weapons)', value: true }
		];
	};

	$scope.selectScout = function () {
		$scope.classDescription = "Scouts are natural explorers and adventurers, full of curiosity and trained to handle the out-of-the-way locations where they often operate. Scouts then to be independent, signing on when the credits are good and their skills are best utilized and tested. Scouts understand the lay of the land and the obit of the stars.";
		$scope.feats = [
			{ name: 'Weapon Proficiency (pistols)', value: true },
			{ name: 'Weapon Proficiency (rifles)', value: true },
			{ name: 'Weapon Proficiency (simple weapons)', value: true },
		];
	};

	$scope.selectSoldier = function () {
		$scope.classDescription = "Soldiers combine discipline with martial skills to become the best pure warriors in the galaxy.Soldiers can be stalwart defenders of those in need, cruel marauders, or brave adventurers. The can be hired guns, noble champions, or cold-hearted killers. They fight for glory, for honor, to right wrongs, to gain power, to acquire wealth, or simply for the thrill of battle.";
		$scope.feats = [
			{ name: 'Armor Proficiency (light)', value: true },
			{ name: 'Armor Proficiency (medium)', value: true },
			{ name: 'Weapon Proficiency (pistols)', value: true },
			{ name: 'Weapon Proficiency (rifles)', value: true },
			{ name: 'Weapon Proficiency (simple weapons)', value: true },
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
			$scope.jediRecommendation = 'fa fa-thumbs-up text-success';
		else if(wis < 9 && cha < 9)
			$scope.jediRecommendation = 'fa fa-thumbs-down text-danger';

		if (cha > 11 && wis > 11 && int > 11)
			$scope.nodleRecommendation = 'fa fa-thumbs-up text-success';
		else if (cha < 9 && wis < 9 && int < 9)
			$scope.nodleRecommendation = 'fa fa-thumbs-down text-danger';

		if (dex > 11 && int > 11)
			$scope.scoundrelRecommendation = 'fa fa-thumbs-up text-success';
		else if (dex < 9 && int < 9)
			$scope.scoundrelRecommendation = 'fa fa-thumbs-down text-danger';

		if (dex > 11 && int > 11)
			$scope.scoutRecommendation = 'fa fa-thumbs-up text-success';
		else if (dex < 9 && int < 9)
			$scope.scoutRecommendation = 'fa fa-thumbs-down text-danger';

		if (dex > 11 && con > 11 && str > 11)
			$scope.soldierRecommendation = 'fa fa-thumbs-up text-success';
		else if (dex < 9 && con < 11 && str < 11)
			$scope.soldierRecommendation = 'fa fa-thumbs-down text-danger';
	};

	$scope.accept = function () {
		character.class = $scope.selectedClass;
		character.feats = $scope.feats;
		$location.path('/star-wars-d20/skills');
	};


	$scope.checkRecommendations();

};

starWarsClassCtrl.$inject = ['$scope', 'character', '$location'];
angular.module('charGen').controller('starWarsClassCtrl', starWarsClassCtrl);

