## **Basic Algorithm Scripting - *Factorialize a Number***
#### From freeCodeCamp's Basic Algorithm Scripting "Factorialize a Number"
[freeCodeCamp - Factorialize a Number](https://www.freecodecamp.com/challenges/factorialize-a-number)

### **Algorithm Challenge**
###### Return the factorial of the provided integer.
###### If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
###### Factorials are often represented with the shorthand notation **n!**
###### For example: **5! = 1 * 2 * 3 * 4 * 5 = 120**
###### Here are some helpful links:
* [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
```javascript
function factorialize(num) {
  return num;
}
factorialize(5);
```
### **Provided test cases**
* ##### ***factorialize(0)*** should return 1
* ##### ***factorialize(5)*** should return 120
* ##### ***factorialize(10)*** should return 3628800
* ##### ***factorialize(20)*** should return 2432902008176640000

## **Factorialize a Number with a FOR loop**
```javascript
function factorialize(num) {
  // If num = 0 OR num = 1, the factorial will return 1
  if ( num === 0 || num === 1 )
    return 1;
  // Start the FOR loop with i = 4
  // Decrement i after each iteration
  for ( var i = num - 1; i >= 1; i-- ) {
    num *= i; // Store the value of num at each iteration
  }
  return num; // 120
}
factorialize(5);
```

### **Visual Example:**

iteration | num | var i = num - 1 | num *= 1 | i-- | i >= 1? |
--------- | --- | --------------- | -------- | --- | ------- |
1st iteration: | 5 | 4 = 5 - 1 | 20 = 5 * 4 | 3 | yes |
2nd iteration: | 20 | 3 = 4 - 1 | 60 = 20 * 3 | 2 | yes |
3rd iteration: | 60 | 2 = 3 - 1 | 120 = 60 * 2 | 1 | yes |
4th iteration: | 120 | 1 = 2 - 1 | 120 = 120 * 1 | 0 | no |
5th iteration: | 120 | 0 | 120 | | |
End of the FOR loop | | | | | |
