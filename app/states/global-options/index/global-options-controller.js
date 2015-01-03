'use strict';

angular.module('timesheetTamer')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('globalOptions', stateFactory('GlobalOptions', {
            url: '/global-options',
            templateUrl: 'states/global-options/index/main-view.html'
        }));
    })
    .controller('GlobalOptionsCtrl', function ($scope) {
        $scope.foo = 'bar';

        $scope.$on('$stateChangeStart', function(){
          $scope.expanded = false;
        });
    });
