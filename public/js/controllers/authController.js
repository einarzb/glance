app.controller('AuthCtrl', function($scope , $rootScope, $http) {
  console.log($rootScope.currentUser);

  $scope.logout = function() {
    $rootScope.currentUser = null;
    delete $http.defaults.headers.common.Authorization;
    localStorage.removeItem("user");
  }
});
