
angular.module('myApp')

.factory('dataMetricsFac', ['dataServicesFac', '$http', function (dataServicesFac, $http) {
				
		 // var quizObj = {
   //        quizActive: false,
   //        resultsActive: false,
   //        changeState: changeState 
   //        // correctAnswers: [],
   //        // markQuiz: markQuiz,
   //        // numCorrect: 0
   //    };
   //    return quizObj;


      // function changeState(metric, state){
      //     if(metric === "quiz"){
      //         quizObj.quizActive = state;
      //     }else if(metric === "results"){
      //         quizObj.resultsActive = state;
      //     }else{
      //         return false;
      //     }
      // };



// -------- !!!!!

      // var datas = [];

      // function getData () {
      //  $http.get('db.json').success(function (res) {

      //    datas = res.quizQuestions;
      //    // console.log(datas);

      //    for(var a = 0; a < datas.length; a++){

      //       quizObj.correctAnswers.push(datas[a].correctAnswer);

      //       if(datas[a].selected === datas[a].correctAnswer){
      //             datas[a].correct = true;
      //             quizObj.numCorrect++;
      //         }else{
      //             datas[a].correct = false;
      //         }

      //     }


      //     // console.log(dataServicesFac.datas);


      //     // for(var i = 0; i < datas.length; i++){
      //     //     if(datas[i].selected === datas[i].correctAnswer){
      //     //         datas[i].correct = true;
      //     //         quizObj.numCorrect++;
      //     //     }else{
      //     //         datas[i].correct = false;
      //     //     }
      //     // }

      //  }); 
      // };
     


      // function markQuiz(){
      //     // quizObj.correctAnswers = dataServicesFac.correctAnswers;

      //     // quizObj.correctAnswers.push(questionCtrl.quizQuestions);

      //     getData();

          
          

      //     // console.log('eflorkvfoerkokrp');
  


      //     // for(var i = 0; i < datas.length; i++){
      //     //     if(dataServicesFac.quizQuestions[i].selected === dataServicesFac.correctAnswers[i]){
      //     //         dataServicesFac.quizQuestions[i].correct = true;
      //     //         quizObj.numCorrect++;
      //     //     }else{
      //     //         dataServicesFac.quizQuestions[i].correct = false;
      //     //     }
      //     // }



      // };


}]);