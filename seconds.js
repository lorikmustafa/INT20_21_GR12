var i = 0;

function secondsCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("secondsCount()", 1000);
}

secondsCount();