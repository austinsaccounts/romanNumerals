$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var originalText = $("#original-text").val().toLowerCase();
    var originalTextArray = originalText.split(" ");



    originalTextArray.forEach(function(word) {
      var brokenWord = word.split("");
      //vowel condition

      if (word.match(/\b[aeiou]/)) {
        $("#result").text(word + "way");

      }
      //consonant conditions
      else {
        loop2:
        for(i=0; i < brokenWord.length; i++){
          // var letter = brokenWord[i];
          var letter = brokenWord[0];
          var hold = [];
          console.log(i);

          if (/[^aeiouq]/.test(letter)){
            hold = brokenWord.shift().toString();
            brokenWord.push(hold);


          }
          else if (/q/.test(letter)) {
            hold.push(brokenWord.splice(0,2));
            brokenWord = brokenWord.concat(hold).join("");
            var print = brokenWord;
            break loop2;
          }
          else if (/[aeiou]/.test(letter)) {
            brokenWord.push(hold + "ay")
            var print = brokenWord.join("");
            break loop2;
          }
        }
        console.log(brokenWord);
      };
    });
  });
});
