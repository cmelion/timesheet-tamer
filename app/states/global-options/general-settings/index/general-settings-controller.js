'use strict';

angular.module('timesheetTamer')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('globalOptions.generalSettings', stateFactory('GeneralSettings', {
            url: '/general-settings',
            templateUrl: 'states/global-options/general-settings/index/main-view.html'
        }));
    })
    .controller('GeneralSettingsCtrl', function ($scope) {
        $scope.foo = 'bar';
    });
