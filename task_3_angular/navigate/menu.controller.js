(function () {
    "use strict";

    angular
        .module("app")
        .controller("menuController", menuController);

    function menuController (){
        var vm = this;
        vm.menuItem = [
            {
                link: "home",
                text: "HOME"
            },
            {
                link: "photo",
                text: "Photo"
            },
            {
                link: "feedback",
                text: "Feedback"
            }
        ]
    }
})();
