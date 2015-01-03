'use strict';

angular.module('timesheetTamer')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('globalOptions.collaborators', stateFactory('Collaborators', {
            url: '/collaborators',
            templateUrl: 'states/global-options/collaborators/index/main-view.html'
        }));
    })
    .controller('CollaboratorsCtrl', function ($scope) {
        $scope.foo = 'bar';
    });
