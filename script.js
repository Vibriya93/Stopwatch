//Onload Function 
window.onload = function(){

    //Variable declaration for tens, seconds and minutes
    //AppendTens: Output variable into CSS
    let tens = 00;
    let seconds = 00;
    let minutes = 00;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let appendMinutes = document.getElementById("minutes");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");
    let Interval ;

    //Button Start function
    buttonStart.onclick = function() {
        
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        
    }

    //Button stop function
    buttonStop.onclick = function() {

        clearInterval(Interval);

    }

    //Button reset function
    buttonReset.onclick = function() {

        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
    }

    //Function for the timer
    function startTimer () {

        //Inkrement tens -> start timer
        tens++;
        
        //If tens are 9 or less add a 0 infornt --> 09
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        //If tens are 9 or higher, remove the 0.    
        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        //If tens heigher or equal log "second"
        if(tens > 99){
            console.log("seconds");

            //Start timer for seconds
            seconds++;
            //If seconds are 9 or less, add 0 infront
            appendSeconds.innerHTML = "0" + seconds;
            //reset tens to 0 to reset it's timer.
            tens = 0;
            //Add back the 0 since it's less then 9.
            appendTens.innerHTML = "0" + tens;
        }

        //If seconds higher then 9 remove the 0.
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        //If seconds reaches 60, console log "minute"
        if(seconds >= 60){
            console.log("minute");
            //Start minutes times
            minutes++;
            //Add 0 infront of minutes
            appendMinutes.innerHTML= "0" + minutes;
            //Reset seconds to 0
            seconds = 0;
            //Add back a 0 infront seconds value.
            appendSeconds.innerHTML = "0" + seconds;
        }

        //If minutes higher then 9, remove 0 infront of value.
        if(minutes > 9){
            //Remove the 0 infront of minutes value.
            appendMinutes.innerHTML = minutes;
        }

    }

}
