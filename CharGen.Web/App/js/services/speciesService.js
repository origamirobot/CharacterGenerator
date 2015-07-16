angular.module("charGen").factory("speciesService", function ($http, $q) {
	return {

		list: function () {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/species/list" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		save: function (species) {
			var deferred = $q.defer();
			$http({ method: 'POST', url: "/species/add", data: species, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		}

	};
});
