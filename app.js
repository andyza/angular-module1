
(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);


  LunchCheckController.$inject = ['$scope'];
   function LunchCheckController($scope) {

      $scope.checkLunch = function() {
      $scope.retVal = "";
      $scope.retColor="green";
      if (!String.prototype.trim) {
        String.prototype.trim = function () {
          return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
      }

      var lm = $scope.lunchMenu.trim();
      lm=lm.replace(/,,/i, ',');//replace any empty values - 'a,,c' = 'a,c'
      var lunchVal = lm ? lm.split(',') : ""; // it splits the text on comma
      var lunchLen = lunchVal.length;

      if(lunchLen==0){
          $scope.retVal="Please enter data first";
          $scope.retColor="red";
        }else if(lunchLen>3){
          $scope.retVal="Too much!";
        }else{
          $scope.retVal="Enjoy!";
        };
      }
  };


})();
