// Exercicio 01

/*let n = 5;
let aster = '';
for (let index = 0; index < n; index += 1) {
  aster += '*'
}

for (let index = 0; index < n; index += 1) {
  console.log(aster)
}*/


// Exercicio 02

/*let n = 5;
let aster = '';
for (let index = 1; index <= n; index += 1) {
  aster += '*'
  for (let index = 1; index <= n; index += 1) {
    //console.log(aster)
  }
  console.log(aster)
}*/

// Exercico 03

/*let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1; 
};*/ 

// Exercicio 04


let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};