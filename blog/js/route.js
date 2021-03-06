var app = angular.module("blog", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'tpl/home.html',
      controller: 'homeCtrl'
    })
    .when('/gulp', {
      templateUrl: 'tpl/gulp.html',
    })
    .when('/this', {
      templateUrl: 'tpl/this.html',
    })
    .when('/jiqiao', {
      templateUrl: 'tpl/jiqiao.html',
      controller: 'jiqiaoCtrl'
    })
    .when('/comment', {
      templateUrl: 'tpl/comment.html',
    })
    .when('/moban', {
      templateUrl: 'tpl/moban.html',
    })
    .when('/kuayu', {
      templateUrl: 'tpl/kuayu.html',
    })
    .when('/mobile', {
      templateUrl: 'tpl/mobile.html',
    })
    .when('/stickey', {
      templateUrl: 'tpl/stickey.html',
    })
    .when('/timu', {
      templateUrl: 'tpl/timu.html',
      controller: 'timuCtrl'
    })
    .when('/reg', {
      templateUrl: 'tpl/reg.html',
    })
    .when('/zuopin', {
      templateUrl: 'tpl/zuopin.html',
    })
    .when('/es6', {
      templateUrl: 'tpl/es6.html',
    })
    .when('/loading', {
      templateUrl: 'tpl/loading.html',
    })
    .when('/handRoute', {
      templateUrl: 'tpl/handRoute.html',
    })
    .when('/http', {
      templateUrl: 'tpl/http.html',
    })
    .otherwise({
      redirectTo: '/'
    });
  // $locationProvider.html5Mode(true);
});
app.run(['$rootScope', '$location', function($rootScope, $location) {
  /* 监听路由的状态变化 */
  $rootScope.$on('$routeChangeStart', function(evt, next, current) {
    console.log('route begin change');
  });
  $rootScope.$on('$routeChangeSuccess', function(evt, current, previous) {
    console.log('route have already changed ：' + $location.path());
  });
}])
