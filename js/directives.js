/**
 * Author: efthemiosprime
 * Date: 9/9/13
 * Time: 10:44 PM
 */

'use strict';
ArcDirectors.directive('navHandler', ["$location", function($location) {
    var isIE = function () {
        return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null)));
    }

    return {
        link: function (scope, element, attrs)
        {
            scope.$on('$routeChangeStart', function(){


                var menuIndicator =  element.find("#menu-arrow")
                var currentRoute = $location.path().replace(/^#/,'');
                currentRoute = currentRoute.replace(/\//g, "");
                if(isIE())
                {
                    TweenLite.to(menuIndicator, 0.5, {className:(currentRoute==="")?"home-ie":currentRoute+"-ie" });
                    return;
                }
                TweenLite.to(menuIndicator, 0.5, {className:(currentRoute==="")?"home":currentRoute });


            });
        }
    }
}]);


/*
ArcDirectors.directive("instantSearch", function () {
    return {
        scope :{
            keyWord: '='

        },
        link: function (scope, element, attrs)
        {
            var hilitor = new Hilitor(element);
            scope.$watch('keyWord', function(oldVal, newVal) {
                if(newVal)  hilitor.apply(scope.keyWord);
            });
        }
    }
});
*/

ArcDirectors.directive("pageContainSearchResult", function () {
    return {
        scope :{
            searchResult: '='
        },

        link: function (scope, element, attr)
        {
       //     console.log("element " + element)    ;
         //   console.log("element id" + element.attr.id)    ;
       //     console.log("xx " + $(element).attr('id'))    ;

          //  console.log("xx " + $(element).attr('id'))

            var id = attr.id;
            scope.$watch('searchResult', function(oldVal, newVal) {
                console.log("new Value xxx : " + newVal)
               if(newVal) scope.searchResult = newVal;
                angular.forEach(scope.searchResult, function(value,key){

                   TweenLite.to(element, 1, {})

                });
            });
        }
    }
});

ArcDirectors.directive("arcSlideshow", function () {
    var isIE = function () {
        return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null)));
    }

    return {



        link: function (scope, element, attr)
        {

            var slides = $(".slide");			//slides
           	var currentSlide = 0;				//keep track on the current slide
           	var stayTime = 3;					//time the slide stays
           	var slideTime = 1.3;				//fade in / fade out time

           	TweenLite.set(slides.filter(":gt(0)"), {autoAlpha:0});	//we hide all images after the first one
           	TweenLite.delayedCall(stayTime, nextSlide);				//start the slideshow

           	function nextSlide(){
           			TweenLite.to( slides.eq(currentSlide), slideTime, {autoAlpha:0} );		//fade out the old slide
           			currentSlide = ++currentSlide % slides.length;							//find out the next slide
           			TweenLite.to( slides.eq(currentSlide), slideTime, {autoAlpha:1} );		//fade in the next slide
           			TweenLite.delayedCall(stayTime, nextSlide);								//wait a couple of seconds before next slide
           	}

        }
    };
});
