$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var originalText = $("#original-text").val().toLowerCase();
    var originalTextArray = originalText.split(" ");



    originalTextArray.forEach(function(word) {
      var brokenWord = word.split("");
      //vowel condition

      if (word.match(/\d/)) {
        $("#result").append(word + " ");
      }

      else if (word.match(/\b[aeiou]/)) {
        $("#result").append(word + "way ");

      }
      //consonant conditions
      else {
        loop2:
        for(i=0; i < brokenWord.length; i++){
          var letter = brokenWord[0];
          var hold = [];

//consonants condition
          if (/[^aeiouq]/.test(letter)){
            hold = brokenWord.shift().toString();
            brokenWord.push(hold);
          }
//qu condition
          else if (/q/.test(letter)) {
            hold.push(brokenWord.splice(0,2));
            brokenWord = brokenWord.concat(hold).join("");
            break loop2;
          }
//vowel condition
          else if (/[aeiou]/.test(letter)) {
            brokenWord.push(hold)
            break loop2;
          }
        }
        answer = brokenWord.toString();
        answerFormat = answer.split(',').join('');
        $("#result").append(answerFormat + "ay ");
      };
    });
  });
});
