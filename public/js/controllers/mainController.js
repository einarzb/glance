app.controller('mainController', ['$scope', 'glanceFactory', '$state', function($scope, glanceFactory, $state) {
$scope.cats = [];

//getting looks from db
  $scope.getCats = glanceFactory.getCats;

  $scope.getCats()
  .then(function(response){
    $scope.cats = response; //the items are populating the array
    console.log($scope.cats);
  })
  .catch(function(error){
    console.log(error);
  })

}]);
