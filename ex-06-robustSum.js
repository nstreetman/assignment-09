
/**
 * PART 06: robustSum()
 *
 * Modify your simpleSum function so that if either of its
 * inputs is not a number, it will return the boolean `false`
 */
 function robustSum(number1,number2){
     var sumOfASimpleSum = number1 + number2

     if(typeof number1 === "number" && typeof number2 === "number") {
       return sumOfASimpleSum

     }else {
        return false
     }
 }



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( robustSum(867, 5309)   === 6176);
console.assert( robustSum('867', 5309) === false);
console.assert( robustSum(5, true)     === false);
