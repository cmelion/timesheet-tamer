(function(){
  'use strict';
  var components = angular.module('timesheetTamer.components', []);
  angular.componentFactory.moduleDecorator(components);

  var app = angular.module('timesheetTamer', [
    'ngAnimate',
    'kennethlynne.componentFactory',
    'ngSymbiosis.utils',
    'ngSymbiosis.routeProvider',
    'ngSymbiosis.repository',
    'ngSymbiosis.model',
    'timesheetTamer.components',
    'ajoslin.promise-tracker',
    'ui.router',
    'mgcrea.pullToRefresh'
  ]);
  angular.componentFactory.moduleDecorator(app);
}());
