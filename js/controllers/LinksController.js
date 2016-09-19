/**
 * Created by efthemiosprime on 1/25/14.
 */


'use strict';

ArcDirectors.controller('LinksController',
    function LinksController($scope, AppModel) {
        //TweenMax.to($("#menu-arrow"), 1, {className:"page"+page, ease:Power2.easeOut});
        $scope.data = AppModel.data[7].contents;



    }
);