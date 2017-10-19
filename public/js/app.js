var app = angular.module('glanceApp', ['ui.router']);

app.directive("timer", function($interval){
    return {
      scope: true,
      template: "<span class='timerUnit'>{{hours}} : {{minutes}} : {{seconds}}</span>",
      link: function ($s, $e, $a) {
        $s.minutes;
        $s.seconds;
        $s.hours;
        var time = 0;

          function tick(){
             time++;
             $s.seconds = pad(time%60);
             $s.minutes = pad(parseInt(time/60));
             $s.hours = pad(parseInt(time/3600));
           }

           function isEven(number) {
              if(number % 2 === 0){
                console.log(number + " is even")
              }else if(isNaN(number)){
                return "is Nan";
              }else{
                console.log(number + " is odd")
              }
            };

           function pad(val){
                   isEven(val);
                   var timeUnit = val + "";
                   if(timeUnit.length < 2){
                       return "0" + timeUnit;
                   }
                   else {
                       return timeUnit;
                   }
           };

           tick();
           var timer = $interval(tick,1000);

           $e.on('$destroy', function() {
             $interval.cancel(timer);
           });
         }
    };
});

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
