$(function(){
    if(matchMedia("screen and (min-width:600px) and (max-width: 1199px)").matches){
     
            //책 효과
        function loadApp() {
  
          // Create the flipbook
          
          var widthbox=$(window).innerWidth();
          var heightbox=$(window).innerHeight();
          
          $('.flipbook').turn({
             
          
              // Width
          
              width: widthbox*1 ,
          
              // Height
          
              height: heightbox*0.8,
          
              // Elevation
          
              elevation: 50,
          
              // Enable gradients
          
              gradients: true,
          
              // Auto center this flipbook
          
              autoCenter: true
          
          });
          }
          
          // Load the HTML4 version if there's not CSS transform
          
          yepnope({
          test: Modernizr.csstransforms,
          yep: ['js/turn.js'],
          nope: ['js/turn.html4.min.js'],
          both: ['css/basic.css'],
          complete: loadApp
          });
  
          
      }
    
});