'use strict';

angular.module('timesheetTamer')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('globalOptions.trackTime', stateFactory('TrackTime', {
            url: '/track-time',
            templateUrl: 'states/global-options/track-time/index/main-view.html'
        }));
    })
    .controller('TrackTimeCtrl', function ($scope) {
        $scope.foo = 'bar';
        console.log('instantiated Track Time Controller');
        $scope.onReload = function () {
          console.log('performed pull to refresh');
        }
    });
