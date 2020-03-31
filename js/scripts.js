$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#input1").val();
    
    $("#output").text(sentence);
  });
});