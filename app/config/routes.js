'use strict';

angular.module('timesheetTamer')
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.when('', '/global-options/track-time');
        $urlRouterProvider.otherwise("/global-options/track-time");
    });
