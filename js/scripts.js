$(function() {
  var sentence = prompt("Enter a sentence:");
  console.log(sentence);


  function getFirstAndLast(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(-1).toUpperCase();
  }

  getFirstAndLast(sentence);

  function reverseString(string) {
    return string.split('').reverse().join('');
  }

  reverseString(getFirstAndLast(sentence));
});
