define(['js/app'], function (app) {
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            'templateUrl': 'module/index/index.html',
            'controller': 'index-ctrl',
            'resolve': {
                deps: app.loadMyJs([
                    'css!module/index/index',
                    'module/index/index'
                ])
            }
        }).when('/home', {
            'templateUrl': 'module/home/index.html',
            'controller': 'home-ctrl',
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