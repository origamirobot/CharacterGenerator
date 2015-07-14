angular.module("charGen").factory("armorService", function ($http, $q) {
	return {

		list: function () {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/armor/list" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		listAvailabilities: function () {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/armor/availabilities" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		listTypes: function () {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/armor/types" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		save: function (armor) {
			var deferred = $q.defer();
			$http({ method: 'POST', url: "/armor/add", data: armor, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

	};
});
