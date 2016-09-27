'use strict';


angular.module('carousel.main', [])
  .controller('MainCtrl', function($scope, CarouselFactory) {
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = CarouselFactory.getCarouselImageData();
  });