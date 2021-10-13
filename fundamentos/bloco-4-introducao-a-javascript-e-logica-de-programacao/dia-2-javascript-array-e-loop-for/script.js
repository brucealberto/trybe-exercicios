// Exercicio 01

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numero = 0; numero < numbers.length; numero +=1){
  console.log(numbers[numero]);
}*/

// Exercicio 02

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let numero = 0; numero < numbers.length; numero +=1){
  soma += numbers[numero];
}

console.log(soma)*/

// Exercicio 03

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0;

for (let numero = 0; numero < numbers.length; numero +=1) {
  soma += numbers[numero];
  media = soma / numbers.length;
}
console.log('A média dos valores é: ' + media);*/

// Exercicio 04

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0;

for (let numero = 0; numero < numbers.length; numero +=1) {
  soma += numbers[numero];
  media = soma / numbers.length;
}

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
