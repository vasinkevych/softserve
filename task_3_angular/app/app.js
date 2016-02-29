(function() {
    "use strict";

    angular.module("app", ["ui.router", "ngAnimate", "ui.bootstrap"])
        .config(configApp);

    configApp.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configApp($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise("/main/home");

        $stateProvider
            .state("main", {
                url: "/main",
                templateUrl: "app/main.html"
            })
            .state("main.home", {
                url: "/home",
                templateUrl: "app/home/home.html",
                controller: "homeController as homeCtrl"
            })
            .state("main.photo", {
                url: "/photo",
                templateUrl: "app/carousel/photo.html",
                controller: "carouselController as photoCtrl"
            })
            .state("main.feedback", {
                url: "/feedback",
                templateUrl: "app/feedback/feedback.html",
                controller: "feedbackController as feedbackCtrl"
            })
    }

})();
