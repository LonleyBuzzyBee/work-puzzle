$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#input1").val();
    var sentenceSplit = sentence.split("");
    console.log(sentenceSplit);
    $("#output").text(sentence);
  }
  function myFunc() {
    if ()
  }

  });
});