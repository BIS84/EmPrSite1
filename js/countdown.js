"use strict";

let countdown = () => {
    let minutes = +window.prompt("Обратный отсчет (минут 1 - 60). Введите целое число", 10);

    let seconds = 0;

    if (minutes > 0 && minutes <= 60 && minutes % 1 === 0) {
        function printCountdown() {

            let minutesStr;
            let secondsStr;
    
            if (minutes < 10) {
                minutesStr = `0${minutes}`;
            } else {
                minutesStr = minutes;
            };
            if (seconds < 10) {
                secondsStr = "0" + seconds;
            } else {
                secondsStr = seconds;
            };
    
            if (minutes == 0 && seconds == 0) {
                clearInterval(intervalId);
            }
    
            document.getElementById("time").innerHTML = `<p>${minutesStr} : ${secondsStr}</p>`;
            if (seconds == 0) {
                seconds = 60;
                minutes--;
            };
            seconds--;
    
        };
    
        console.log(`${minutes} : ${seconds}`);
    
        let intervalId = setInterval(printCountdown, 1000);
    }
}

