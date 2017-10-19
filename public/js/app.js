var app = angular.module('glanceApp', ['ui.router']);

app.run(function($rootScope) {
  //retrieve user from local storage
  //if a user was retrieved set the currentUser
  user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    $rootScope.currentUser = user.name;
  }
});
