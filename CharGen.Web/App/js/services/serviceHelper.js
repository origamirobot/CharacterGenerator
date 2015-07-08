angular.module("charGen").factory("serviceHelper", function () {

	return {

		getServiceUrl: function (relativeUrl) {
			return "/api/" + relativeUrl;
		},

	};

});