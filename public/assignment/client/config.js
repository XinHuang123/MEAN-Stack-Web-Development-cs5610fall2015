(function() {
    'use strict';
	angular
		.module("FormBuilderApp")
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
                .otherwise({
                    redirectTo: "/home"
                })
		});
})();