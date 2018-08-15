$(document).ready(function(){
  $("form#input").submit(function(event){
    var originalText = $("#original-text").val();
    var originalTextArray = originalText.split(" ");
    var latinWord;

    originalTextArray.forEach(function(word){
      //vowel condition
      if(word.match(/\b[a,e,i,o,u]/)){
        $("#result").text(word + "way");
      }
      //consonant conditions
        else {










      }
    });
    event.preventDefault();
  });
});
