/**
 * Author: efthemiosprime
 * Date: 9/9/13
 * Time: 10:44 PM
 */


'use strict';

var ArcDirectors = angular.module('ArcDirectors',[])
    .config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl: 'pages/home.html',
            controller:'HomeController'
        });
        $routeProvider.when("/principals",{
            templateUrl: 'pages/principals.html',
            controller:'PrincipalsController'
        });
        $routeProvider.when("/directorship",{
            templateUrl: 'pages/directorship.html',
            controller:'DirectorShipController'
        });

        $routeProvider.when("/secretarial",{
            templateUrl: 'pages/secretarial.html',
            controller:'SecretarialController'
        });

        $routeProvider.when("/news",{
            templateUrl: 'pages/news.html',
            controller:'NewsController'
        });
        $routeProvider.when("/contact",{
            templateUrl: 'pages/contact.html',
            controller:'ContactController'
        });
        $routeProvider.when("/search",{
            templateUrl: 'pages/search.html',
            controller:'SearchController'
        });
        $routeProvider.when("/terms",{
            templateUrl: 'pages/terms.html'
        });
        $routeProvider.when("/links", {
            templateUrl: 'pages/links.html',
            controller:"LinksController"
        });

        /*
        $routeProvider.otherwise(
        {
            redirectTo: "/home"
        });
        */

    });



