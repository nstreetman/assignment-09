
// Part 07 : getMinimum()
// Write a function that will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).
//
// function setWeather() {
//   var choice = select.value;
//
//   if (choice === 'sunny') {
//     para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//   } else if (choice === 'rainy') {
//     para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//   } else if (choice === 'overcast') {
//     para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//   } else {
//     para.textContent = '';
//   }
// }

function getMinimum(value1, value2, value3, value4){
	if (value1<value2 && value1<value3 && value1 < value4) {
    return value1;
  } else if (value2<value3 && value2<value4 && value2<value1) {
    return value2;
  } else if (value3<value4 && value3<value1 && value3<value2) {
    return value3;
  }else{
    return value4;
  }
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,12,-5) === -11 )
