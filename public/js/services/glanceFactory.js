app.factory('glanceFactory', function($http) {

  //function get looks populated in mongoose to the ctrler
    function getCats(){
      return $http({
      method: 'GET',
      url: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json&nojsoncallback=1'
      }).then(function (response) {
        return response.data.items;
      });
    }
    return {getCats:getCats}
});
