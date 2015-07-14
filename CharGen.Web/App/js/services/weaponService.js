angular.module("charGen").factory("weaponService", function ($http, $q) {
	return {

		list: function () {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/weapons/list" }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

	};
});
