'use strict';
angular.module('carousel.carouselFactory', [])
    .factory('CarouselFactory', function() {
        var getCarouselImageData = function() {
            return [
                {
                    'image' : 'burger.png',
                    'alt' : 'Burger',
                    'title' : 'Burger',
                    'id' : 0
                },
                {
                    'image' : 'pizza.png',
                    'alt' : 'Pizza',
                    'title' : 'Pizza',
                    'id' : 1
                },
                {
                    'image' : 'samosa.png',
                    'alt' : 'Samosa',
                    'title' : 'Samosa',
                    'id' : 2
                }
            ];
        };

        return {
            getCarouselImageData : function(){
                return getCarouselImageData();
            }
        };
    });