/**
 * Author: efthemiosprime
 * Date: 9/9/13
 * Time: 10:44 PM
 */


'use strict';

ArcDirectors.controller('HomeController',
    function HomeController($scope, AppModel) {
        //TweenMax.to($("#menu-arrow"), 1, {className:"page"+page, ease:Power2.easeOut});
        $scope.data = AppModel.data[0].contents;
        $scope.quickInfo = $scope.data.quickInfo;
        $scope.aboutUs = $scope.data.aboutUs;
        $scope.latestNews = AppModel.data[4].contents;


    }
);