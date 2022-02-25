var container = document.getElementById("container");
var displayLap = document.getElementById("displayLap");

function init(){
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    var startButton = document.getElementById("startButton");
    var lapButton = document.getElementById("lapButton");
    var flag = false;
    var timerId = false;
    var counter = 0;
    var seconds;
    var minutes;
    var hours;
    startButton.addEventListener("click", function(){
        
        if(flag){
            clearInterval(timerId);
            startButton.innerHTML = "Start";
            lapButton.innerHTML = "Reset"
            flag = false;
        }
        else{
            timerId = setInterval(function(){
                counter++;
                
                seconds = counter%60;
                minutes = parseInt(counter/60);
                hours = parseInt(counter/3600);


                if(seconds < 10)
                    second.innerHTML = "0"+seconds;
                else
                    second.innerHTML = seconds;

                if(minutes < 10)
                    minute.innerHTML = "0"+minutes;
                else
                    minute.innerHTML = minutes;

                if(hours < 10)
                    hour.innerHTML = "0"+hours;
                else
                    hour.innerHTML = hours;
            }, 1000);
            startButton.innerHTML = "Stop";
            lapButton.innerHTML = "Lap";
            flag = true;
        }
        
    });
    var count = 0;
    lapButton.addEventListener("click", function(){
        if(flag){
            count++;
            var lapDiv = document.createElement("div");
            lapDiv.setAttribute("id", "lapDiv");

            var lap = document.createElement("h3");
            lap.innerHTML = "Lap "+count;
            lap.setAttribute("id", "lapHeading");


            var laps = document.createElement("h3");
            laps.innerHTML = hour.innerHTML + ":" + minute.innerHTML + ":" + second.innerHTML;
            laps.setAttribute("id", "lapValue");
            
            lapDiv.appendChild(lap);
            lapDiv.appendChild(laps);
            displayLap.appendChild(lapDiv);
        }
        else{
            counter = 0;
            hour.innerHTML = "00";
            minute.innerHTML = "00";
            second.innerHTML = "00";
            displayLap.innerHTML = "";
            count = 0
        }
    });

}

init();