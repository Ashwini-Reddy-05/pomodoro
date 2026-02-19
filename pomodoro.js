let time = 25 * 60;
let interval;

function start() {
    interval = setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(interval);
            alert('Time is up!');
            reset();
        }
        updateDisplay();
    }, 1000);
}

function reset() {
    clearInterval(interval);
    time = 25 * 60;
    updateDisplay();
}

function updateDisplay() {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    document.getElementById('timer').textContent = 
        `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}
