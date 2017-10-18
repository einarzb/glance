app.factory('glanceFactory', function($http) {
  var glanceFactory = {};

  glanceFactory.getCats = function(){
    return $http({
      method: 'GET',
      url: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json&&nojsoncallback=1'
      }).then(function (response) {
      console.log(response);
      var cats = response.data.items;
      console.log(cats);
      return cats;
      }, function errorCallback(response) {
          alert(response.data);
      });
}
return glanceFactory;
});
