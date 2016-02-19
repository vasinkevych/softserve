(function() {
    "use strict";

    angular.module("app", ["ui.router", "ngAnimate", "ui.bootstrap"])
        .config(configApp);

    function configApp($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "home/home.html",
                controller: "homeController as homeCtrl"
            })
            .state("photo", {
                url: "/photo",
                templateUrl: "carousel/photo.html",
                controller: "carouselController as photoCtrl"
            })
            .state("feedback", {
                url: "/feedback",
                templateUrl: "feedback/feedback.html",
                controller: "feedbackController as feedbackCtrl"
            })
    }

})();
