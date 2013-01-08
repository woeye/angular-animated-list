angular.module('app.services', [])
  .factory('messageGenerator', function($rootScope) {

    setInterval(function() {
      $rootScope.$apply(function() {
        $rootScope.$broadcast('event:new-data', [
          {
            text: 'item-' + new Date().getTime()
          },
          {
            text: '2nd-item-' + new Date().getTime()
          }
        ]);
      });
    }, 500);

    return {};
  });