(function (){
    "use strict";

    angular
        .module("app")
        .controller("feedbackController", feedbackController);

    function feedbackController () {
        var vm = this;
        vm.title = "Feedback";
        vm.legend = "Please, add your testimonial on this webpage";
        vm.feedback = {};
        vm.addFeedback = addFeedback;
        vm.feedbacks = [
            {
                stars: 5,
                body: "Lorem ip sum Dolor s Lorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor s",
                author:"vasinkevych@gmail.com"

            }
        ];

        function addFeedback (feedback){
            vm.feedbacks.push(this.feedback);
            this.feedback = {};
        }
    }
})();
