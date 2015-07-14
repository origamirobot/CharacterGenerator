angular.module("charGen").factory("equipmentService", function ($http, $q) {
	return {

		list: function () {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/equipment/list" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		listTypes: function () {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/equipment/types" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		save: function (equipment) {
			var deferred = $q.defer();
			$http({ method: 'POST', url: "/equipment/add", data: equipment, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

	};
});
