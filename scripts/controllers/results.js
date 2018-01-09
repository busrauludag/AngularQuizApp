angular.module('myApp')

.controller('resultsCtrl', ['$scope', 'dataServicesFac', 'dataMetricsFac', '$rootScope', function ($scope, dataServicesFac, dataMetricsFac, $rootScope) {

		// var vm = this;
		// vm.quizMetrics = dataMetricsFac; 
		// vm.dataService = dataServicesFac;

		// $scope.activeQuestion2 = 0;



		// dataServicesFac.getQuestions().success(function (res) {
		// 	$scope.ResultQuestions = res.quizQuestions;
		// }).error(function(err) {
		// 	console.log(err);
		// });


		// 	$scope.aaa = dataServicesFac.datas;
		// 	console.log($scope.aaa);


		// $scope.ResultQuestions = $rootScope.questions;
		// console.log("result: ", $scope.ResultQuestions);
		


// **
// 	  function calculatePerc() {
			
// 			return dataMetricsFac.numCorrect / $scope.ResultQuestions.length * 100;

// 		};


// 		$scope.setActiveQuestion = function (index) {
			
// 			$scope.activeQuestion2 = index;

// 			// console.log($scope.ResultQuestions);

// 		};


// 		$scope.getAnswerClass = function (index) {

			
			
// 			if(index === dataMetricsFac.correctAnswers[$scope.activeQuestion2]){
//           return "bg-success";
//       }else if(index === $scope.ResultQuestions[$scope.activeQuestion2].selected){
//           return "bg-danger";
//       }

//       $scope.aaa = $rootScope.questions;
// 			console.log($scope.aaa);

// 		};


// // **
// 		$scope.reset = function () {
			
// 			dataMetricsFac.changeState("results", false);
//       dataMetricsFac.numCorrect = 0;

//       for(var i = 0; i < $scope.ResultQuestions.length; i++){
//           var data = $scope.ResultQuestions.datas[i];

//           data.selected = null;
//           data.correct = null;
//       }

// 		};

}]);