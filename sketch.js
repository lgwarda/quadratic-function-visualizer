let a = 1; // Współczynnik a
let b = 0; // Współczynnik b
let c = 0; // Współczynnik c
let xValue = -3; // Punkt do przesunięcia

function draw() {
  background(255);
  
  // Rysowanie układu współrzędnych
  stroke(0);
  line(0, height / 2, width, height / 2); // Oś X
  line(width / 2, 0, width / 2, height); // Oś Y
  
  // Rysowanie funkcji kwadratowej
  stroke(150);
  noFill();
  beginShape();
  for (let x = -width / 2; x < width / 2; x++) {
    let y = a * pow(x / 50, 2) + b * (x / 50) + c; // Funkcja kwadratowa
    vertex(width / 2 + x, height / 2 - y * 50); // Przeskalowanie dla wizualizacji
  }
  endShape();
  // Rysowanie punktu dla xValue
  fill(255, 0, 0);
  ellipse(width / 2 + xValue * 50, height / 2 - yValue * 50, 10, 10);
}