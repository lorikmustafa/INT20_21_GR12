function contactColor() {
    var changing = document.querySelector("body");
    var color = ["white", "hsl(266, 64%, 96%)", "pink", "#fe4365"];
        var i = 0;
    function change() {
        changing.style.backgroundColor = color[i];
        i++;

        if(i > color.length - 1) {
            i = 0;
        }
    }
    setInterval(change, 1000);
}