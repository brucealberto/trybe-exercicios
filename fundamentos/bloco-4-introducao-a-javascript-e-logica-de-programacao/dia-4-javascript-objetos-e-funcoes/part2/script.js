// Exercicio 01

/*function palindrome(word) {


  if (word[0] == word[word.length - 1]) {
    return true
  } else {
    return false
  }
  return word;
}

console.log(palindrome('ovo'));*/

// Exercicio 02

/*function recebeArray(valueArray) {
  let indiceMaior = 0;
  for (let key in valueArray) {
    if (valueArray[indiceMaior] < valueArray[key]) {
      indiceMaior = key;
    }
  }
  return indiceMaior;
  //indexOf
}
console.log(recebeArray([2, 3, 6, 7, 10, 1]));*/

// Exercicio 03

/*function menorValor(array){
  let indiceMenor = 0;
  
  for(let key in array){
    if(array[indiceMenor] > array[key]){
      indiceMenor = key
    }
  }
  return indiceMenor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));*/

// Exercicio 04

/*function nomes(array) {
  let maiorNome = array[0];
  for (let key in array) {
    if(maiorNome.length < array[key].length){
      maiorNome = array[key];
    }
    
  }
  return maiorNome
}

console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))*/

// Exercicio 05

function repeticao(array){
  let numeroInt = 0 ;
  for(let key in array){
    if(array[numeroInt] == array[key]){
      numeroInt = key;
    }
  }
  return array[numeroInt]
}
console.log(repeticao([2, 3, 2, 5, 8, 2, 3]));