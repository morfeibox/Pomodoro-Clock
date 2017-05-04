
// setting initial variable
 var sessionM=25;
 var sessionS=59;
 var breakL=5;


 window.onload = function sessionLength() {

     //setting the initial params
     document.getElementById("session-increase").addEventListener('click', function () {
         sessionM++;
         setSessionLength();
     });

     document.getElementById("session-decrease").addEventListener('click', function () {
         if( sessionM>5 ) {
             sessionM--;
         }
         setSessionLength();
     });

     document.getElementById("break-decrease").addEventListener('click', function () {
         if (breakL>1) {
             breakL--;
         }
         breakLength();
     });

     document.getElementById("break-increase").addEventListener('click', function () {
         breakL++;
         breakLength();
     });

     // displaying params
     function setSessionLength() {
         document.getElementById("session-length").innerHTML = sessionM;
         document.getElementById("clock-munites").innerHTML = sessionM;

     }

     // setting break length
     function breakLength() {
         document.getElementById("break-time").innerHTML = breakL;


     }

 };

        // starting session

      document.getElementById("start-session").addEventListener('click', function (){
        // prevent more calls for myInterval()
          if (!window.doesThisOnce) {
              myInterval();
              sessionM=sessionM-1;
          }
          window.doesThisOnce = true;

          document.getElementById("clock-munites").style.color = "white";
          document.getElementById("clock-seconds").style.color = "white";
          document.getElementById("clock-munites").innerHTML = sessionM;

      });

           // adding zero to the seconds in order to keep appropriate number format
         function leadingZero(number) {
             var result;
             if(number < 10){
                 result = "0" + number;
             } else {
                 result = number;
             }
             return result;
         }


          // printing  session results and verifying the timer info
         function printSec() {
             sessionS = leadingZero(sessionS);
             sessionM = leadingZero(sessionM);

             if (sessionS == "0"+ 0 && sessionM == 0){
              stoptimer();
              document.getElementById("clock-seconds").innerHTML = "00";
              document.getElementById("clock-munites").innerHTML="0";
              audio.play();
              breakTime();
              return;
             }

             if (sessionS == 0) {
                 sessionM--;
                 sessionS = 59;
                 document.getElementById("clock-munites").innerHTML = sessionM;
             }
             document.getElementById("clock-seconds").innerHTML = sessionS;
             sessionS--;
         }

        // interval function
             var id;
             function myInterval() {
                 id = setInterval(function () {
                     printSec();
                 }, 1000);
             }

          // reserting the information
         document.getElementById("reset").addEventListener('click', function(){
             clearInterval(id);
             sessionM=25;
             sessionS=59;
             breakL=5;
             document.getElementById("clock-munites").style.color = "white";
             document.getElementById("clock-seconds").style.color = "white";
             document.getElementById("session-length").innerHTML = sessionM;
             document.getElementById("clock-munites").innerHTML = sessionM;
             document.getElementById("clock-seconds").innerHTML = "00";
             document.getElementById("break-time").innerHTML = breakL;
             window.doesThisOnce = false;
         });


        function stoptimer(){
            clearInterval(id);
        }

        // break session interval function

         function myInterval2() {
             id = setInterval(function () {
                 printSecBreak();
             }, 1000);

         }

         // printing  break results and verifying the timer info
         function printSecBreak() {
             sessionS = leadingZero(sessionS);

             if (sessionS == "0"+ 0 && breakL == 0){
                         stoptimer();
                 document.getElementById("clock-seconds").innerHTML = "00";
                 document.getElementById("clock-munites").innerHTML="0";
                  return;
             }

             if (sessionS == 0) {
                 sessionS = 59;
                 breakL--;
                 document.getElementById("clock-munites").innerHTML = breakL;

             }

             document.getElementById("clock-seconds").innerHTML = sessionS;
             sessionS--;

         }

       //displaying break time information and styles
        function breakTime(){
            document.getElementById("clock-munites").style.color = "#74DA9E";
            document.getElementById("clock-seconds").style.color = "#74DA9E";
            document.getElementById("clock-munites").innerHTML = breakL;
            myInterval2();
        }


        //play audio file when session is finished
        var audio=new Audio('media/alarm.mp3');








