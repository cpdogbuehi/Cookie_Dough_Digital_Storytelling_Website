let canvas; // canvas variable

let soapyImage; // soapy image variable
let messyImage; // messy image variable
let wetImage; // wet image variable
let dryImage; // dry image variable
let brushedImage; // brushed image variable
let cleanImage; // clean image variable

let showMessy = true; // show messy image
let showSoapy = false; // show soapy image
let showWet = false; // show wet image
let showDry = false; // show dry image
let showBrushed = false; // show brushed image
let showClean = false; // show clean image

let hoverImage; // smile image variable
let imageX, imageY; // image position variables


function preload() {
    messyImage = loadImage('Images/Temp_Messy.png'); // messy image
    soapyImage = loadImage('Images/Temp_Soapy.png'); // soapy image
    wetImage = loadImage('Images/Temp_Wet.png'); // wet image
    dryImage = loadImage('Images/Temp_Dry.png'); // dry image
    brushedImage = loadImage('Images/Temp_Brushed.png'); // brushed image
    cleanImage = loadImage('Images/Temp_Clean.png'); // clean image
    //hoverImage = loadImage('path/to/hoverImage.png'); // Load the hover image
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight); // website size depend on window size
    canvas.position(0, 0); // canvas position starts from corner of screen
    canvas.style('z-index', '-1');// canvas is behind everything
    canvas.style('position', 'fixed'); // canvas is fixed on screen
    colorMode(HSB); // color mode is hue, saturation, brightness

    imageX = windowWidth / 3; // X position of the image
    imageY = windowHeight / 2; // Y position of the image

    noCursor(); // no cursor on screen

    imageMode(CENTER); // image position is center

    let spongeButton = select('.fixed-right0'); // button variable
    spongeButton.mousePressed(spongePressed); // button function

    let bucketButton = select('.fixed-right1'); // button variable
    bucketButton.mousePressed(bucketPressed); // button function

    let dryerButton = select('.fixed-right2'); // button variable
    dryerButton.mousePressed(dryerPressed); // button function

    let brushButton = select('.fixed-right3'); // button variable
    brushButton.mousePressed(brushPresed); // button function

    let bowButton = select('.fixed-right4'); // button variable
    bowButton.mousePressed(bowPressed); // button function

    //let resetButton = select('.fixed-right5'); // button variable
    //resetButton.mousePressed(resetPressed); // button function

}

function draw() {
    background(200, 100, 100); // background color is light blue

    stroke(33, 70, 30); // rectangle border color is dark brown
    strokeWeight(2); // rectangle border weight is 2
    fill(51, 10, 100); // rectangle color is cream

    // Resize the rectangle based on window size
    let rectWidth = windowWidth * 0.10; // 10% of window width
    let rectHeight = windowHeight; // Full height of the window
    rect(windowWidth - rectWidth, 0, rectWidth, rectHeight); // rectangle position (behind buttons) and size

    // Resize the rectangle based on window size
    let rectWidthTable = windowWidth * 0.7; // 70% of window width
    let rectHeightTable = windowHeight * 0.3; // 30% of window height
    rect(0, windowHeight - rectHeightTable - 20, rectWidthTable, rectHeightTable + 20); // rectangle position (Panda's table) and size

    // Resize the images based on window size
    let imageWidth = windowWidth * 0.4; // 40% of window width
    let imageHeight = windowHeight * 0.8; // 80% of window height

    if (showMessy) {
        image(messyImage, imageX, imageY, imageWidth, imageHeight); // messy image position and size
    }

    if (showSoapy) {
        image(soapyImage, imageX, imageY, imageWidth, imageHeight); // soapy image position and size
    }

    if (showWet) {
        image(wetImage, imageX, imageY, imageWidth, imageHeight); // wet image position and size
    }

    if (showDry) {
        image(dryImage, imageX, imageY, imageWidth, imageHeight); // dry image position and size
    }

    if (showBrushed) {
        image(brushedImage, imageX, imageY, imageWidth, imageHeight); // brushed image position and size
    }

    if (showClean) {
        image(cleanImage, imageX, imageY, imageWidth, imageHeight); // clean image position and size
    }

    /*if (mouseX > imageX && mouseX < imageX + imageWidth && mouseY > imageY && mouseY < imageY + imageHeight) {
        // Display the hover image
        image(hoverImage, imageX, imageY, imageWidth, imageHeight);
    } */
}

function spongePressed() { // when sponge button is pressed
    if(showMessy) { // if messy image is showing, show soapy image, hide messy image
        showSoapy = true;
        showMessy = false;
    }
}

function bucketPressed() { // when bucket button is pressed
    if (showSoapy) { // if soapy image is showing, show wet image, hide soapy image
        showWet = true;
        showSoapy = false;
    }
}

function dryerPressed() { // when dryer button is pressed
    if (showWet) { // if wet image is showing, show dry image, hide wet image
        showDry = true;
        showWet = false;
    }
}

function brushPresed() { // when brush button is pressed
    if (showDry) { // if dry image is showing, show brushed image, hide dry image
        showBrushed = true;
        showDry = false;
    }
}

function bowPressed() { // when bow button is pressed
    if (showBrushed) { // if brushed image is showing, show clean image, hide brushed image
        showClean = true;
        showBrushed = false;
    }
}

/*
function resetPressed() { // when reset button (play again) is pressed
    if (showClean) { // if clean image is showing, show messy image, hide clean image
        showMessy = true;
        showClean = false;
    }
}
    */









