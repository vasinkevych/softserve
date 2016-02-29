(function (){
    "use strict";

    angular
        .module("app")
        .controller("carouselController", carouselController);

    carouselController.$inject = ["dataService"];

    function carouselController(dataService) {
        var vm = this;
        vm.myInterval = 2500;
        vm.noWrapSlides = false;
        vm.slides = dataService.carousel.addPhotoCarousel;
    }
})();