$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var originalText = $("#original-text").val().toLowerCase();
    var originalTextArray = originalText.split(" ");
    var latinWord;



    originalTextArray.forEach(function(word) {

      var brokenWord = word.split("");
      testWord = brokenWord.slice();

      //vowel condition
      if (word.match(/\b[aeiou]/)) {
        $("#result").text(word + "way");
      }
      //consonant conditions
      else {

        for(i=0; i < brokenWord.length; i++){

          var letter = brokenWord[i];

          if (letter.match(/[aeiou]/)) {
            console.log("vowel");
            break;

          } else if (letter.match(/qu/)) {
            var  letter = brokenWord.shift();
            letter = letter + brokenWord.shift();
            brokenWord = brokenWord + letter;
            console.log(brokenWord + "ay");
            break;

          } else if (letter.match(/[^a,e,i,o,u,q]/)){
            var letter = brokenWord.shift();
            console.log(brokenWord + letter +  "ay");
            break;
          }
        }
      };
    });
  });
});
