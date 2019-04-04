document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.vibrate)
    }


if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', handleOrientation);

} else {
    console.log("This is not working");

}
var r, g, b, ballY, ballX;
var maracaCount = 0;
function draw() {
    background(r,g,b)
    fill(220, 55, 135);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);
    ellipse(ballX,ballY,33,33);

}


function handleOrientation(event) {
    
    
    var z = event.alpha;
    var x = event.beta;
    var y = event.gamma;
    
     r = map(z, 0, 360, 0, 255 );
     g = map(x, -180, 180, 0, 255);
        ballX = map(y, -90, 90, 0, window.innerWidth)
        ballY= map(x, -180, 180,0, window.innerHeight)
     b = map(y, -90, 90, 0, 255);

    document.getElementById('maracaCount').innerHTML = maracaCount;
    document.getElementById('Alpha').innerHTML = z;
    document.getElementById('Beta').innerHTML = x;
    document.getElementById('Gamma').innerHTML = y;
    if(x > 90 && x < 100  ) {
        document.getElementById('maracaOne').play()

        maracaCount++;
        navigator.vibrate([100,800]);

        // if(x == 80) {
        //     navigator.vibrate(500);
        // }

    } 
    else if (x > 20 && x < 30 ) {
        document.getElementById('maracaTwo').play();
        maracaCount++;
        navigator.vibrate([100,800]);
        // if(x == 40) {
        //     navigator.vibrate(500);
        // }
    }
    switch(maracaCount) {
        case 25 : document.getElementById('shakeNotice').innerHTML = "Keep Going!";
        break;

        case 50 : document.getElementById('shakeNotice').innerHTML = "Halfway!"
        break;

        case 75 : document.getElementById('shakeNotice').innerHTML = "Just about there!";
        break;

        case 100 : document.getElementById('shakeNotice').innerHTML = "Your a shake master!";
                    document.getElementById('shake').play();
    }

}