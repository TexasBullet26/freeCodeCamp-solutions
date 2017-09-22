function findElement(arr, func) {
  var num = 0;

  // Loop to find out what number in our array returns true.
  for (var i = 0; i < arr.length; i++) {

    // If func with the array item passed into it evaluates
    // as true, then take that array item and store it in the
    // variable num and return it.
    if (func( arr[i] ) === true) {
      num = arr[i];

      return num;

    }

  }

}

// Tests
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // Should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }); // Should return undefined.
