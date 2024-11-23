$("#start-timer").click(function () {
    let timeLeft = 5000; // Initial time in milliseconds
    const timeDisplay = $("#time");
    if (window.timerId) {
        clearInterval(window.timerId);
    }

    window.timerId = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(window.timerId);
            timeDisplay.text("0.000");
            alert("Time's up!");
            return;
        }

        timeLeft -= 10;
        timeDisplay.text((timeLeft / 1000).toFixed(3));
    }, 10);
});