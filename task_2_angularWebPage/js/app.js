(function () {
    var app = angular.module('userApp', [ ]);

    app.controller('UserController', function(){
        this.user = {
        photo:'img/my_photo.jpg',
        name: 'Vitaliy Vasinkevych',
        phone: '+38050 6 44 3 111',
        email: 'vasinkevych@gmail.com',
        age: 28,
        link: 'https://www.facebook.com/',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

    };
    });

})();
