
// --------------------------
// Soccer points excercise - keep track of points - For games won, you get three points, for lost games, zero, for ties, get one point

// let games = ["3:1", "2:2", "0:1"]

// const points = games => {
//     let pointsGained = 0;
//     games.map(score => {
//         let scoreArr = score.split(":");
//         if(scoreArr[0] > scoreArr[1]) pointsGained += 3
//         else if(scoreArr[0] < scoreArr[1]) pointsGained--
//     })
//     return pointsGained
// }
// console.log(points(games))

//----------------------------------------------------

// const seatsInTheater = (nCols, nRows, col, row) => {
//     const totalSeats = nCols * nRows;
//     let leftSliceOfSeats = (col-1) * nRows;
//     let rightSliceOfSeats = (nCols-(col-1)) * row;
//     return totalSeats - leftSliceOfSeats - rightSliceOfSeats;
// }

// console.log(seatsInTheater(60, 100, 60, 1));

//-------------------------------------------------

// const getChar = c =>
//     String.fromCharCode(c);

// console.log(getChar(55))

//-------------------------------------------------

//find character that doesn't repeat in a given string

// const getNonRepeatedChars = str => 
//     str.split('')
//         .filter((item, index, arr) =>
//             arr.filter(arrItem => arrItem === item).length === 1
//         );

// console.log(getNonRepeatedChars('abacddbec'))


//-------------------------------------------------

//Find number of coins that go into an ammount;

// let value = 46;

// const howManyTimesIsItDivisibleByCoin = (val, coin) => {
//     let text = "";
//     let count = 0
//     while(val >= coin) {
//         val = val - coin
//         count++
//     }
//     for(let i = 0; count > i; i++){
//         text+=`${coin.toString()}, `
//     }
//     return {text, count}
// }
// const repeater = (coins = [25, 10, 5, 2, 1]) => {
//     let response = "";
//     for(let i = 0; coins.length > i; i++){
//         if(value < coins[i]) continue;
//         let answer = howManyTimesIsItDivisibleByCoin(value, coins[i])
//         if(answer.count===0) break
//         value = value - (coins[i] * answer.count)
//         response += answer.text
//     }
//     console.log(response.slice(0,response.length-2))
// }
// repeater()
//-------------------------------------------------

//Sort string in alphabetical order

//simple:

// const doIt = str => 
//     str.split("").sort().join("");


// console.log(doIt("webmaster"))


// const doIt = str => {
//     let arr = str.split("").map(letter => letter.charCodeAt(0));
//     let sortedArr = [];
//     while(arr.length !== 0){
//         let smallestNumberFromArr = arr.reduce((a, b) => a > b ? b : a);
//         sortedArr.push(arr.splice(arr.indexOf(smallestNumberFromArr), 1));
//     }
//     return String.fromCharCode(...sortedArr);
// }    

// console.log(doIt("webmaster"))

// ----------------------------------------------
// const testIt = (arr, func) => {
//     return arr.every(val => myFunc(val))
// }
// const myFunc = x => x < 6;

// console.log(testIt([1,2,3,4,5,6], myFunc))

//--------------------------------------------------

//Generate random hexadecimal color code

// const getRandomHexNumber = () => 
//     Math.floor(Math.random() * 16).toString(16);

// const getRandomHexColor = () => '#' + Array.from({ length: 6}).map(getRandomHexNumber).join('');

// console.log(getRandomHexColor());


/*---------------------------------------------------

    Convert comma-separated values (CSV) string to a 2D array.
    A new line indicates a new row in the array.

    Example:
    --------
    abc,def,ghi
    jkl,mno,pqr
    stu,vwx,yza
    
*/

// const csv = `abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza`

// console.log(csv.split("\n").map(arr => arr.split(",")))


//---------------------------------------------------------------

//compare two objects to determine if 1st one contains the same properties

// const objA = { a: 1, b: 2, c: 1};
// const objB = { a: 1, b: 2, c: 1};
// const objC = { a: 1, b: 2, d: 1};

// const compare = (a, b) => {
//     for(key in a) if(b[key]===undefined) return false;
//     return true
// }
// console.log(compare(objA, objB))


//---------------------------------------------------------------

//Get largest even number from array of intergers

// const doIt = arr => {
//     let evenNumbers = getEvenNumbers(arr);
//     return evenNumbers.length > 0 ? getLargestNumber(evenNumbers) : "No even numbers found!"

// };

// const getLargestNumber = arr => 
//     arr.reduce(
//         (a, b) => a > b ? a : b
//     )

// const getEvenNumbers = arr => arr.filter(number => number % 2 ===0);

// console.log(doIt([100,2,3,4]))


//---------------------------------------------------------------


//Find even numbers up to a a given number

// const doIt = num => {
    
//     let counter = 0
//     for(let i = 2; i <= num; i++ ) if(i % 2 === 0) counter++;
//     return counter
// }

// console.log(doIt(10))


//---------------------------------------------------------------

//find number of even numbers in an array

// const doIt = arr => 
//     arr.filter(num => num % 2 === 0).length;


// console.log(doIt([1,2,3,4,5,6]))


//---------------------------------------------------------------

//Show number closest to 100

// const closestTo100 = (num1, num2) => 
//     100 - num1 > 100 - num2 ? num2 : num1;

// console.log(closestTo100(5, 5))


//---------------------------------------------------------------

//Extract first letter from two words and add them together


// const doIt = (a, b) => 
//     a.slice(1) + b.slice(1);


// console.log(doIt("dota", "dota"))


//---------------------------------------------------------------

//Add the word "New!" if not present at beginning of string.

// const addNew = str => 
//     str.indexOf("New!") === 0 ? str : `New! ${str}`;

// console.log(addNew("New! hello world!"));


//---------------------------------------------------------------

//Get date in a mm-dd-yyyy format

// const date = new Date();
// const answer = `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`
// console.log(answer)