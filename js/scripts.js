$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var originalText = $("#original-text").val().toLowerCase();
    var originalTextArray = originalText.split(" ");
    var latinWord;



    originalTextArray.forEach(function(word) {

      var brokenWord = word.split("");
      //vowel condition
      if (word.match(/\b[aeiou]/)) {
        $("#result").text(word + "way");
      }
      //consonant conditions
      else {


        brokenWord.forEach(function(letter) {

          if (letter.match(/[aeiou]/)) {
            
            console.log("vowel");
          }
          else if (letter.match(/qu/)) {

          var  letter = brokenWord.shift();
          letter = letter + brokenWord.shift();
          brokenWord = brokenWord + letter;
          console.log(brokenWord + "ay");
        } else if (letter.match(/[^a,e,i,o,u,q]/)){
          var letter = brokenWord.shift();

          console.log(brokenWord + letter +  "ay");
        }




        });
      };
    });
  });
});




// var letter = brokenWord.shift();
// letter = letter + brokenWord.shift();
// alert(brokenWord.join("") + letter + "ay" );


//logics for making word here
// find elements

//turns word into array by number




//endingLetters += first letter,-- shift()removes that letter from broken word.

//
// alert(brokenWord.join("") + letter + "ay" );
// // expected output: Array [2, 3]
//
// console.log(firstElement);
// // expected output: 1
