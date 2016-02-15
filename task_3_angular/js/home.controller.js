(function (){
    "use strict";

    angular
        .module("app")
        .controller("homeController", homeController);

    function homeController() {
        var vm = this;
            vm.photo = "img/my_photo.jpg";
            vm.name = "Vitaliy Vasinkevych";
            vm.phone = "+38050 6 44 3 111";
            vm.email = "vasinkevych@gmail.com";
            vm.link = "https://www.facebook.com/";
            vm.desc = "My Angular web-page";
            vm.info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
            vm.isCollapsed = true;

    }
})();