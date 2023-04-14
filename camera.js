let webcamVideo;

function setup() {
    createCanvas(windowWidth, windowHeight)
    webcamVideo = createCapture(VIDEO)
    vid.size(width, height)
    vid.hide()

}

function draw() {
 background(0)
 vid.loadPixels()
}