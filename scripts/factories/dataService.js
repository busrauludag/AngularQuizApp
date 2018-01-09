
angular.module('myApp')

.factory('dataServicesFac', ['$http', function ($http) {
				
		var obj = {};

		obj.getQuestions = function () {

   		return $http.get('db.json')

		};

		return obj;

}]);