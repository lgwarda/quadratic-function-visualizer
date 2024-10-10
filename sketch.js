let a = 1; // Współczynnik a
let b = 0; // Współczynnik b
let c = 0; // Współczynnik c
let xValue = -3; // Punkt do przesunięcia

function setup() {
  createCanvas(600, 400);
  
  // Tworzenie suwaków do wprowadzania współczynników
  createP('Współczynnik a:');
  let aSlider = createSlider(-5, 5, 1, 0.1);
  createP('Współczynnik b:');
  let bSlider = createSlider(-5, 5, 0, 0.1);
  createP('Współczynnik c:');
  let cSlider = createSlider(-5, 5, 0, 0.1);
  
  // Ustawienia zmiany współczynników na suwakach
  aSlider.input(() => {
    a = aSlider.value();
  });
  bSlider.input(() => {
    b = bSlider.value();
  });
  cSlider.input(() => {
    c = cSlider.value();
  });
  
  // Tworzenie suwaka do przesuwania punktu
  createP('Przesuń punkt (x):');
  let xSlider = createSlider(-10, 10, xValue, 0.1);
  xSlider.input(() => {
    xValue = xSlider.value();
  });
}

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
  
  // Obliczanie wartości funkcji dla xValue
  let yValue = a * pow(xValue, 2) + b * xValue + c;
  
  // Rysowanie punktu dla xValue
  fill(255, 0, 0);
  ellipse(width / 2 + xValue * 50, height / 2 - yValue * 50, 10, 10);
  
  // Rysowanie tekstu
  fill(0);
  text(`f(${xValue}) = ${yValue.toFixed(2)}`, width / 2 + xValue * 50 + 10, height / 2 - yValue * 50);
}
