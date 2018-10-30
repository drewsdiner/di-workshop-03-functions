function setup() {
    createCanvas(400, 400)
    background(255)
  }

  // A function setup used to define initial enviroment properties such as screen size and to load media such as images and fonts as the program starts
  
  function draw() {
    fill(255, 130, 0)
    stroke(0)
    triangle(0, 30, 40, 0, 80, 30)
    rect(5, 30, 70, 70)
  }

// A function draw continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called