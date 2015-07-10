angular.module("charGen").factory("abilityService", function ($http, $q) {
	return {

		getModifier: function (score) {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/abilities/modifier/?score=" + score }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		getModifiers: function (str, dex, con, inte, wis, cha) {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/abilities/modifiers/?strength=" + str + "&dexterity=" + dex + "&constitution=" + con + "&intelligence=" + inte + "&wisdom=" + wis + "&charisma=" + cha }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},


	};
});
