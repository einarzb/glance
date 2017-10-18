app.controller('mainController', ['$scope', 'glanceFactory', '$state', function($scope, glanceFactory, $state) {
$scope.cats = [];

$scope.getCats = glanceFactory.getCats;

$scope.getCats()
  .then(function(response){
    $scope.cats = response; //the items are populating the array
  })
  .catch(function(error){
    console.log(error);
  })

}]);
