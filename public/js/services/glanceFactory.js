app.factory('glanceFactory', function($http) {

  function getCats(){
      return $http({
      method: 'GET',
      url: 'https://shared.feedox.com/demoJson.json'
      }).then(function (response) {
        return response.data.items;
      });
    }
    return {getCats:getCats}
});
