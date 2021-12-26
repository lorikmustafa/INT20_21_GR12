var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
c.beginPath();
c.arc(60, 70, 43, 0, 2 * Math.PI);
c.lineWidth=8;
c.strokeStyle="#000000";
c.stroke();

c.beginPath();
c.arc(115, 70, 43, 0, 2 * Math.PI);
c.lineWidth=8;
c.strokeStyle="#000000";
c.stroke();


c.beginPath();
c.arc(170, 70, 43, 0, 2 * Math.PI);
c.lineWidth=8;
c.strokeStyle="#000000";
c.stroke();


c.beginPath();
c.arc(225, 70, 43, 0, 2 * Math.PI);
c.lineWidth=8;
c.strokeStyle="#000000";
c.stroke();
c.closePath();



//c.fillRect(100,100,100,100);
console.log(canvas);


