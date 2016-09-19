/**
 * Author: efthemiosprime
 * Date: 9/9/13
 * Time: 10:44 PM
 */

'use strict';

ArcDirectors.controller('AppController',
    function AppController($scope,$location, AppModel) {

        $scope.dateNow =  Date.now();

        $scope.data = AppModel.data;
        $scope.homeData = $scope.data[0].contents;
        $scope.principalsData = $scope.data[1].contents;
        $scope.servicesData = $scope.data[2].contents;
        $scope.newsData = $scope.data[3].contents;

        /*
        $scope.searchString="";


        $scope.$on('$routeChangeSuccess', function(){
             if($location.path() !== "/search") $scope.searchString= "";

        });


        $scope.onInstantSearchUpdate = function () {

            AppModel.data.searchString= this.searchString.toLowerCase();

            $scope.$broadcast("ArcDirectors.onUpdateSearchInput")  ;

            if(!this.searchString) {

                if($scope.previousRoute)
                $location.path($scope.previousRoute);

                return;
            }

            var keyword =  this.searchString.toLowerCase();
            if($location.path() !== "/search")
            {
                $scope.previousRoute = $location.path();
                $location.path("/search");
            }

            AppModel.data.result =[];
            var result = [];

            // Using the forEach helper method to loop through the array
             angular.forEach($scope.data, function(item){
                     //    console.log("value : " + value);
              //   console.log("key : " + key);
                 var dataString = JSON.stringify($scope.data);
                 dataString.toLowerCase();

                 var obj = {};
                 switch (item.page)
                 {
                     case "home":
                     {
                         var homeString = "home ";
                         angular.forEach($scope.homeData, function(value,key){
                             if(key === "quickInfo")
                             {
                                 homeString += " quickInfo " ;
                                 homeString += " latest news ";
                                 homeString += value.title;
                                 homeString += value.info;


                             }

                             if(key === "aboutUs")
                             {
                                 homeString += " about us ";
                                 angular.forEach(value.entries, function(item){
                                        homeString += " " + item.p;
                                 });
                             }

                         });

                         homeString = homeString.toLowerCase();
                         if (homeString.indexOf(keyword) !== -1)
                         {
                             obj = {page:"HOME", data:"...is a professional services firm based in the Cayman Islands specialising in the provision of non-executive, independent directorship services to the..."};
                             result.push(obj);
                         }

                         break;
                     }

                     case "principals":
                     {
                         var principalsDataString = "principals ";
                         angular.forEach($scope.principalsData, function(item){
                             angular.forEach(item, function(principal){

                                 principalsDataString += principal.name;
                                 principalsDataString += principal.description;
                                 principalsDataString += principal.o;
                                 principalsDataString += principal.m;
                                 principalsDataString += principal.f;
                                 principalsDataString += principal.e;

                             });
                         });

                         principalsDataString = principalsDataString.toLowerCase();
                         if (principalsDataString.indexOf(keyword) !== -1)
                         {
                             obj = {page:"PRINCIPALS", data:"..is a Principal of A.R.C. Directors Ltd. He has over thirty years experience in the hedge fund and futures industry and his previous..."};
                             result.push(obj);
                         }
                         break;
                     }


                     case "services":
                     {
                         var servicesDataString="services ";
                         angular.forEach($scope.servicesData, function(value, key){

                             if(key === "intro")
                             {
                                 angular.forEach(value, function(item){
                                     servicesDataString +=   item.p;
                                 });
                             }
                             if(key === "items")
                             {
                                 angular.forEach(value, function(item){
                                     servicesDataString +=   item.title;
                                     servicesDataString +=   item.desc;
                                 });
                             }

                         });

                         servicesDataString = servicesDataString.toLowerCase();
                         if (servicesDataString.indexOf(keyword) !== -1)
                         {
                             obj = {page:"SERVICES", data:"ARC offers its clients non-executive, independent directorship services which include at their core the exercise of an experienced independent judgment..."};
                             result.push(obj);
                         }
                         break;

                     }

                     case "news":
                     {
                         var newsDataString=" news ";
                         angular.forEach($scope.newsData.items, function(item){

                             newsDataString += item.date;
                             newsDataString +=  item.title;
                             newsDataString +=  item.entry;

                         });

                         newsDataString = newsDataString.toLowerCase();
                         if (newsDataString.indexOf(keyword) !== -1)
                         {
                             obj = {page:"NEWS", data:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut..."};
                             result.push(obj);
                         }
                         break;

                     }

                     case "contact":
                     {
                         var contactData = "contact us ARC Directors Ltd P.O. BROCHURE Box 10250 Grand Pavilion Commercial Centre Suite # 7802 West Bay Road Grand Cayman KY1-1003 Cayman Islands Alan Tooker Damian Juric Shavourne Rolle Don Joffe Principal djuric atooker srolle djoffe email phone fax mobile arcdirectors.com 1 345 769 3400 13457693400 13455258577"
                         contactData = contactData.toLowerCase();
                         if (contactData.indexOf(keyword) !== -1)
                         {
                             obj = {page:"CONTACT", data:"ARC Directors Ltd P.O. Box 10250 Grand Pavilion Commercial Centre Suite # 7802 West Bay Road Grand Cayman KY1-1003 Cayman Islands..."};
                             result.push(obj);

                         }
                          break;
                     }


                     case "terms":
                         var termsData = AppModel.data[5].contents.data;
                         termsData = termsData.toLowerCase();
                         if (termsData.indexOf(keyword) !== -1)
                         {
                             obj = {page:"TERMS", data:"This website (the “Website”’) is comprised of various web pages operated by A.R.C Directors Ltd. (“A.R.C.”), which has its registered..."};
                             result.push(obj);

                         }
                         break;


                 }


             });

            AppModel.data.result =result;
            $scope.$broadcast("ArcDirectors.onUpdateSearchResult")  ;


        };

        $scope.resetSearchInput = function (){
            this.searchString="";
        };

        */

    }
);