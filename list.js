(function() {
  angular
    .module("turtleFacts")
  .controller("listCtrl", ListController);

  //ListController.$inject = ['quizMetrics'];
  ListController.$inject = ['quizMetrics','DataService'];
  
    function ListController(quizMetrics, DataService){
      var vm = this;

      vm.quizMetrics = quizMetrics;
      //vm.dummyData = "hello world";
      vm.data = DataService.turtlesData;
      vm.activeTurtle = {};
      vm.changeActiveTurtle = changeActiveTurtle;
      vm.search = "";
      vm.activeQuiz = false;
      vm.btnActivateQuiz = btnActivateQuiz;
    
    
    function btnActivateQuiz(){
      quizMetrics.changeState("quiz",true);
    }
    
    
    function changeActiveTurtle(index){
      vm.activeTurtle = index;
    }
    
  }
  

})();