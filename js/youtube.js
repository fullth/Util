var getTimes = document.querySelectorAll('.style-scope ytd-playlist-video-list-renderer .style-scope ytd-playlist-video-renderer .style-scope ytd-thumbnail .style-scope ytd-thumbnail-overlay-time-status-renderer span');
var totalHour = 0;

for(var i = 0; i < getTimes.length; i++) {
    var parseTimes = getTimes[i].innerText;
    parseTimes = parseTimes.split(":");
    min = parseTimes[0];
    sec = parseTimes[1];
    totalHour = totalHour + parseInt(sec) + parseInt(min)*60;
}

console.log(totalHour/60/60);
