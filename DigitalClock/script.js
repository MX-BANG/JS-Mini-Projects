const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    clock.innerText = `${hours}:${minutes}:${seconds}`; 
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    setInterval(updateClock, 1000);
    updateClock();
