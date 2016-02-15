(function (){
    "use strict";

    angular
        .module("app")
        .controller("feedbackController", feedbackController);

    function feedbackController () {
        var vm = this;
        vm.title = "Add you testimonial in this web-page";
        vm.addFeedback = function(feedbacks){
            feedbacks.push(this.feedback);
            this.feedback = {};

        };
        vm.feedbacks = [
            {
            stars: 5,
            body: "Lorem ip sum Dolor s Lorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor sLorem ip sum Dolor s",
            author:"vasinkevych@gmail.com"

            }
        ];
        vm.feedback = {};

        //function addFeedback(feedbacks){
        //    feedbacks.push(this.feedback)
        //}
    }
})();
