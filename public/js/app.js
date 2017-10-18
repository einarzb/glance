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

.state('auth', {
  url: '/authorization?id&name',
  controller: function($stateParams, $rootScope, $state , $http) {
    console.log($stateParams);
    console.log($stateParams.id);
    if ($stateParams.id) {
      var user = {
        name: $stateParams.name,
        id: $stateParams.id
      }
      console.log(user.name);
      console.log(user.id);
    localStorage.setItem("user", JSON.stringify(user));
    $rootScope.currentUser = $stateParams.name;
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
