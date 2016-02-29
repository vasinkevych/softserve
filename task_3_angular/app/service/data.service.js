(function(){
    "use strict";

    angular
        .module("app")
        .factory("dataService", dataService);

    function dataService(){
        var photoQuantity = 4;
        var userData = {
            user: {
                name: "Vitaliy Vasinkevych",
                phone: "+38050 6 44 3 111",
                photo: "libs/img/my_photo.jpg",
                email: "vasinkevych@gmail.com",
                link: "https://www.facebook.com/vasinkevych",
                desc: "My Angular web-page",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            },
            carousel: {
                addPhotoCarousel: addPhoto()
            },
            feedback: {
                title: "You can leave your feedback here",
                legend: "Please, add your testimonial on this webpage",
                feedbacks: [
                    {
                        stars: 5,
                        body: "Lorem ip sum Dolor s Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor s",
                        author:"vasinkevych@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor Lorem ip sum Dolor s",
                        author:"example@gmail.com"
                    }
                ]
            },
            navigate: [
                {
                    link: "main.home",
                    text: "Home"
                },
                {
                    link: "main.photo",
                    text: "Photo"
                },
                {
                    link: "main.feedback",
                    text: "Feedback"
                }
            ],
            footer: {
                link: "https://ua.linkedin.com/in/vitaliy-vasinkevych-594381b9",
                text: "More info:"
            }
        };

        function addPhoto() {
            var slides = [];
            for (var i = 1; i <= photoQuantity; i++) {
                slides.push({photo: "libs/img/img_" + i + ".jpg"});
            }
            return slides;
        }
        function addFeedback (feedback){
            vm.feedbacks.push(this.feedback);
            this.feedback = {};
        }

        return userData
    }
})();