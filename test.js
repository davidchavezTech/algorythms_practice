function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        callback(url);
    }, 3000);
}

const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

download(url1,function(picture){
    console.log(`Processing ${picture}`);
    // download the second picture
    download(url2,function(picture){
        console.log(`Processing ${picture}`);
        // download the third picture
        download(url3,function(picture){
            console.log(`Processing ${picture}`);
        });
    });
});
console.log("thing 1")
console.log("thing 2")
console.log("thing 3")
// function yes(cb){
//     console.log("inside")
//     cb();
// }
// yes(function (){
//     console.log("inside cb")
// })

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
//     try{
//         setTimeout(()=>{
//             myResolve("in promise"); // when successful
//         }, 2000)
//     }catch(error){
//         myReject(error);  // when error
//     }
// });
    
// console.log(myPromise)
//     // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.finally(()=>{
//     console.log("finally")
// }).then(
//     function(value) { console.log(value) },
//     function(error) { console.log("hi", error) }
// ).finally(()=>{
//     console.log("second finally")
// });
// console.log("outside of promise")


// const getProm = function (cb){
//     setTimeout(()=>{
//         cb(3)
//     },1000)    
// }
// getProm(n =>{
//     console.log(n)
// })

// let promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(3)
//     },1000)
// });
// console.log(promise)
// promise.then(response => console.log(response))
//******************calll and bind */



////////////////ITERATE OVER OBJECT'S KEYS, VALUES, AND ENTRIES

// let myObj = {
//     'yes': 'yeap',
//     'no': 'nope',
//     'wtf': '',
//     'yer':'who'
// }

// for([key, value] of Object.entries(myObj)) console.log(`${key}: ${value}`)

// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))
// console.log(Object.entries(myObj))
///////////SET PROTOTYPE//////////////////

// const vehicle = {
//     name: 'yeah',
//     drive: function(){
//         console.log(this.name, 'yes');
//     }
// };

// const car = {
//     drive: function(){
//         console.log(this.name,'test');
//     }
// };

// Object.setPrototypeOf(car, vehicle);
// car.drive();

// //////THIS practice//////////
// const person = {
//     name: "Chaim",
//     sayName: function(){
//         console.log(this.name);
//     },
//     test: function(){
//         (()=>{
//             this.answer = 'yes'
//             console.log(this)
//         })();
//         // function myFunc(){
//         //     this.example = 'yes'
//         //     console.log(this)
//         // }myFunc()
        
//     }
// }
// // person.sayName()
// // const localSayName = person.sayName.bind(person)
// // localSayName()

// person.sayName()
// person.test();
//////////////PROMISES PRACTICE////////////////////

// function getNumber(number, cb){
//     setTimeout(() => {
//         cb(number+3);
//     }, 3000);
// }

// getNumber(1, n =>{
//     console.log(n)
// })

// function getNumberPromise(){
//     return new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 resolve(3)
//             }, 3000);
//     })
// }
// const promise = getNumberPromise();
// console.log(promise)
// promise.then(n => console.log(promise))
// console.log('yes')


//////////GET MIN AND MAX VALUES FROM ARRAY/////////////

// let arr = [1,2,3,4,10]

// const min = Math.min.apply(null, arr)
// const max = Math.max.apply(null, arr)
// console.log(min, max)

////////////////// FIND LENGTH //////////////

// let x = 1234;
// let counter = 10
// let length = 1
// // let stopper = true

// function findLength(x){
//     while(true){
//         if(x / 10 < 1) return 1
//         if(x / counter >= 1){
//             counter *= 10
//             length++
//         }else{
//             return length
//         }
//     }
// }
// console.log(findLength(x))

/////////////// SUM OF NUMBERS MINUS MIN AND MINUS MAX ////////////////

// const arr = [2,1,3,4]

// let sortedArray = arr.sort((a,b) => a - b)

// let answer = [sortedArray[0], sortedArray[sortedArray.length-1]]
// console.log(answer)

// const arr = [2,1,3,4];
// const finalObject = {}

// //remove a number from the array
// function pickNumber(arr){
//     for(let i=0;i<arr.length;i++){
//         let addition = addNumbers(i, arr)
//         finalObject[arr[i]] = addition
//     }
//     function addNumbers(index, arr){
//         let tempArr = Array.from(arr)
//         tempArr.splice(index,1)
//         let response = 0
//         for(number of tempArr) response += number
//         return response 
//     }
// }pickNumber(arr)
// pickNumber(arr)
// let arrOfkeys = Object.keys(finalObject)
// console.log(arrOfkeys[0])
// console.log(arrOfkeys[arrOfkeys.length-1])

//add the remaining numbers in array
//store the addition in object
//pick highest, lowest and return in an array

// /////////////////CHANGE DISPENSER///////////////////////
// const til = {
//     penny:12,
//     nickel:10,
//     dime:2,
//     quarter:12,
//     dollar:30
// }
// const coinsToGive = {
//     penny:0,
//     nickel:0,
//     dime:0,
//     quarter:0,
//     dollar:0
// }
// let changeLeft

// changeLeft = 20.47

// function coins(coinsWorth, coin){
//     changeLeft
//     let accumulator = 0
//     while(coinsWorth <= changeLeft && til[coin] != 0){
//         accumulator++
//         til[coin]--
//         changeLeft -= coinsWorth
//         changeLeft = round(changeLeft)
//         changeLeft
//     }
//     coinsToGive[coin] = accumulator
// }
// function round(number){
//     return parseFloat(number.toFixed(2))
// }
// let coinsWorthArray = {
//     dollar:1,
//     quarter:.25,
//     dime:.1,
//     nickel:.05,
//     penny:.01
// }
// function getChange(){
//     for(key in coinsWorthArray){
//         if(changeLeft===0) return
//         coins(coinsWorthArray[key], key)
//     }
// }
// getChange(20.47)
// console.log(coinsToGive)



//////DIFFERENT WAYS TO CREATE A CLASS ////////

// const contruct = function (name){
//     this.name = name
// }
// class constClass {
//     constructor(name){
//         this.name = name
//     }
// }

// let tryOne = new contruct('David')
// let tryTwo = new constClass('Chavez')
// console.log(tryOne)
// console.log(tryTwo)

////////// FIND MISSING NUMBER //////////////

// const ary = [10,1,2,3,4,5,6,7] // 1 number is missing
// let sortedArray = ary.sort((a,b)=>a-b)
// for(let i=0; ary.length>i;i++){
//     if((sortedArray[i+1]-sortedArray[i])!=1) {
//         console.log(sortedArray[i] + 1)
//         break
//     }
// }


////////////DOUBLE ARGUMENT FUNCTION //////////////////

// //add(1,2)
// //add(1)(2);

// let number= 0
// function add(n1, n2) {
//     if(n1,n2){
//         return number = n1+n2;
//     }else{
//         return function(n3){
//             number = n1+n3
//         }
//     }
// }
// add(1,2)
// console.log(number)
// add(1)(5)
// console.log(number)


////////////// CALL usage ///////////////////

// const a = function(x) {
//     this.x = x;
// }
// const b = function (x,y){
//     this.y = y;
//     a.call(this, x);
//     // this.x = new a(x).x
//     this.getX = function (){
//         return this.x
//     }
//     this.getY = function(){
//         return this.y
//     }
// }

// const newB = new b('s', 'y');
// console.log(newB.getX());
// newB.getY();
///////////BIND this to function or you can just change the function to arrow function

// const obj = {
//     x:1,
//     getX(){
//         const inner = function () {
//             console.log(this.x) 
//         }
//         inner.bind(this)();
//         ////OR
//         // const inner = ()=> {
//         //     console.log(this.x) 
//         // }
//         // inner();
//     }
// }
// obj.getX();
////////////// SORT numbers(even with repeated ones), with an object

// const example = [5,9,4,6,7,8,9];
// let newObj = {};
// example.forEach(number =>{
//     if(newObj[number]) newObj[number].push(number)
//     else newObj[number] = [number];
// })
// console.log(newObj)

// let answer = []
// for(x in newObj){
//     if(newObj[x].length===1) answer.push(newObj[x][0])
//     else newObj[x].forEach(number => answer.push(number))
// }
// console.log(answer)

// const a = [1,2,5,7,9,10,11,101,1000];
// const b = [2,5,7,12,100];

// function sortThem(a, b){
//     let response = []
//     while(!(a.length==0 || b.length==0)){
        
//         if(a[0]<b[0]) response.push(a.splice(0,1)[0])
//         else if(a[0]==b[0]) response.push(a.splice(0,1)[0],b.splice(0,1)[0])
//         else if(a[0]>b[0])response.push(b.splice(0,1)[0])
//     }
//     if(b.length!=0) response = [...response, ...b]
//     else if(a.length!=0) response = [...response, ...a]
//     return response
// }
// console.log(sortThem(a, b))

///////////// Deep cloning /////////////////

// const obj = {
//     a:{
//         b:{
//             c:1
//         }
//     }
// };

// const clone = JSON.parse(JSON.stringify(obj))

// clone.a.b.c = 2
// console.log((obj.a.b.c))
// console.log((clone.a.b.c))

// function getValue(obj){
//     let response
//     function iterate(obj){
//         for(key in obj){
//             if(typeof obj[key] === 'object') {
//                 iterate(obj[key])
//             }
//             else{
//                 response = obj[key]
//             }
//         }
//     }
//     iterate(obj)
//     return response
// }
// console.log(getValue(obj))
///////////// const constructors //////////////

// const a = function (x) {
//     this.x = x;
// };

// const b = function (x, y) {    
//     this.y = y;
//     this.x = new a(x).x
//     console.log(this.x)
//     this.getX = ()=> x;
//     this.getY = () => this.y
// }

// const newB = new b('x', 'y');

// console.log(newB.getX());
// console.log(newB.getY());

///////// Creating PROTOTYPE CONSTRUCTORS //////////


// Array.prototype.print = function() {
//     console.log(this.toString())
//     let response = '';
//     this.forEach(elem => response += `${elem},`)
//     response = response.slice(0, response.length-1)
//     console.log(response) 
//   };
  
//   // Use the method on any array

//   [1,2].print();




//////////CHAINING METHODS//////////////


// const obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a);
//         return this
//     },
//     getB(){
//         console.log(this.b);
//     }
// };

// obj.getA().getB();

//////////////REVERSE string//////////////////

// let x = "hello";

// let y = "ih";

// let answer = x.split('').reduce((prev, next) => prev = next + prev )
// console.log(answer)

/////// convert values from object into an array

// let x = {
//     a:1, 
//     b:2,
//     c:3
// };
// let arr = []
// for( const i in x) {
//     console.log(x[i])
//     console.log(i)
//     // console.log(value)
// }
// const xArr = Object.values(x);
// console.log(xArr)

//////////////////////TREES///////////////


// let a = [-1, 150, 190, 170, -1, -1, 160, 180]
// let treesIndexes = []
// let treelessArray = []
// let myMap = new Map();

// //store indexes
// (()=>{
//     a.filter((value, index) => { if(value==-1) treesIndexes.push(index) })
//     //create new array without "trees"
//     treelessArray = a.filter((element) => { if(element!=-1) return element });
// })();


// function getSmallest(array){

//     let smallestNumber = array[0];
//     let smallestIndex = 0;
//     for(let i=1; array.length > i;i++){
//         if(smallestNumber > array[i]) {
//             smallestNumber = array[i];
//             smallestIndex = i;
//         }
//     }
//     array.splice(smallestIndex, 1)
//     return smallestNumber
// }

// function order(array){
//     let orderedList = []
//     while(array.length != 0) orderedList.push(getSmallest(array));
//     return orderedList;
// }
// function insertTrees(treesIndexes){
//     treesIndexes.forEach( index => finalArray.splice( index, 0, -1 ) );
//     return finalArray
// }
// treelessArray
// let answer = treelessArray.sort((a,b) => a-b )
// answer
// finalArray = order(treelessArray)
// console.log(insertTrees(treesIndexes))

// //create map of open values, and closing values  equivalents
// const myMap = new Map();

// myMap.set("{", "open")
// myMap.set("[", "open")
// myMap.set("(", "open")
// myMap.set("}", "{")
// myMap.set("]", "[")
// myMap.set(")", "(")


// // sort ({[asdf]asdfasdf}asdfasdf)

// //create array to keep count
// let arr = []

// //iterate over the whole string
// function isCorrectOrder(str) {
//     for(let i = 0;i < str.length;i++) {
//         // if current character = open, add it to counting array
//         let currentValue = myMap.get(str[i]);
//         if(currentValue=='open'){
//             arr.push(str[i])
//             continue
//         } 
//         if(currentValue!=undefined && areOpenAndClosingCorrectPair(arr[arr.length - 1], str[i]) == false) return false 
//         if(myMap.get(currentValue)) arr.pop()
//     }
//     return arr.length===0 ? true : false
// }

// function areOpenAndClosingCorrectPair(open, close){
//     if(open==myMap.get(close)) return true
//     return false
// }


// console.log(isCorrectOrder('(([a{dfaas},l[]]){})'))

//else if current value not open, compare its value (closing equivalent) to LAST element of counting array
//if they match, cont,

//if no match, return false




///////seek and destroy////////
// function seekAndDestroy(arr, ...rest){
//     return arr.filter(value => !rest.includes(value))
// }

// console.log(seekAndDestroy([2,3,4,6,6, 'hello'], 2, 6))

// function seekAndDestroy(arr){
//     arr
//     const args = Array.from(arguments)
//     args
//     function filterArr(arr){
//         arr
//         //Return true if NOT in array
//         return args.indexOf(arr) === -1;
//     }

//     return arr.filter(filterArr)
// }
// console.log(seekAndDestroy([2,3,4,6,6, 'hello'], 2, 6))

//////////////////////////////
// function seekAndDestroy(array, ...values){
//     values.forEach(value =>{
//         for(let i=0; i < array.length; i++){
//             if(value == array[i]) {
//                 array.splice(i, 1)
//                 i--;
//             };
//         }
//     })
//     return array
// }

// console.log(seekAndDestroy([2,3,4,6,6, 'hello'], 2, 6))


/////////////// ADD ALL PRIMES ///////////////

// function sumOfPrimes(number){
//     let total = 0
//     let iterations = 0
//     for(let i = 2; i <= number; i++){
//         if(isItPrime(i)) total += i
//     }
//     function isItPrime(number){
//         for(let i = 2; i < number; i++){
//             if(number % i === 0) return false
//         }
//         return true
//     }
//     return total
// }
// console.log(sumOfPrimes(100))

/////////////REARANGE NUMBERS WITH MAP /////////////////////


// const numbersMap = new Map()
// numbersMap.set(0, 0);
// numbersMap.set(1, 0);
// numbersMap.set(2, 0);
// numbersMap.set(3, 0);
// numbersMap.set(4, 0);
// numbersMap.set(5, 0);
// numbersMap.set(6, 0);
// numbersMap.set(7, 0);
// numbersMap.set(8, 0);
// numbersMap.set(9, 0);
// console.log(numbersMap)

// let unorderedNumber = 12540981235845023304

// //set them in Map
// for(number of unorderedNumber.toString()){
//     number = parseInt(number, 10);
//     currentValue = numbersMap.get(number)
//     numbersMap.set(number, currentValue + 1)
// }

// console.log(numbersMap)
// //arrange them
// let arrangedNumbers = '';
// numbersMap.forEach((value, key) => {
//     for(let i = 0; value > i; i++){
//         arrangedNumbers += key
//     }
// });



// console.log(arrangedNumbers)


///////////////////////// HASH MAP PRACTICE /////////////////////////
// class HashMap{
//     constructor (){
//         this.size = 5
//         this.buckets = Array(this.size)

//         for(let i=0; this.buckets.length > i; i++){
//             this.buckets[i] = new Map;
//         }
//     }
    
//     insert(key, value){
//         let indx = hashKey(key, this.size);
//         this.buckets[indx].set(key, value);
//     }

//     search(key){
//         let indx = hashKey(key, this.size);
//         let response = this.buckets[indx].get(key)
//         if(response) return response
//         return "Not found -- Case sensitive"
//     }

//     delete(key){
//         let indx = hashKey(key, this.size);
//         if(!this.buckets[indx].get(key)) return "Not found -- Case sensitive"
//         this.buckets[indx].delete(key);
//         return `Key "${key}" was deleted successfully`
//     }
// }

// const hashKey = (key, size) => {
//     let sum = 0;
//     for(letter of key){
//         sum += key.charCodeAt(key.indexOf(letter));
//     }
//     return sum % size;
// }

// let myMap = new HashMap;

// myMap.insert('key One', 'value one')
// myMap.insert('key two', 'value one')
// myMap.insert('key Three', 'value one')
// myMap.insert('key fhree', 'value one')
// myMap.insert('key free', 'value one')
// myMap.insert('key hgree', 'value one')
// console.log(myMap.search('key One'))
// console.log(myMap)

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