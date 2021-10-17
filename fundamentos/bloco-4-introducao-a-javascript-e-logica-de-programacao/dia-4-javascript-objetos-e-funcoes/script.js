 let info = {
   personagem: 'Margarida',
   origem: 'Pato Donald',
   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
   recorrente: 'Sim',
 };

 // Exercicio 01
 //console.log('Bem vinda, ' + info.personagem);

 // Exercicio 02

 // info.recorrente = 'Sim';
 // console.log(info)

 // Exercicio 03
 /*for (let key in info) {
   console.log(key)
 }*/

 // Exercicio 04

 // 

 // Exercicio 05

 let info2 = {
   personagem: 'Tio Patinhas',
   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
   nota: 'O último MacPatinhas',
   recorrente: 'Sim',
 };

 //  let inf = info;
 //  let inf2 = info2;
 for (let key in info) {
  if(info[key] == info2[key]){
    console.log('Ambos recorrente')
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
  
 }
 //console.log(inf[key] + inf2[key]);