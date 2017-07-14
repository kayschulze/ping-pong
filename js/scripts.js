// function handles array to find all numbers that are divisible by 3 and replaces them with "ping".
var makesThreesPing = function(array, total) {
  for (var i = 0; i < total; i++) {
    if (array[i] % 3 === 0) {
      array[i] = "ping";
    }
  }

  return array;
};

// function handles array to find all numbers that are divisible by 5 and replaces them with "pong".
var makesFivesPong = function(array, total) {
  for (var i = 0; i < total; i++) {
    if (array[i] % 5 === 0) {
      array[i] = "pong";
    }
  }

  return array;
};

// function handles all other functions for determining final Ping Pong output array
var generatePingPong = function(integer) {
  outputArray = [];
  for (var i = 0; i < integer; i++) {
    outputArray[i] = i + 1;
  }

  outputArray = makesThreesPing(outputArray, integer);
  outputArray = makesFivesPong(outputArray, integer);

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
      $("ul").append("<li>" + outputtedArray[j] + "</li>");
      //$("#integerOutput").text(outputtedArray[j]);
      //$("#integerOutput").text(outputtedArray[j]);
    }
  });
});
