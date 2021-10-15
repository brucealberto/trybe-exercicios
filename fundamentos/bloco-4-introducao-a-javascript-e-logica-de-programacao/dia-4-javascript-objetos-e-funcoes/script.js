let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercicio 01
//console.log('Bem vinda, ' + info.personagem);

// Exercicio 02

 info.recorrente = 'Sim';
// console.log(info)

// Exercicio 03
/*for (let key in info) {
  console.log(key)
}*/

// Exercicio 04

for(let key in info){
  console.log(info[key])
}