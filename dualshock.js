var dualShock = require('dualshock-controller');

//pass options to init the controller.
var controller = dualShock(
    {
        //you can use a ds4 by uncommenting this line.
        config: "dualshock4-generic-driver",
        //if using ds4 comment this line.
        //config : "dualShock3",
        //smooths the output from the acelerometers (moving averages) defaults to true
        accelerometerSmoothing : true,
        //smooths the output from the analog sticks (moving averages) defaults to false
        analogStickSmoothing : false
    });

//make sure you add an error event handler
controller.on('error', function(data) {
  //...someStuffDidNotWork();
});

//add event handlers:
controller.on('left:move', function(data) {
  console.log('left');
  console.log(data);
});
controller.on('right:move', function(data) {
  console.log('right');
  console.log(data);
});
controller.on('connected', function(data) {
  //...doStuff();
});
controller.on('square:press', function (data) {
  console.log("pressed");
});
controller.on('square:release', function (data) {
  console.log("released");
});

//sixasis motion events:
//the object returned from each of the movement events is as follows:
//{
//    direction : values can be: 1 for right, forward and up. 2 for left, backwards and down.
//    value : values will be from 0 to 120 for directions right, forward and up and from 0 to -120 for left, backwards and down.
//}

//right-left movement
controller.on('rightLeft:motion', function (data) {
    //...doStuff();
});

//forward-back movement
controller.on('forwardBackward:motion', function (data) {
    //...doStuff();
});
//up-down movement
controller.on('upDown:motion', function (data) {
    //...doStuff();
});

//controller status
//as of version 0.6.2 you can get the battery %, if the controller is connected and if the controller is charging
controller.on('battery:change', function (value) {
     //...doStuff();
});
controller.on('connection:change', function (value) {
     //...doStuff();
});
controller.on('charging:change', function (value) {
     //...doStuff();
});

//connect the controller
controller.connect();
