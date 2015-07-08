angular.module("charGen").factory("raceService", function ($http, $q) {
	return {

		getBalance: function (cardNumber) {
			var deferred = $q.defer();
			$http({ method: "GET", url: "/utg/balance/?cardNumber=" + cardNumber }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		addFunds: function (cardNumber, amount) {
			var deferred = $q.defer();
			$http({ method: 'POST', url: "/utg/add-funds", data: { cardNumber: cardNumber, amount: amount }, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
				success(function (data, status, headers, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		activateCard: function (cardNumber) {
			var deferred = $q.defer();
			$http({ method: 'POST', url: "/utg/activate", data: { cardNumber:cardNumber}, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
				success(function (data, status, header, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		deactivateCard: function (cardNumber, reason) {
			var deferred = $q.defer();
			$http({ method: 'POST', url: "/utg/deactivate", data: { cardNumber: cardNumber, reason: reason }, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
				success(function (data, status, header, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

		reactivateCard: function (cardNumber) {
			var deferred = $q.defer();
			$http({ method: 'POST', url: "/utg/reactivate", data: { cardNumber: cardNumber}, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).
				success(function (data, status, header, config) { deferred.resolve(data); }).
				error(function (data, status, headers, config) { deferred.reject(status); });
			return deferred.promise;
		},

	};
});
