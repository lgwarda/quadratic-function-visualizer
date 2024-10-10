let a = 1, b = 0, c = 0; // Coefficients

function draw() {
    background(255);
    stroke(0);
    line(0, height / 2, width, height / 2); // X axis
    line(width / 2, 0, width / 2, height); // Y axis
    stroke(150);
    noFill();
    beginShape();
    for (let x = -width / 2; x < width / 2; x++) {
        let y = a * pow(x / 50, 2) + b * (x / 50) + c; // Quadratic function
        vertex(width / 2 + x, height / 2 - y * 50); // Scale for visualization
    }
  endShape();
}
  