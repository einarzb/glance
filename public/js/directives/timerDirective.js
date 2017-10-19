app.directive("timer", function($interval){
    return {
      scope: true,
      template: "<span class='timerUnit'>{{hours}} : {{minutes}} : {{seconds}}</span>",
      link: function ($scope, $element, $attributes) {
        $scope.minutes;
        $scope.seconds;
        $scope.hours;
        var time = 0;

          function tick(){
             time++;
             $scope.seconds = pad(time%60);
             $scope.minutes = pad(parseInt(time/60));
             $scope.hours = pad(parseInt(time/3600));
           }

           function isEven(number) {
              if(number % 2 === 0){
                console.log(number + " is even");
                //append class even to $scope
              } else if(isNaN(number)){
                return "is Nan";
              }else{
                console.log(number + " is odd")
              }
            };

           function pad(val){
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

           tick();
           var timer = $interval(tick,1000);

           $element.on('$destroy', function() {
             $interval.cancel(timer);
           });
         }
    };
});
