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

function recebeArray(valueArray) {
  let indiceMaior = 0;
  for (let key in valueArray) {
    if (valueArray[indiceMaior] < valueArray[key]) {
      indiceMaior = key;
    }
  }
  return indiceMaior;
  //indexOf
}
console.log(recebeArray([2, 3, 6, 7, 10, 1]));