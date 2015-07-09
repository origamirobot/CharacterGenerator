


angular.module('charGen', []);


var charGenApp = angular.module('charGenApp', ["ngResource", "ngMessages", "ngRoute", "ngSanitize", "ngAnimate", "ngStorage", "ui.select2", "ui.bootstrap", "charGen"])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', { templateUrl: '/app/html/index.html', controller: 'homeCtrl' })
			.when('/star-wars-d20/', { templateUrl: '/app/html/star-wars/01-abilities.html', controller: 'starWarsAbilitiesCtrl' })
			.when('/star-wars-d20/abilities', { templateUrl: '/app/html/star-wars/01-abilities.html', controller: 'starWarsAbilitiesCtrl' })
			.when('/star-wars-d20/species', { templateUrl: '/app/html/star-wars/02-species.html', controller: 'starWarsSpeciesCtrl' })
			.when('/star-wars-d20/class', { templateUrl: '/app/html/star-wars/03-class.html', controller: 'starWarsClassCtrl' })
			.when('/star-wars-d20/skills', { templateUrl: '/app/html/star-wars/04-skills.html', controller: 'starWarsSkillsCtrl' })
			.when('/star-wars-d20/feats', { templateUrl: '/app/html/star-wars/05-feats.html', controller: 'starWarsFeatsCtrl' })
			.when('/star-wars-d20/character', { templateUrl: '/app/html/star-wars/06-character.html', controller: 'starWarsCharacterCtrl' })
			.when('/star-wars-d20/gear', { templateUrl: '/app/html/star-wars/09-gear.html', controller: 'starWarsGearCtrl' })
			.when('/star-wars-d20/finish', { templateUrl: '/app/html/star-wars/10-finish.html', controller: 'starWarsFinishCtrl' });
	});



charGenApp.config(["$httpProvider", function ($httpProvider) {

	// Force angular to use key/value pair posts instead of serialized JSON
	$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
	$httpProvider.defaults.transformRequest = function (data) {
		if (data === undefined) { return data; }
		return $.param(data);
	};

}]);


charGenApp.config(["$locationProvider", function ($locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix("!");
}]);

charGenApp.config(["$animateProvider", function ($animateProvider) {
	$animateProvider.classNameFilter(/^((?!(fa-spinner)).)*$/);
	//$animateProvider.classNameFilter(/^((?!(fa-spinner|class2|class3)).)*$/);
}]);

charGenApp.run(function ($rootScope, $templateCache, $log) {
	$rootScope.$on("$routeChangeStart", function (event, next, current) {
		$rootScope.bodyClass = "";
		if (typeof (current) !== "undefined") {
			$templateCache.remove(current.templateUrl);
			console.log("Route changed: template cache cleared");
		}
	});
});


charGenApp.constant("character", {

	generationMethod: '',
	species: '',
	'class': '',
	strength: 0,
	dexterity: 0,
	constitution: 0,
	intelligence: 0,
	wisdom: 0,
	charisma: 0,
	strengthModifier: 0,
	dexterityModifier: 0,
	constitutionModifier: 0,
	intelligenceModifier: 0,
	wisdomModifier: 0,
	charismaModifier: 0,

	skills : [],
	feats: [],
});

