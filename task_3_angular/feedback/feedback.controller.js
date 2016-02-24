(function (){
    "use strict";

    angular
        .module("app")
        .controller("feedbackController", feedbackController);

    feedbackController.$inject = ["dataService"];

    function feedbackController (dataService) {
        var vm = this;
        vm.title = dataService.feedback.title;
        vm.legend = dataService.feedback.legend;
        vm.feedback = {};
        vm.addFeedback = addFeedback;
        vm.feedbacks = dataService.feedback.feedbacks;

        function addFeedback (){
            vm.feedbacks.push(this.feedback);
            this.feedback = {};
        }
    }
})();
