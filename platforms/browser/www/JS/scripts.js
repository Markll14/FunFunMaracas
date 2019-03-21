var app = new Framework7({
    // App root element
    root: '#app'
    // ... other parameters
   });
   var mainView = app.views.create('.view-main');

window.onload = function () {


    document.addEventListener("deviceready", init, false); // check that Mobile devices is ready, if it is, run init() function.
    init(); // use for testing on chrome
       function init() {
        console.log("we are a go");
        console.log(document.getElementById('result'))
        document.getElementById('camButton').addEventListener('click',takePic);
        
        
    }
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        };

    function takePic() {
        console.log("first success!");
        navigator.camera.getPicture(success,error, options);
        document.getElementById('overId').style.opacity = 0;
        
        } 

        function success(imageData) {
             document.getElementById('result').src = imageData;
            document.getElementById('camButton').innerHTML = "Snap Another Moment";
            
            setTimeout(() => {
                document.getElementById('overId').style.opacity = 1;
            },5000)
        }

        function error(message) {
            alert("oh no the camera failed because" + message);
        }
    
    };
    