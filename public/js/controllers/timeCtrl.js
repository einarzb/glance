app.controller('timeController', ['$scope', '$interval', function($scope, $interval) {


/* timer */
$scope.minutes;
$scope.seconds;
$scope.hours;

var totalSec = 0;
var tick = function(){
  totalSec++;
  $scope.seconds = pad(totalSec%60);
  $scope.minutes = pad(parseInt(totalSec/60));
  $scope.hours = pad(parseInt(totalSec/3600));
}

tick();
$interval(tick,1000)

   function pad(val){
       var valString = val + "";
       if(valString.length < 2)
       {
           return "0" + valString;
       }
       else
       {
           return valString;
       }
   }

 }]);
