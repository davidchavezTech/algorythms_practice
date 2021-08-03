class HashMap{
    constructor (){
        this.size = 5
        this.buckets = Array(this.size)

        for(let i=0; this.buckets.length > i; i++){
            this.buckets[i] = new Map;
        }
    }
    
    insert(key, value){
        let indx = hashKey(key, this.size);
        this.buckets[indx].set(key, value);
    }

    search(key){
        let indx = hashKey(key, this.size);
        let response = this.buckets[indx].get(key)
        if(response) return response
        return "Not found -- Case sensitive"
    }

    delete(key){
        let indx = hashKey(key, this.size);
        if(!this.buckets[indx].get(key)) return "Not found -- Case sensitive"
        this.buckets[indx].delete(key);
        return `Key "${key}" was deleted successfully`
    }
}

const hashKey = (key, size) => {
    let sum = 0;
    for(letter of key){
        sum += key.charCodeAt(key.indexOf(letter));
    }
    return sum % size;
}

let myMap = new HashMap;

myMap.insert('key One', 'value one')
myMap.insert('key two', 'value one')
myMap.insert('key Three', 'value one')
myMap.insert('key fhree', 'value one')
myMap.insert('key free', 'value one')
myMap.insert('key hgree', 'value one')
console.log(myMap.search('key One'))
console.log(myMap)

/////////REMOVE BUTTON ON CLICK TEST////////

// function setup() {
//   // Write your code here.
//   let exes = document.querySelectorAll('.remove')
//   exes.forEach(x =>{
//     x.addEventListener(e =>{
//       e.currentTarget.closest('.image').remove()
//     })
//   })
// }

// // Example case. 
// document.body.innerHTML = `
// <div class="image">
//   <img src="https://goo.gl/kjzfbE" alt="First">
//   <button class="remove">X</button>
// </div>
// <div class="image">
//   <img src="https://goo.gl/d2JncW" alt="Second">
//   <button class="remove">X</button>
// </div>`;

// setup();

// document.getElementsByClassName("remove")[0].click();
// console.log(document.body.innerHTML);


// function formatDate(userDate) {
//   // format from M/D/YYYY to YYYYMMDD
//   console.log(userDate.split('/'))
//   let splitUserDate = userDate.split('/')
//   if(splitUserDate[0].length==1) splitUserDate[0] = `0${splitUserDate[0]}`
//   if(splitUserDate[1].length==1) splitUserDate[1] = `0${splitUserDate[1]}`
//   splitUserDate = [splitUserDate[2], splitUserDate[0],splitUserDate[1]]
//   splitUserDate
//   let response = splitUserDate.join('')
//   return response
// }

// console.log(formatDate("12/31/2014"));


// function removeProperty(obj, prop) {
//   if(obj[prop]){
//     delete obj[prop]
//     return true
//   }else return false;
// }
// let obj = {
//     prop: 'yes'
// }
// console.log(removeProperty(obj, 'prop'))
//////////////////// TEST CHECK ID/////////////////////////

// function createCheckDigit(membershipId) {

//   // Write the code that goes here.
//   let response;
//   let sum = 0 

//   addDigists(membershipId)
//   return response;

//   function addDigists(arrayOfNumbers){
//     sum = 0
//     arrayOfNumbers = arrayOfNumbers.toString().split('')
//     arrayOfNumbers.map(number=>{
//       number = parseInt(number, 10)
//       sum += number
//     })
//     if(sum.toString().split()[0].length==1) return response = sum
//     else addDigists(sum)
//   }
// }

// console.log(createCheckDigit("55555"));



// function ensure(value) {
//   // Your code goes here
//   if(value==false) return false
//   if(!value) throw "Function has no arguments"
//   return value
// }

// try {
//   console.log(ensure());
// } catch(err) {
//   console.log(err);
// }

/////// TEST repeating songs algorithm ///////////


// class Song {
//     name;
//     nextSong;
    
//     constructor(name) {
//       this.name = name;
//     }
    
//     /**
//      * @return {boolean} true if the playlist is repeating, false if not.
//      */
//     isRepeatingPlaylist() {
//       // Your code goes here
//       let response;
//       repeating(this);
//       return response;
//       function repeating(obj){
//         if(obj.nextSong == undefined) return response = false;
//         if(obj.nextSong.name == first.name) return response = true;
//         else repeating(obj.nextSong)
//       }
//     }
//   }

//   let first = new Song("Hello");
//   let second = new Song("Eye of the tiger");
//   let third = new Song("Redbone");
  
//   first.nextSong = second;
//   second.nextSong = third;
//   third.nextSong = first;
//   console.log(first.isRepeatingPlaylist());


////////////////////TEST QUESTION - ANSWER///////////////////////////

// let A = [1,3,6,4,1,2]

// let smallest = 1;

// function reOrderArray(A) {
    
//     let answer = []
    
//     while(A.length>0){
//         let smallest = A[0]

//         A.map( b =>{
//             if(smallest>b) smallest = b
//         })
//         //remove the current smallest from the list and add it to the ordered array
//         A.splice(A.indexOf(smallest), 1)
//         answer.push(smallest)
//     }
//     return answer
// }
// A = reOrderArray(A)
// console.log(A)
// function runIt(A){
//     for(let i=0; A.length>i;i++){
//         let current = A[i]

//         if(current==smallest) smallest = smallest + 1;
//         if(current<smallest) smallest = current + 1;
//     }
//     return smallest
// }

// console.log(runIt(A))



// ///////////////FINALLY MADE IT WORK! Circular Primes - Elapsed time for 1mil = 1611. With the "square root fix, it's now taking 389 milliseconds only////////

// // min = 3 max = 1/3
// let startingTime = Date.now()
// const cap = 1000000;
// const noNoNumbers = [ 0, 2, 4, 5, 6, 8]
// //get a list of numbers we can divide by
// let divisibleNumbers = [];


// let primesList = []

// for(let i = 3; cap > i; i++){
//     let answer = true
//     let currentNumberToStringToArray = i.toString().split('')
//     // if(i==10) debugger
//     currentNumberToStringToArray.map(x => {

//         if(noNoNumbers.indexOf(parseInt(x, 10))!=-1){
//             answer = false
//         }
//     })
//     if(answer) divisibleNumbers.push(i)
// }


// for(number of divisibleNumbers){
//     if(isItPrime(number)) primesList.push(number)
// }

// function isItPrime(number) {
//     //only use at most 1/3 of the number
//     let max = Math.ceil(Math.sqrt(number));
//     for(let i = 3; max >= i; i++){
//         if(number%i == 0) return false
//     }
//     return true
// }
// let repeatingCircularPrimes = [ 2 ];
// primesList.forEach(number =>{
//     if(isItCircularPrime(number)) repeatingCircularPrimes.push(number)
// })


// function isItCircularPrime(number){
//     let numberArray = number.toString().split('');
//     //let's check if still prime even after rearranging the order
//     for(let i=0;numberArray.length - 1>i;i++){
//         let lastElement = numberArray.pop(numberArray[numberArray.length-1])
//         numberArray.unshift(lastElement)
//         let itsPrime = isItPrime(parseInt(numberArray.join(''), 10));
//         if(!itsPrime) return
//     }
//     return number
// }

// let numberArray;
// let amIdeleted

// let circularPrimeList = Array.from(repeatingCircularPrimes)

// function getRidOfRepeatingCircularPrimes(mainNumber, comparingNumber){

//     let mainNumberArray = mainNumber.toString().split('');
//     let comparingNumberArray = comparingNumber.toString().split('');
//     let answer
//     // if(mainNumber==337&&comparingNumber==733) debugger
    
//     compareAndDelete(mainNumberArray, comparingNumberArray)
//     function compareAndDelete(mainNumberArray, comparingNumberArray){
//         // if(mainNumber==79) debugger
//         //check if length are the same
//         if(mainNumberArray.length == comparingNumberArray.length) {
//             for(let i = 0; comparingNumberArray.length > i; i++) {//compare every number from comparingNumberArray
//                 //if we are checking the last number from the comparing array and still no match, numbers are not equal
//                 if(i==comparingNumberArray.length-1&&mainNumberArray[0]!=comparingNumberArray[i]) break;
//                 if(mainNumberArray[0]==comparingNumberArray[i]){//found match!
//                     mainNumberArray.splice(0,1);//remove numbers from arrays
//                     comparingNumberArray.splice(i,1);
//                     i= -1; //reset forLoop
//                 }
//             }
//             //check if everything went ok
//             if (mainNumberArray.length == 0) answer = true 
//         }else answer = false
//     }
//     if(answer) circularPrimeList.splice(circularPrimeList.indexOf(comparingNumber), 1)
// }
// repeatingCircularPrimes.forEach(number =>{
//     //if number is one digit, then don't bother
//     if(number>10){ 
//         for(let i = repeatingCircularPrimes.indexOf(number) + 1; repeatingCircularPrimes.length > i; i++){
//             if(circularPrimeList.includes(number)){ //means the number we are looking for has already been deleted from the other list, ignore it
//                 getRidOfRepeatingCircularPrimes(number, repeatingCircularPrimes[i])
//             }
//         }
//     }
// })
// let endingTime = Date.now();
// console.log(circularPrimeList)
// console.log(endingTime - startingTime)


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