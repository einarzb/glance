app.factory('dataFactory',
  ['$http', function($http) {

  function getCats(){
        return $http({
          method: 'GET',
          url: 'https://shared.feedox.com/demoJson.json'})
          .then(function(response){
            return response.data.items;
          })
          .catch(function(error){
            console.log(error);
          })
    }

  return {getCats:getCats}
}]);
