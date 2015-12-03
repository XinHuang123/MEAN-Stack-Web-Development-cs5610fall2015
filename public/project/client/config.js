'use strict';
(function() {
	angular
		.module("ProjectApp")
		.config(function($routeProvider)
		{
			$routeProvider
				.when("/home",
				{
					templateUrl: "views/home/home.view.html"
				})
				.when("/login",
                {
                    templateUrl: "views/login/login.view.html",
                    controller: "LoginController",
                    controllerAs: "model"
                })
                .when("/register",
				{
					templateUrl: "views/register/register.view.html",
					controller: "RegisterController",
					controllerAs: "model"
				})
				.when("/profile",
                {
                    templateUrl: "views/profile/profile.view.html",
                    controller: "ProfileController",
                    controllerAs: "model"
                })
                .when("/search",
                {
                    templateUrl: "views/search/search.view.html",
                    controller: "SearchController",
                    controllerAs: "model"
                })
                .when("/friend",
                {
                    templateUrl: "views/friend/friend.view.html",
                    controller: "FriendController",
                    controllerAs: "model"
                })

                .when("/form",
                {
                    templateUrl: "views/form/form.view.html",
                    controller: "FormController",
                    controllerAs: "model"
                })
                .when("/user/:userId/form/:formId/fields",
                {
                    templateUrl: "views/field/field.view.html",
                    controller: "FieldController",
                    controllerAs: "model"
                })
                .when("/about",
                {
                    templateUrl: "views/about/about.html"

                })
                .when("/gallery",
                {
                    templateUrl: "gallery.html"

                })
                .when("/contact",
                {
                    templateUrl: "contact.html"

                })

                .otherwise({
                    redirectTo: "views/home/home.view.html"
                })
		});
})();