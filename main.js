var can1;
var can2;
var ctx1;
var ctx2;

var canHeight;
var canWidth;

var lastTime;
var deltaTime;

var building;
var moon;

document.body.onload = start;

function start() {
    lastTime = Date.now();
    deltaTime = 0;
    init();
    loop();
}

function init() {
    can1 = document.getElementById("canvas1");
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById("canvas2");
    ctx2 = can2.getContext('2d');
    //can1.addEventListener('mousemove', onMouseMove, false);

    canWidth = can1.width;
    canHeight = can1.height;

    building = new buildObj();
    building.init();

    moon = new moonObj();
    moon.init();

}

function loop() {
    window.requestAnimationFrame(loop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime > 20) deltaTime = 20;

    building.draw();
    moon.draw();
}

