const cap = 100;

let primesList = []

for(let i=2; cap > i; i++){
    if(isItPrime(i)) primesList.push(i)
}
function isItPrime(number) {
    for(let i=2;number>i;i++){
        if(number%i == 0) return false
    }
    return true
}
let repeatingCircularPrimes = [];
primesList.forEach(number =>{
    if(isItCircularPrime(number)) repeatingCircularPrimes.push(number)
})


function isItCircularPrime(number){
    let numberArray = number.toString().split('');
    //let's check if still prime even after rearranging the order
    for(let i=0;numberArray.length - 1>i;i++){
        let lastElement = numberArray.pop(numberArray[numberArray.length-1])
        numberArray.unshift(lastElement)
        let itsPrime = isItPrime(parseInt(numberArray.join(''), 10));
        if(!itsPrime) return
    }
    return number
}
// for(let i=11;repeatingCircularPrimes.length>i;i++){
//     getRidOfRepeatingCircularPrimes(repeatingCircularPrimes[i], i)
// }

let numberArray;
let amIdeleted
console.log(getRidOfRepeatingCircularPrimes(131, 314))
function getRidOfRepeatingCircularPrimes(number, comparingNumber){
    numberArray = number.toString().split('');

    numberArray
    comparingNumber = comparingNumber.toString().split('');
    comparingNumber
    if(numberArray.length == 1) return true // means number is less than 9
    if(numberArray.length != comparingNumber.length) return false //means number's to compare lengths are different
    console.log(numberArray.length)
    while(numberArray.length>0){
        comparingNumber
        findMeAndDeleteMe(comparingNumber)
        comparingNumber
        if(amIdeleted == false){
            numberArray.length = 0
            return false
        }else if(amIdeleted==true){
            numberArray.length = 0
            return number
        }
    }
}
function findMeAndDeleteMe(comparingNumber){

    for(let i=0; numberArray.length>i;i++){
        i
        comparingNumber
        numberArray
        console.log(numberArray[0])
        console.log(comparingNumber[i])
        if(numberArray[0] == comparingNumber[i]){//found a match
            console.log(numberArray[0])
            numberArray.splice(0, 1)
            comparingNumber.splice(i, 1)
            numberArray
            comparingNumber
            i
            i--;
        }
        i
        console.log(comparingNumber.length)

        console.log(comparingNumber[i])
        console.log(numberArray[0])
        
        if(numberArray[0] != comparingNumber[i]){
            i
            amIdeleted = false
        }else if(numberArray.length==0&&comparingNumber.length==0){
            i
            amIdeleted = true
        }
    }
}
///////////////ANOTHER FAILED ATTEMPT AT CIRCULAR PRIME ALGORYTHM

// let capSizeForSearch = 1000;

// //find out if number is prime
// listOfPrimes = [];
// let answer
// for(let i = 2; i <= capSizeForSearch; i++){
//     checkIfPrime(i, listOfPrimes, answer)
// }

// //rotate them, and see if they are circular primes
// let listOfCircularPrimes = [];

// for(let i=0; i < listOfPrimes.length; i++){
//     let currentNumberToString = listOfPrimes[i].toString();
//     if(currentNumberToString.length>1){//if it's a 2 digit number or greater, then:
//         // let isCircularPrime = true;
//         let stopper
//         currentNumberToString.split('').reduce((previousNumber, currentNumber, currentIndex, word) =>{
//             let newNumberToCheck = currentNumber + previousNumber
//             checkIfPrime(parseInt(newNumberToCheck, 10),null,answer);
//             if(answer==false) stopper = true;
//             // if(answer&&currentIndex+1===word.length) listOfCircularPrimes.push(listOfPrimes[i])
//         })
//         if(!stopper) {
//             listOfCircularPrimes.push(listOfPrimes[i])
//         };
//         // if(isCircularPrime) listOfCircularPrimes.push(newNumberToCheck);
//     }else if(answer) listOfCircularPrimes.push(listOfPrimes[i])//add 1 digit primes to the list of circular primes
// }

// function checkIfPrime(number, list){
//     for(let k = 2; k <= number; k++){
//         if(number%k==0&&number!==k) {
//             answer = false;
//             break;
//         }
//         //add them to a list
//         if(number===k){
//             if(list) list.push(number);
//             answer = true;
//         }
//     }
// }



// //if they are, reorder them from lowest to highest, and add them to a set to remove duplicates
// function rearrengeNumbers(number) {
//     let lowestCurrentNumber = []
//     let arrayOfNumbers = number.toString().split('');
    
//     while(arrayOfNumbers.length>0){
//         lowestCurrentNumber.push(arrayOfNumbers[0])
//         arrayOfNumbers.splice(0,1)

//         for(let i = 0;i < arrayOfNumbers.length;i++){

//             if(arrayOfNumbers[i] < lowestCurrentNumber[lowestCurrentNumber.length-1]){
//                 switchLastItemWithAnotherOne(lowestCurrentNumber,arrayOfNumbers, i)
//             }

//         }
//     }
//     return parseInt(lowestCurrentNumber.join(''), 10);
// }
// const circularPrimesSet = new Set();
// listOfCircularPrimes.forEach(number =>{
//     // console.log(number)
//     circularPrimesSet.add(rearrengeNumbers(number))
// })
// console.log(circularPrimesSet)
// function switchLastItemWithAnotherOne(lowestNumberArray, iteratedArray, index){

//     let exLowestNumber = lowestNumberArray.pop()
//     let newLowestNumber = iteratedArray.splice(index,1)
    
//     lowestNumberArray.push(newLowestNumber[0]);
//     iteratedArray.unshift(exLowestNumber)

// }

////////////////////////////////////////////////////////////////
//output them on the console


///////////////MY OWN TRY FOR HASHMAPS/////////////////

// const hash = (key, size) => {
//     let hashedKey = 0;
    
//     for(let i=0;i<key.length;i++){
//         hashedKey += key.charCodeAt(i);
//     }
//     return hashedKey % size;
// }

// class HashTable {
//     constructor() {
//         this.size = 20;
//         this.buckets = Array(this.size);
//         for(let i=0;i<this.buckets.length;i++){
//             this.buckets[i] = new Map();
//         }
//     }

//     insert(key, value){
//         let indx = hash(key, this.size);
//         this.buckets[indx].set(key, value);
//     }

//     search(key){
//         let indx = hash(key, this.size);
//         return this.buckets[indx].get(key)
//     }

//     delete(key){
//         let indx = hash(key, this.size);
//         // let deletion = this.buckets[indx].get(key);
//         this.buckets[indx].delete(key);
//         return `Deleted ${key}`
//     }
// }

// const hashTable = new HashTable();
// hashTable.insert('test1', 'yes');
// hashTable.insert('wroking', 'yes');
// hashTable.insert('Got an interview', 'yes');
// hashTable.insert('need a collision', 'yes');
// hashTable.insert('but not getting one', 'hell yeah');
// console.log(hashTable.delete('but not getting one'))
// hashTable.insert('but not getting this', 'grrr');
// console.log(hashTable.search('Got an interview'));
// console.log(hashTable)
/////////////////////////////// HASH MAP ////////////////////////////////


// const hash = (key, size) => {
//     let hashedKey = 0;

//     for(let i = 0; i < key.length; i++) {
//         hashedKey += key.charCodeAt(i);
//     }

//     return hashedKey % size;
// }

// class HashTable {
//     constructor(){
//         this.size = 20;
//         this.buckets = Array(this.size)

//         for (let i = 0; i < this.buckets.length; i++) {
//             this.buckets[i] = new Map()
//         }
//     }

//     insert(key, value) {
//         let idx = hash(key, this.size);
//         this.buckets[idx].set(key, value);
//     }

//     remove(key) {
//         let idx = hash(key, this.size);
//         let deleted = this.buckets[idx].get(key);
//         this.buckets[idx].delete(key);
//         return deleted;
//     }

//     search(key) {
//         let idx = hash(key, this.size);
//         return this.buckets[idx].get(key);
//     }
// }

// const hashTable = new HashTable();

// hashTable.insert('serena', 'moon');
// hashTable.insert('amy', 'mercury');
// hashTable.insert('rei', 'mars');
// hashTable.insert('lita', 'jupiter');
// hashTable.insert('mina', 'venus');
// hashTable.insert('darien', 'tuxedo mask');

// console.log(hashTable.search('rei'))
// console.log(hashTable.search('lita'))
// console.log(hashTable.search('darien'))
// console.log(hashTable.search('amy'))
// console.log(hashTable.remove('amy'))

// console.log(hashTable)

/////////////////////////////////////////////

// let myMap = new Map([
//     ['wtv', 1],
//     ['asdfa', 2],
//     ['tesdsfs', 3]
// ])


// myMap

// let a = 3
// let answer  = a = 3+5
// answer



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