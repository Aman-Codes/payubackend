var payuApp = angular.module('payuApp', ['ngRoute']);

payuApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/view/main.html',
            controller: 'mainController'
        })

        .otherwise({ redirectTo: '/' });
});