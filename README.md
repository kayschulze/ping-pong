# _Ping-Pong_

#### _Website counts up from one replacing some numbers with "ping", some with "pong", and some with "pingpong", {Date of current version}_

#### By _Kim Schulze_

## Description

_This website runs a game that accepts a user entering an integer number.  The site then starts displaying numbers counting up from 1.  While counting, the site replaces all numbers divisible by 3 with the word "ping", all numbers divisible by 5 by the word "pong", and all numbers divisible by 15 by "ping-pong".  The game refreshes for each new userInput._

## Setup/Installation Requirements

* _This website is programmed using_
* _HTML, CSS, and Javascript_
* _and should be run on an up-to-date browser._

_This file contains a folder for CSS (css), Javascript (js), and images (img) that are linked-to as necessary from the HTML document._

## Specifications
1. It can count up to the provided number.
* Example Input: 2
* Example Output: [1, 2]
2. Numbers divisible by 3 are replaced with "ping"
* Example Input: 4
* Example Output: [1, 2, ping, 4]
3. Numbers divisible by 5 are replaced by "pong"
* Example Input: 7
* Example Output: [1, 2, ping, 4, pong, ping]
4. Numbers divisible by 15 are replaced with "ping-pong"
* Example Input: 15
* Example Output: [1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, ping-pong]
5. Inputs that are invalid (less than 1, decimal, or not a number) are given an error message and prompt the user for a new input.
* Example Input: Q
* Example Output: This is not a valid input.  Please try again.
6. Output from each previous attempt erases.
* Example Input: 5 after output of [1,2, ping]
* Example Output: [1, 2, ping, 4, pong]
7. Spruce-Up the website to make it appealing to users.
8. User can add at least one factor and word to make their own game.
* Example Input: [4, hey, 8]
* Example Output: [1, 2, 3, hey, 5, 6, 7, hey]
9. User can add at least three factors and words to make their own game.
10. User's game is validated for errors.

## Known Bugs

_There are no known issues or bugs with this version at this time._

## Support and contact details

_For additional support, please contact Kim Schulze at kimberlykayschulze@gmail.com_

## Technologies Used

_This website is written with HTML and CSS and is programmed using Javascript._

### License

*This website is version 1.0.*

Copyright (c) 2017 **_Kim Schulze_**
