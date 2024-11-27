const timerStartBtn = document.querySelector("#start-timer");
const timeDisplay = document.querySelector('#time')

let time = 5000; //in ms
let clicks = 0; //click count
let isTimerRunning = false;
let isTimerFinished = false;

timerStartBtn.addEventListener('click', function(e){
     // console.log(e.target.id, clicks) //just testing 
     if (isTimerRunning) {
        clickIncrement();
    } else if (time >= 5000) {
        startTimer(time);
    }
    if(isTimerFinished){
        location.reload()
    }
    
    
})

function clickIncrement(){
    clicks++;
    // console.log(clicks);
    timerStartBtn.textContent = `${clicks} clicks.`;
    
    
};

function startTimer(t){
    isTimerRunning = true;
    
    const timerId = setInterval(() => {
        t = t-20;
        if(t <= 0){
            t=0;
            time=0; 
            timeDisplay.textContent = t
            timerStartBtn.textContent = `${clicks} clicks in 5 seconds.
            Your cps score is ${clicks/5}`
            clearInterval(timerId);
            isTimerRunning = false;
            isTimerFinished = true; 
            alert("Well done!");
            // console.log(time);
        }
        timeDisplay.textContent = (t/1000).toFixed(3)
    }, 20);
    
};