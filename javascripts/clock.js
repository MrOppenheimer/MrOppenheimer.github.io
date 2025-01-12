function startTime() {
    var today = new Date();
    
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    var day = today.getDay();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    day = parseDay(day);
    month = parseMonth(month);

    document.getElementById('clock').innerHTML =
        `<h1>${h}:${m}:${s} &emsp; ${day}, ${date} ${month}, ${year}<h1>`;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function parseDay(d) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[d];
}

function parseMonth(m) {
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[m];
}

startTime();