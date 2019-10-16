$( "document" ).ready(function() {
$("#button").click(function() {
    let message = $(".input").val();
    $(".output").text(message);
});
function checkVowel(str) {
  var firstLetter=str[0];
  var vowel=['a','e','i','o','u'];

  if(vowel.includes(firstLetter)){
    return 'starts with vowel';
  }
    return 'starts with consonant';
  }

});