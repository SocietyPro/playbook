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
