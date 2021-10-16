// Exercicio 01

function palindrome(word) {


  if (word[0] == word[word.length - 1]) {
    return true
  } else {
    return false
  }
  return word;
}

console.log(palindrome('ovo'));