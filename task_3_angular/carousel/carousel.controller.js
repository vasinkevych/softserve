(function (){
    "use strict";

    angular
        .module("app")
        .controller("carouselController", carouselController);
    carouselController.$inject = ["$scope"];

    function carouselController($scope) {
        var quantity = 4;
        var vm = this;
        vm.myInterval = 1500;
        vm.noWrapSlides = false;
        vm.addPhoto = addPhoto;
        vm.slides = addPhoto();

        function addPhoto(){
            var slides = [];
            for(var i = 1; i <= quantity; i++) {
                slides.push({photo:"img/img_" + i + ".jpg"});
            }
            return slides;
        }
    }
})();