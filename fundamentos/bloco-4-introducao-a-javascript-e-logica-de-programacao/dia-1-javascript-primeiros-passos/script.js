// Exercicio 01

/*const a = 10;
const b = 5;

console.log("Adição", a + b);
console.log("Subtração", a - b);
console.log("Multiplicação", a * b);
console.log("Divisão", a / b);
console.log("Módulo", a % b);*/

// Exercicio 02

// const num1 = 8;
// const num2 = 6;

// if (num1 > num2) {
//   console.log ("O maior número é ",num1);
// } else {
//   console.log(num2," é o maior número");
// }

// Exercicio 03

/*const num1 = 8;
const num2 = 6;
const num3 = 4;

if (num1 > num2 && num1 > num3) {
  console.log("O maior número é",num1,"que é váriavel num1");
} else if (num2 > num1 && num2 > num3){
  console.log("O maior número é",num2,"que é váriavel num2");
} else {
  console.log("O maior número é",num3,"que é váriavel num3");
}*/

// Exercicio 04

/*const num = 0;

if (num > 0) {
  console.log("positive")
} else if (num < 0) {
  console.log("negative")
} else {
  console.log("zero")
}*/

// Exercicio 05

/*const ang1 = 60;
const ang2 = 60;
const ang3 = 60;

let somaAng = ang1 + ang2 + ang3;

let angPos = ang1 > 0 && ang2 > 0 && ang3 > 0;

if (angPos) {
  if (somaAng === 180){
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log("Erro, Angulo inválido")
}*/

// Exercicio 06

/*let chessPiece = 'Torre';

switch(chessPiece.toLowerCase()) {
  case 'rei':
    console.log("Rei -> Pode mover-se em qualquer direção, porém apenas uma casa por vez");
    break;
  case 'rainha':
    console.log("Rainha -> vertical, horizontal e diagonal");
    break;
  case 'torre':
    console.log("Torre -> reto, vertical e horizontal");
    break;
  case 'bispo':
    console.log("Bispo -> diagonal, quantas casas quiser");
    break;
  case 'cavalo':
    console.log("Cavalo -> duas casas na horizontal e uma na vertical");
    break;
  case 'peão':
    console.log("Peão -> uma casa para frente");
    break;
  default:
    console.log("Você não inseriu a peça correta!");
    break;  
}*/

// Exercicio 07

/*let nota = 15;

if (nota >= 90 && nota <= 100) {
  console.log("Conceito A");
} else if (nota >= 80 && nota <= 100) {
  console.log("Conceito B");
} else if (nota >= 70 && nota <= 100) {
  console.log("Conceito C");
} else if (nota >= 60 && nota <= 100) {
  console.log("Conceito D");
} else if (nota >= 50 && nota <= 100) {
  console.log("Conceito E");
} else if (nota < 0 || nota > 100) {
  console.log("Número inválido!!")
} else {
  console.log("Conceito F")
}*/

// Exercicio 08

/*const n1 = 8;
const n2 = 7;
const n3 = 9;

if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
  console.log("é par");
} else {
  console.log("não é par");
}*/

// Exercicio 09

/*const n1 = 3;
const n2 = 4;
const n3 = 5;

if(n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1) {
  console.log("É ímpar");
} else {
  console.log("Não é ímpar");
}*/

// Exercicio 10 

/*const custoProduto = 15;
const valorVenda = 50;

// let valorCustoTotal = custoProduto * (20/100); # minha linha de raciocinio
// let lucro = valorVenda - valorCustoTotal; # minha linha de raciocinio

if (custoProduto >= 0 && valorVenda >= 0) {
  const valorCustoTotal = custoProduto * 1.2;
  const lucro = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("Número inválido")
}*/

// Exercicio 11

let aliqINSS;
let aliqIR;

let salarioBruto = 3000.00;

if (salarioBruto <= 1556.94) {
  aliqINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliqINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliqINSS = salarioBruto * 0.11;
} else {
  aliqINSS = 570.88
}

let salarioBase = salarioBruto - aliqINSS;

if (salarioBase <= 1903.98) {
  aliqIR = 0;
} else if (salarioBase <= 2826.65) {
  aliqIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliqIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliqIR = (salarioBase * 0.225) - 636.13;
} else {
  aliqIR = (salarioBase * 0.275) - 869.36;
}
let salarioLiq = salarioBase - aliqIR;
console.log("O salário Liquido é",salarioLiq); 