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

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
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
}*/

// Exercicio 05

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];
for (let numero = 0; numero < numbers.length; numero += 1) {
  if(numbers[numero] > maiorNumero){
    maiorNumero = numbers[numero];
  }

}

console.log(maiorNumero)*/

// Exercicio 06

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtImpar = 0;
for (let numero = 0; numero < numbers.length; numero += 1) {

  if (numbers[numero] % 2 !== 0) {
    qtImpar += 1;
  }

}

if (qtImpar === 0) {
  console.log('nenhum valor ímpar encontrado')
} else {
  console.log(qtImpar)
}*/

// Exercicio 07

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let numero = 0; numero < numbers.length; numero +=1) {
  if (numbers[numero] < menorNumero) {
    menorNumero = numbers[numero]
  }
}

console.log(menorNumero)*/

// Exercicio 08

/*let numArray = [];

for (let numero = 1; numero <= 25; numero += 1) {

  numArray.push(numero)
}
console.log(numArray)*/

// Exercicio 09
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numero = 0; numero < numbers.length; numero += 1) {
  divisao = numbers[numero] / 2;
  console.log(divisao);
}*/