app.controller('timeController', ['$scope', '$interval', function($scope, $interval) {

    $scope.minutes;
    $scope.seconds;
    $scope.hours;

    var time = 0;

   function tick(){
      time++;
      $scope.seconds = pad(time%60);
      //odd even
      $scope.minutes = pad(parseInt(time/60));
      $scope.hours = pad(parseInt(time/3600));
    }

    function pad(val){
            var timeUnit = val + "";
            if(timeUnit.length < 2){
                return "0" + timeUnit;
            }
            else {
                return timeUnit;
            }
    };

    tick();
    $interval(tick,1000)
 }]);
