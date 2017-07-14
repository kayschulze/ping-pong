
// function handles all other functions for determining final Ping Pong output array
var generatePingPong = function(integer) {
  outputArray = [];
  for (var i = 0; i < integer; i++) {
    outputArray[i] = i + 1;
  }

  return outputArray;
};

// main function takes user input and calls a ping pong function and sends output back to the webpage.
$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    // stores user input into a variable.
    var inputtedNumber = $("#integer").val();

    // Calls Ping Pong counting function and returns array.git
    var outputtedArray = generatePingPong(inputtedNumber);

    // Uses array to output.
    for (var j = 0; j < outputtedArray.length; j++) {
      $("#integerOutput").text(outputtedArray[j]);
      //$("#integerOutput").text(outputtedArray[j]);
    }
  });
});
