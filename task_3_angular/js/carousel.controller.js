(function (){
    "use strict";

    angular
        .module("app")
        .controller("carouselController", carouselController);

    function carouselController() {
        var vm = this;
        vm.myInterval = 1500;
        vm.noWrapSlides = false;
        vm.slides = [
            {
            photo: "img/img_4.jpg"},
            {
            photo: "img/img_5.jpg"},
            {
            photo: "img/img_6.jpg"},
            {
            photo: "img/img_7.jpg"}
        ];
    }
})();