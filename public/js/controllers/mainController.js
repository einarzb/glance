app.controller('mainController',
  ['$scope', 'dataFactory', '$state',
    function($scope, dataFactory, $state) {

  $scope.getCats = dataFactory.getCats()
    .then(function(response){
      $scope.cats = response; 
    })
    .catch(function(error){
      console.log(error);
    })

}]);
