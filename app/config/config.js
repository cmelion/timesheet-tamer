    angular.module('timesheetTamer')
        .constant('Config', {
            viewsDir:               'views/',
            componentsDir:          'components/',
            statesDir:               'states/',
            API: {
                useMocks:           true,
                protocol:           window.location.protocol.split(':')[0],
                host:               window.location.hostname,
                port:               String(window.location.port || 80),
                path:               '/api',
                fakeDelay:          500
            }
        })
        .config(function (componentFactoryProvider) { componentFactoryProvider.setViewPath(function (componentSnakeName, componentName) {
            return 'components/' + componentSnakeName + '/' + componentSnakeName + '.html';
        })})
        .factory('BaseUrl', function (Config) {
            return (Config.API.protocol + '://' + Config.API.host + ':' + Config.API.port + '/');
        })
        .factory('APIBaseUrl', function (Config) {
            return (Config.API.protocol + '://' + Config.API.host + ':' + Config.API.port + Config.API.path + '/');
        })
        .run(function () {
        FastClick.attach(document.body);
      });




