var moonObj = function() {
    this.x = 0;
    this.y = 0;
    this.r = 0;
}
moonObj.prototype.init = function() {
    this.x = Math.floor(Math.random() * 20) + 200;
    this.y = Math.floor(Math.random() * 20) + 140;
    this.r = Math.floor(Math.random() * 20) + 80;
}
moonObj.prototype.draw = function() {


    ctx1.save();

    ctx1.strokeStyle = "#ffee07";
    ctx1.lineWidth = 6;
    ctx1.fillStyle = "#ffee07";
    ctx1.beginPath();
    ctx1.arc(canWidth-this.x,this.y,this.r,1.35*Math.PI,0.65*Math.PI);
    ctx1.stroke();
    ctx1.fill();
    ctx1.closePath();

    ctx1.translate(-30, 0);
    ctx1.beginPath();
    ctx1.arc(canWidth-this.x,this.y,0.89*this.r,1.44*Math.PI,0.56*Math.PI);
    ctx1.stroke();
    ctx1.fillStyle = "hsl(237, 75%, 12%)";
    ctx1.fill();

    ctx1.restore();
}