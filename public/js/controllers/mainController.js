app.controller('mainController', ['$scope', 'glanceFactory', '$state', function($scope, glanceFactory, $state) {
 $scope.getCats = glanceFactory.getCats();
 console.log($scope.getCats);

}]);
