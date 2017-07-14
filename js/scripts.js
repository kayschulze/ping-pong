// function handles array to find all numbers that are divisible by 15 and replaces them with "ping-pong"
var makes15PingPong = function(array, total) {
  for (var i = 0; i < total; i++)  {
    if (array[i] % 15 === 0) {
      array[i] = "ping-pong";
    }
  }

  return array;
};

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
  var outputArray = [];
  for (var i = 0; i < integer; i++) {
    outputArray[i] = i + 1;
  }

  outputArray = makes15PingPong(outputArray, integer);
  outputArray = makesThreesPing(outputArray, integer);
  outputArray = makesFivesPong(outputArray, integer);

  return outputArray;
};

var isInteger = function(number) {
  return number % 1 === 0;
};

var validateInput = function(input) {
  if (input > 1 && isInteger(input)) {
    return true;
  }
  else {
    return false;
  }
};

var playingYourGame = function(array, factor, word, total) {
  for (var i = 0; i < total; i++) {
    if (array[i] % factor === 0) {
      array[i] = word;
    }
  }

  return array;
};

var initializeYourArray = function(int) {
  var yourGameArray = [];
  for (var i = 0; i < int; i++) {
    yourGameArray[i] = i + 1;
  }

  return yourGameArray;
};

// function handles all other functions for determining final Ping Pong output array
// var generateYourPingPong = function(factor, word, int) {
//   var yourGameArray = initializeYourArray(int);
//
//   yourGameArray = playingYourGame(yourGameArray, factor, word, int);
//
//   return yourGameArray;
// };

var isInteger = function(number) {
  return number % 1 === 0;
};

var validateInput = function(input) {
  if (input > 1 && isInteger(input)) {
    return true;
  }
  else {
    return false;
  }
};

// Validate all integers from your game
var validateAllIntegers = function(array, number) {
  for (var i = 0; i < 3; i++) {
    if (!validateInput(array[i])) {
      return false;
    }
  }

  if (!validateInput(number)) {
    return false;
  }
  else {
    return true;
  }
};

// main function takes user input and calls a ping pong function and sends output back to the webpage.
$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    // empties ul tag before displaying another input.
    $("ul.listItem").empty();

    // stores user input into a variable.
    var inputtedNumber = parseInt($("#integer").val());

    if (validateInput(inputtedNumber)) {
      // Calls Ping Pong counting function and returns array.git
      var outputtedArray = generatePingPong(inputtedNumber);

      // Uses array to output.
      for (var j = 0; j < outputtedArray.length; j++) {
        $("ul.listItem").append("<li>" + outputtedArray[j] + "</li>");
      }
    }
    else {
      $("ul.listItem").append("<li> This is not a valid input.  Please try again. <li>");
    }
  });

  //Gives the user a change to make their own ping pong game.
  $("#userChoice").submit(function(event) {
    event.preventDefault();

    // Empties ul tag before displaying another input.
    $("ul.yourListItem").empty();

    // Declares inputs as arrays
    var inputFactor = [];
    var inputWord = [];

    // Gather input from first factor to change numbers
    inputFactor[0] = parseInt($("#factor1").val());
    inputWord[0] = $("#word1").val();
    var yourNumber = parseInt($("#yourInteger").val());

    // Gather input from first factor to change numbers
    inputFactor[1] = parseInt($("#factor2").val());
    inputWord[1] = $("#word2").val();

    // Gather input from first factor to change numbers
    inputFactor[2] = parseInt($("#factor3").val());
    inputWord[2] = $("#word3").val();

    yourArray = initializeYourArray(yourNumber);

    if (validateAllIntegers(inputFactor, yourNumber)) {
      for (var i = 0; i < 3; i++) {
        yourArray = playingYourGame(yourArray, inputFactor[i], inputWord[i], yourNumber);
      }

      for (var j = 0; j < yourArray.length; j++) {
        $("ul.yourListItem").append("<li>" + yourArray[j] + "</li>");
      }
    }
    else {
      $("ul.yourListItem").append("<li> This is not a valid input.  Please try again. <li>");
    }
  });
});
