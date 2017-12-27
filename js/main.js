"use strict";




(function (w){
    requirejs.config({
        // 所有脚本的跟目录， 相对于 html
        baseUrl: 'js',
        paths: {
            // angular 脚本的路径， 相对于 baseUrl
            'angular': 'https://cdn.bootcss.com/angular.js/1.6.8/angular.min',
            'angular-route': 'https://cdn.bootcss.com/angular.js/1.6.8/angular-route.min'
        },
        shim: {
            // 需要导出一个名称为 angular 的全局变量， 否则无法使用
            'angular' : { exports: 'angular' },
            // 设置 angular 的其它模块依赖 angular 核心模块
            'angular-route': { deps: ['angular'] }
        }
    });

    var app = angular.module('app', ['ngRoute']);
    app.config({

    });


})(window);

