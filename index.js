var colors;
var capture;
var trackingData;

var active = false;
var prevActiveTime = new Date();

function setup() {
  createCanvas(windowWidth,windowHeight)

  capture = createCapture(VIDEO); //capture the webcam
  capture.position(0,0) //move the capture to the top left
  //capture.style('opacity',0.5)// use this to hide the capture later on (change to 0 to hide)...
  capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.

  // colors = new tracking.ColorTracker(['', 'cyan', '']);
    colors = new tracking.ColorTracker(['yellow']);

  tracking.track('#myVideo', colors); // start the tracking of the colors above on the camera in p5

  //start detecting the tracking
  colors.on('track', function(event) { //this happens each time the tracking happens
      //trackingData =  // break the trackingjs data into a global so we can access it with p5
    if (event.data.length > 0 && active == false) {
      active = true;
      prevActiveTime = new Date();
      //console.log("set active", prevActiveTime.getTime());
    }
    
    if (event.data.length == 0 && active == true) {
      active = false;
      console.log("set unactive", (new Date().getTime() - prevActiveTime.getTime()) / 1000);
      
    }
  });

}

function draw() {

  // console.log(trackingData);
  // if(trackingData){ //if there is tracking data to look at, then...
  //   for (var i = 0; i < trackingData.length; i++) { //loop through each of the detected colors
  //     // console.log( trackingData[i] )
  //     rect(trackingData[i].x,trackingData[i].y,trackingData[i].width,trackingData[i].height)
  //   }
  // }
}
