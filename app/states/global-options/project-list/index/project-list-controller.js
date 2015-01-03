'use strict';

angular.module('timesheetTamer')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('globalOptions.projectList', stateFactory('ProjectList', {
            url: '/project-list',
            templateUrl: 'states/global-options/project-list/index/main-view.html'
        }));
    })
    .controller('ProjectListCtrl', function ($scope) {
        $scope.foo = 'bar';
    });
