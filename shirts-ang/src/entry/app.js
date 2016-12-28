require("../../sass/main.scss");
var shoeStoreApp = angular.module('shoeStoreApp', ['ngRoute','storeControllers']);

shoeStoreApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
    }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'controllers'
    }).otherwise({
        redirectTo: '/home'
    });
}]);
// controllers引入
import controllers from '../entry/controllers.js';
