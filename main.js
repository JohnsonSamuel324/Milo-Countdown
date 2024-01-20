const countDownDate = new Date("Jan 23, 2024 18:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations
    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }


    // Display
    document.getElementById("countdown-timer").innerHTML = `${hours}:${minutes}:${seconds}`
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "HE'S HOME!!!"
    }
}, 1000)


