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
                templateUrl: "pages/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .state("photo", {
                url: "/photo",
                templateUrl: "pages/photo.html",
                controller: "carouselController",
                controllerAs: "photoCtrl"
            })
            .state("feedback", {
                url: "/feedback",
                templateUrl: "pages/feedback.html",
                controller: "feedbackController",
                controllerAs: "feedbackCtrl",
            })
    }

})();
