/*
 *  freeCodeCamp Algorithm Challenge: Reverse a String
 *
 *  Reverse the provided string.
 *
 *  You may need to turn the string into an array before you can reverse it.
 *
 *  Your result must be a string
 *
 *  Helpful links:
 *    - Global String Object
 *    - Sting.prototype.split()
 *    - Array.prototype.reverse()
 *    - Array.prototype.join()
 */

function reverseString(str) {
  // split str, reverse str, join reversed str.
  return str.split('').reverse().join('');
}

// Tests
reverseString( "hello" ); // should return a string "olleh".
reverseString( "Howdy" ); // should return "ydwoH".
reverseString( "Greetings from Earth" ); // should return "htraE morf sgniteerG".
