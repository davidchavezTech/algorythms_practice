
//---------------------------------------------------------
// function strongestEven(n, m){
//   let response = 0;
//   let acc = 0
//   while(n <= m){
//     if(n % 2 !== 0) {
//       n++;
//       continue;
//     }
//     let currentStrongest = myFunction(n)
//     if (currentStrongest > acc){
//       response = n;
//       acc = currentStrongest
//     }
//     n++
//   }
//   return response;
// }

// const myFunction = (x) => {
//   let strongestCounter = 0;
//   while(x % 2 === 0) {
//     x/=2
//     strongestCounter++
//   }
//   return strongestCounter
// }
// 2
// console.log(strongestEven(1, 100000000))

// function narcissistic(value) {
//     // Code me to return true or false
//     const totalAddition = value
//     .toString()
//     .split("")
//     .reduce((acc, currentNum, currentIndex, arr) => Math.pow(parseInt(currentNum), arr.length) + acc, 0);
//     return totalAddition === value
//   }
// console.log(narcissistic(7))  
