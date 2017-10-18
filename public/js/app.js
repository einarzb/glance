var app = angular.module('glanceApp', ['ui.router']);

app.config(function( $stateProvider, $urlRouterProvider, $httpProvider,$locationProvider) {
//default
$urlRouterProvider.otherwise('/home');

$locationProvider.html5Mode(true);
$stateProvider
.state('home',{
  url:'/home',
  controller:'mainController',
  templateUrl:'/templates/home.html'
})

.state('gallery',{
  url:'/gallery',
  controller:'mainController',
  templateUrl:'/templates/gallery.html'
})

.state('timer',{
  url:'/timer',
  controller:'mainController',
  templateUrl:'/templates/timer.html'
})

.state('auth', {
  url: '/authorization?id&name&photo',
  controller: function($stateParams, $rootScope, $state , $http) {
    if ($stateParams.id) {
      var user = {
        name: $stateParams.name,
        id: $stateParams.id,
        photo:$stateParams.photo,
        fname:$stateParams.first_name
      }

    localStorage.setItem("user", JSON.stringify(user));
    $rootScope.currentUser = user;

    //set the header for all requests
    $http.defaults.headers.common.Authorization = 'User ' + user.name;
    $state.go('home');
    }
  }})
});

app.run(function($rootScope) {
  //retrieve user from local storage
  //if a user was retrieved set the currentUser
  user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    $rootScope.currentUser = user.name;
  }
});
