// Exercicio 1
// const pessoaContratada = (nomeCompleto) => {
//   const email = nomeCompleto.toLowerCase().split(' ').join('_'); // split separa as palavras, join junta elas com _
//   return  { nomeCompleto, email: email + '@trybe.com' };

// };

// const newEmployees = (nomeCompleto) => {
//   const employees = {
//     id1: pessoaContratada('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: pessoaContratada('Luiza Drumon'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: pessoaContratada('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;
// };
// console.log(newEmployees(pessoaContratada))
// Exercicio 2  
// const checaNumeros = (meuNumero, numero) => meuNumero === numero;

// const resultadoSorteio = (meuNumero, callback) => {
//   const numero = Math.floor(Math.random() * 5) + 1;
//   return callback(meuNumero, numero) ? 'Tente Novamente' : 'Parabéns você Ganhou!';
// }
// console.log(resultadoSorteio(3, checaNumeros));

//Exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (respostasCorretas, respostaAluno, check) => {
  let contador = 0;
  for (let index = 0; index < respostasCorretas.length; index += 1) {
    const retornoCheck = check(respostasCorretas[index], respostaAluno[index]);
    contador += retornoCheck;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));
