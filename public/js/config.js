
app.config(
    ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider',
      function($stateProvider, $urlRouterProvider, $httpProvider,$locationProvider) {
    //default
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);

      //states
      $stateProvider

      .state('home',{
        url:'/home',
        controller:'mainController',
        templateUrl:'/templates/home.html'
      })

      .state('stopwatch',{
        url:'/stopwatch',
        controller:'mainController',
        templateUrl:'/templates/stopwatch.html'
      })

      .state('gallery',{
        url:'/gallery',
        controller:'mainController',
        templateUrl:'/templates/gallery.html'
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
}]);
