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
        console.log(navigator)
        document.getElementById('camButton').addEventListener('click',takePic);
        
        
    }
    // var options = {
    //     quality: 100,
    //     sourceType: camera.PictureSourceType.PHOTOLIBRARY,
    //     encodingType: camera.EncodingType.PNG,
    //     cameraDirection: camera.Direction.FRONT
    //     };

    function takePic() {
        console.log("first success!");
        navigator.camera.getPicture(success,error, options);
        } 
    
    };
    