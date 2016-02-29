(function(){
    "use strict";

    angular
        .module("app")
        .controller("ratingController", ratingController);

    function ratingController(){
        var vm = this;
        vm.rate = 1;
        vm.max = 5;
        vm.isReadonly = false;
        vm.hoveringOver = hoveringOver;
        vm.ratingStates = [
            {stateOn: "glyphicon-star", stateOff: "glyphicon-star-empty"}
        ];

        function hoveringOver  (value){
            vm.overStar = value;
            vm.percent = 100* ( value / vm.max);
        };

    }
})();