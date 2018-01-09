
angular.module('myApp')

.controller('questionCtrl', ['$scope', 'dataServicesFac', '$rootScope', function ($scope, dataServicesFac, $rootScope) {


	$scope.quizActive = false;
	$scope.resultsActive = false;

	var numQuestionsAnswered = 0;

	$rootScope.numCorrect = 0;

	$rootScope.correctAnswers = [];

	$scope.activeQuestion = 0;
	$scope.finalise = false;



	dataServicesFac.getQuestions().success(function (res) {

		$rootScope.questions = res.quizQuestions;

	}).error(function(err) {

		console.log(err);

	});



	function changeState(metric, state){

        if(metric === "quiz"){
            $scope.quizActive = state;
        }else if(metric === "results"){
            $scope.resultsActive = state;
        }else{
            return false;
        }

    };



	$scope.activateQuiz = function () {
			
		changeState("quiz", true);

	};


	$scope.setActiveQuestion = function (index) {

		if(index === undefined){

          var breakOut = false;

          var quizLength = $rootScope.questions.length - 1;

          while(!breakOut){

              $scope.activeQuestion = $scope.activeQuestion < quizLength?++$scope.activeQuestion:0;

              if($rootScope.questions[$scope.activeQuestion].selected === null){
                  breakOut = true;
              }
          }
          
    	  }else{

    	      $scope.activeQuestion = index;
    	  }

	};


	$scope.questionAnswered = function () {
		
        var quizLength = $scope.questions.length;
        
        numQuestionsAnswered = 0;

        for(var x = 0; x < quizLength; x++){
            if($rootScope.questions[$scope.activeQuestion].selected !== null){
                numQuestionsAnswered++;

                if(numQuestionsAnswered >= quizLength){

                    for(var i = 0; i < quizLength; i++){

                        if($rootScope.questions[i].selected === null){
                            $scope.setActiveQuestion(i);
                            return;
                        }
                    }
                    
                    $scope.finalise = true;
                    return;
                }
            }
        }

        $scope.setActiveQuestion();

	};


	$scope.selectAnswer = function (index) {
		
		$rootScope.questions[$scope.activeQuestion].selected = index;

	};


	$scope.finaliseAnswers = function () {
		
		$scope.finalise = false;
		numQuestionsAnswered = 0;
		$scope.activeQuestion = 0;

		markQuiz();
		changeState("quiz", false);
		changeState("results", true);

	};



	function markQuiz(){

        for(var a=0;  a < $rootScope.questions.length; a++){
        	$rootScope.correctAnswers.push($rootScope.questions[a].correctAnswer);
        }

        for(var i = 0; i < $rootScope.questions.length; i++){
            if($rootScope.questions[i].selected === $rootScope.questions[i].correctAnswer){
                $rootScope.questions[i].correct = true;
                $rootScope.numCorrect++;
            }else{
                $rootScope.questions[i].correct = false;
            }
        }

  };


	function calculatePerc() {
			
		return $rootScope.numCorrect / $rootScope.questions.length * 100;

	};


	$scope.setActiveQuestion2 = function (index) {
		
		$scope.activeQuestion = index;

	};


	$scope.getAnswerClass = function (index) {

		if(index === $rootScope.correctAnswers[$scope.activeQuestion]){
            return "bg-success";
        }else if(index === $rootScope.questions[$scope.activeQuestion].selected){
            return "bg-danger";
        }

	};


	$scope.reset = function () {
		
		changeState("results", false);
        $rootScope.numCorrect = 0;

        for(var i = 0; i < $rootScope.questions.length; i++){
            var data = $rootScope.questions.datas[i];

            data.selected = null;
            data.correct = null;
        }

	};


}]);