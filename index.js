const timerStartBtn = document.querySelector("#start-timer");
const timeDisplay = document.querySelector('#time')

let timerInterval = null;
let remainingTime = 5000; 
let clickCount = 0; 

timerStartBtn.addEventListener("click", function () {
    clickCount++;

    if(!timerInterval){
        timerInterval = setInterval(() => {
            remainingTime = remainingTime-10;
            if(remainingTime <=0){
                remainingTime = 0;
                clearInterval(timerInterval);
                timerInterval = null;
                alert(`${clickCount} clicks in 5 seconds`);    
            }
            timeDisplay.textContent = (remainingTime/1000).toFixed(3);
        }, 10);
    }
    
  });