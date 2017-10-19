app.controller('AuthCtrl', ['$scope' , '$rootScope', '$http', function($scope , $rootScope, $http){

$scope.logout = function() {
  $rootScope.currentUser = null;
  delete $http.defaults.headers.common.Authorization;
  localStorage.removeItem("user");
}

}]);
