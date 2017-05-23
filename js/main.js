(function(){

angular.module('myApp', ['ngMaterial', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
   
    $stateProvider
        .state('search', {
            url: '/',
            templateUrl: 'templates/search.html',
            controller: 'SearchController'
        })
        .state('details', {
             url: '/details/:parent/?nick',
            templateUrl: 'templates/details.html',
            controller: 'DetailController'
        });
     $urlRouterProvider.otherwise('/');
  });
})()