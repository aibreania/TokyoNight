var buildObj = function () {
    this.x = [];
    this.height = [];
    this.width = [];
    this.windows = [];
}
buildObj.prototype.num = 15;
buildObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = i == 0 ? 0 : Math.floor(this.x[i-1] + this.width[i-1] + Math.random()*2);
        this.height[i] = Math.floor(170 + 0.5 *Math.random() * canHeight);
        this.width[i] = Math.floor(80 + 0.1 * Math.random() * canWidth);
        this.windows[i] = Math.floor(20 + Math.random() * 10);
    }
}

buildObj.prototype.draw = function() {
    ctx1.save();


    for(var i = 0; i < this.num; i++) {
        ctx1.fillStyle = "#232bc4";
        ctx1.strokeStyle = "#000000";
        ctx1.lineWidth = 1;
        ctx1.beginPath();
        ctx1.moveTo(this.x[i], canHeight);
        ctx1.lineTo(this.x[i], canHeight-this.height[i]);
        ctx1.lineTo(this.x[i]+this.width[i], canHeight-this.height[i]);
        ctx1.lineTo(this.x[i]+this.width[i], canHeight);
        ctx1.stroke();
        ctx1.fillRect(this.x[i],canHeight-this.height[i],this.width[i],canHeight);

        var subarea = Math.sqrt(this.width[i] * this.height[i]/this.windows[i]);
        var window = Math.floor(0.35 * subarea);
        var dist = Math.floor((subarea - window)/2);
        var start = dist;
        var drop = 20;
        var x = 252 + Math.floor(Math.random()*25);
        var y = 241 + Math.floor(Math.random()*25);
        var z = 32 + Math.floor(Math.random()*25);
        var color = "rgb(" + x.toString() + "," + y.toString() + "," + z.toString() + ")";
        var long = window; // + Math.round(Math.random()*2);
        var lineCount = 0;
        for(var j = 0; j < this.windows[i]; j++) {
            ctx1.fillStyle = color;
            ctx1.fillRect(this.x[i] + start, canHeight-this.height[i] + drop, window, long);
            start += 2*dist + window;
            if(start + window + 6>= this.width[i]) {
                start = dist;
                drop += 2*dist+window;
                lineCount += 1;
                if(this.windows[i]-j-1 < (j+1)/lineCount) j = this.windows[i];
            }
        }
    }
    ctx1.restore();
}


