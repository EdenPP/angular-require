define(['js/app'], function (app) {
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            'templateUrl': 'module/index/index.html',
            'resolve': {
                deps: app.loadMyJs([
                    'css!module/index/index',
                    'module/index/index'
                ])
            }
        }).when('/home', {
            'templateUrl': 'module/home/index.html',
            'resolve': {
                deps: app.loadMyJs([
                    'css!module/home/index',
                    'module/home/index'
                ])
            }
        }).otherwise({
            redirecTo: '/'
        });
    }]);
});