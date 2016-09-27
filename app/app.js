'use strict';

// Declare app level module which depends on views, and components
angular.module('carousel', [
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate',

  'carousel.main',
  'carousel.carouselFactory'
]).
config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/main', {
    templateUrl: 'components/main/main.html',
    controller: 'MainCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/main'});
});
