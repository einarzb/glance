app.directive("stopwatch",
  ['$interval', 'stopWatchService',
   function($interval, stopWatchService){

    return {
      scope: true,
      template: "<span class='timerUnit' ng-class='secColor'>{{hours}} : {{minutes}} : {{seconds}}</span>",
      link: function ($scope, $element, $attributes) {
        $scope.minutes;
        $scope.seconds;
        $scope.hours;

          function tick(){
             stopWatchService.counter++;
             $scope.seconds = padSec(stopWatchService.counter%60);
             $scope.minutes = pad(parseInt(stopWatchService.counter/60));
             $scope.hours = pad(parseInt(stopWatchService.counter/3600));
           }

          function isEven(number) {
              if(number % 2 === 0){
                $scope.secColor = "even";
                //safety first (:
              } else if(isNaN(number)){
                return "is Nan";
              }else{
                $scope.secColor = "odd";
              }
            };

           function padSec(val){
                   if (val < 60){
                     isEven(val)
                   }
                   var timeUnit = val + "";

                   if(timeUnit.length < 2){
                       return "0" + timeUnit;
                   }
                   else {
                       return timeUnit;
                   }
           };

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
           var timer = $interval(tick,1000);

           $element.on('$destroy', function() {
             $interval.cancel(timer);
           });
         }
    };
}]);
