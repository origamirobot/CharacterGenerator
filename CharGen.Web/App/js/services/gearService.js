angular.module("charGen").factory("gearService", function ($http, $q) {
	return {

		listWeapons: function (score) {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/weapon/list" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		listEquipment: function (str, dex, con, inte, wis, cha) {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/equipment/list" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		listServices: function (str, dex, con, inte, wis, cha) {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/services/list" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},


	};
});
