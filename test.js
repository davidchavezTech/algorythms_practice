let a = 3
let answer  = a = 3+5
answer



// let jedi = {
//     name: 'yoda',
//     height: '66cm',
//     mass: '17kg'
// }
// Object.keys( jedi ).forEach(function(key){
//     console.log(this)
// }, jedi)


// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(source);
// returnedTarget['b'] = 'x'
// console.log(target);


// console.log(returnedTarget);



// const a  = {test2: 'no'};
// const c  = 'wtf';
// const b = {};

// const myMap = new Map([ [a, 'a'], [b, 'b'] ]);

// myMap.set('yay', 2)
// console.log(myMap)


// const myArray = [1,2,3,4,5];
// const mySet = new Set(myArray);

// // for ( value of mySet.values() ) console.log(value)

// const uniqueArray = Array.from(myArray) 

// console.log(mySet)
// let a = ['1', '2', '3'];
// let b = ['4', '5', '6'];
// let c = ['x', 'y', 'z'];

// let result = [].concat(a, b);

// console.log(result);


// console.log(uniqueArray)

// console.log(myArray.filter(x => myArray.includes(x-3)))

// let arr = [1,3,5,6,11,23,8,4];

// const match = 9

// arr.map((currentValue) =>{
//     for (let i = 0 ; arr.length> i; i++){
//         if(currentValue+arr[i]===match){
//             console.log(`${currentValue} + ${arr[i]} = ${currentValue + arr[i]}`)
//         }
//         break
//     }
// })


// (()=>{
//     for(let i=1;100>i;i++){
//         if(i%3===0&&i%5===0) console.log('FizzBuzz')
//         else if (i%3===0) console.log('Fizz')
//         else if (i%5===0) console.log('Buzz')
//         else console.log(i)
//     }
// })();


// let str = 'javascript';

// const letterCounter = {};
// let max = 0;
// let max = '';


// str.split('').map(char =>{
//     letterCounter[char] ? letterCounter[char]++ : letterCounter[char] = 1;

//     if(letterCounter[char]>max){
//         max = letterCounter[char]
//         maxChar = char
//     }
// })
// console.log(letterCounter)
// console.log(max)
// console.log(maxChar)


// let str = 'i love javascript';

// console.log(
//     str.replace(/\b[a-z]/gi, char => char.toUpperCase())
// )


// arr = ['hello', 'my name is', 'bang, bang, bang'];
// console.log(
//     arr.map(currentWord=>{
//         console.log(currentWord);
//         return 1
//     })
// )

// const str = 'i love javascript';

// console.log(
//     str.split(' ')
//     .map(currentWord => currentWord[0].toUpperCase() + currentWord.substring(1))
//     .join(' ')
// )



// let str = 'hello david malca chavez'
// console.log(myFunc(str))

// function myFunc(str){

//     let wordsArray = str.split(' ');
//     for(let i=0; wordsArray.length>i;i++){
//         wordsArray[i] = wordsArray[i].substring(0,1).toUpperCase() + wordsArray[i].substring(1);
//     }
//     return wordsArray.join(' ');
// }

// let cap = 30

// //check if prime
//     for(let i=2;cap>i;i++){//testing number from cap
//         for(let j=2;i>=j;j++){//testing up until itself
//             if(i%j==0&&j!=i) {
//                 j=cap+1
//             }else if(i%j==0&&j==i){ //it's prime, 
//                 for(k=2;i>=k;k++){
//                     if(i%k==0) k=i+1//it didn't work
//                     else if (i==k){
//                         console.log(i);
//                     } 
//                 }
//                 console.log(i)
//             }
//         }
//     }
// //if one digit prime, then it's circular prime
// //if it is prime and more than one digit, check if its digits are 1 3 7 9 (can only contain these numbers)


// let test = 91;
// for(let i=0;test>i;i++){
//     if(test%i==0){
//         console.log(i)
//     }
// }












// let primary_array = [   
//     ["1","Deposit","5.00",""],
//     ["3","Food","","4.01"],
//     ["3","Cab","","0.98"],
//     ["4","Deposit","3.14",""],
//     ["4","Food","","1.99"],
//     ["5","Food","","2.00"],
//     ["6","Deposit","4.84",""],
//     ["7","Food","","3.14"],
//     ["7","Bus","","0.41"],
//     ["7","Bus","","0.34"],
// ];

// let balance = 0
// for(let i=0;primary_array.length>i;i++){
//     let iteration = primary_array[i];
//     setBalanceForArray(iteration);
// }
// function setBalanceForArray(iteration){
//     if(iteration[1]=='Deposit'){
//         balance += parseFloat(iteration[2]);
//         iteration[3] = balance.toFixed(2)
//     }else{
//         iteration[2] = iteration[3];
//         balance -= parseFloat(iteration[2]);
//         iteration[3] = balance.toFixed(2)
//     }
// }
// console.log("Date Description Withdraw Deposit Balance")
// for(let i=0;primary_array.length>i;i++){
//     let iteration = primary_array[i];
//     console.log(`${iteration[0]} ${iteration[1]} ${iteration[2]} ${iteration[3]}`)
// }