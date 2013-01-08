var app = angular.module('app', ['app.services'])
  .directive('animated', function($timeout) {
    return function(scope, element, attrs) {
      //console.log("running!");
      /*console.log(element);
      $timeout(function() {
        element.css('marginTop', '0');
      }, 10);*/

      scope.$watch('itemGroups', function() {
        console.log("Got new items!");
        $timeout(function() {
          element.find('.group:first-child').css('marginTop', 0);
        }, 10);
      }, true);
    };
  });

function ListCtrl($scope, $timeout, messageGenerator) {
  $scope.itemGroups = [];

  $scope.$on('event:new-data', function(evt, data) {
    console.log(data);

    $scope.itemGroups.unshift(data);
    //$scope.itemGroups = $scope.itemGroups.slice(0, 6);

    //$scope.$digest();
  });

}