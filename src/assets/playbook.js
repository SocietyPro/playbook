angular.module('playbookModule', ['ngMaterial'])

.controller('playbookCtrl', function($scope, $timeout, $mdSidenav) {
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };
})

.controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
  $scope.close = function() {
    $mdSidenav('left').close();
  };
})

/*
  $('#leftSideNav a').click(
    (function(theScope){
      return function(event){
        console.log('TOC link clicked. Closing sidenav.');
        theScope.close();
      }
    })($scope);
  );
*/
/*
.directive('A', function($mdSidenav){
  return {
    restrict: 'E',
    link: function(scope, element, attr) {
      element.on('click', function(event) {
        // Prevent default dragging of selected content
        //event.preventDefault();
        $mdSidenav('left').close();
      });
    };
  }
})
*/