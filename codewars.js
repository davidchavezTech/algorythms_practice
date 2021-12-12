var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

function sudoku(puzzle) {
    let iterate = true;
    while(iterate){
        puzzle.forEach((rowArr, row) => {
            rowArr.forEach((val, col) => {
                let value = rowArr[col];
                if(value) return
                const groupRange = getCurrentGroupRange(row, col);
                const currentPosibilities = possibilities(groupRange, value);
                currentPosibilities.some( posibility => {
                    let check1 = checkRows(value, row, groupRange);
                    let check2 = checkColums(value, col, groupRange)
                    if(check1 && check2) {
                        console.log("found")
                        puzzle[row][col] = posibility
                        iterate = cont();
                        return true
                    }return false;
                })
            })
        })
    }
    
    
    // checkColums(value, col, groupRange.maxCol)
    // checkRows(8, row, 8)

    console.log(puzzle)
}
const cont = () => {
    return !puzzle.every(row => {
        row.every(value => value !== 0)
    })
}

const getCurrentGroupRange = (row, col) => {
    const obj = new Object;

    (col + 1) % 3 === 0 ? obj.maxCol = col :
    (col + 2) % 3 === 0 ? obj.maxCol = col + 1 :
    obj.maxCol = col + 2;

    (row + 1) % 3 === 0 ? obj.maxRow = row :
    (row + 2) % 3 === 0 ? obj.maxRow = row + 1 :
    obj.maxRow = row + 2;

    return obj
}

const checkColums = (value, col, {maxCol}) => {
    let minCol = maxCol - 2
    let midCol = maxCol - 1

    //check if value is found on columns
    
    //First part returns true if we are trying to iterate over current col which we should skip, else, we search all rows in that column for that value.
    let response1 = minCol === col ? true : puzzle.some(row => row[minCol]  === value);
    let response2 = midCol === col ? true : puzzle.some(row => row[midCol]  === value);
    let response3 = maxCol === col ? true : puzzle.some(row => row[maxCol]  === value);

    return response1 && response2 && response3;

}
const checkRows = (value, row, {maxRow}) => {

    let minRow = maxRow - 2
    let midRow = maxRow - 1

    //check if value is found on row
    
    //First part returns true if we are trying to iterate over current row which we should skip, else, we search all rows in that row for that value.

    let response1 = minRow === row ? true : puzzle[minRow].some(element => element === value);
    let response2 = midRow === row ? true : puzzle[midRow].some(element => element === value);
    let response3 = maxRow === row ? true : puzzle[maxRow].some(element => element === value);

    return response1 && response2 && response3;
    
}
const possibilities = ({maxRow, maxCol}, value) => {
    let minRow = maxRow - 2;
    let midRow = maxRow - 1;

    let minCol = maxCol - 2;
    let midCol = maxCol - 1;

    const posibilitiesArr = [1,2,3,4,5,6,7,8,9]
    const imposibleNumbers = [];

    //map around the max and min range to extract all numbers other than the current value
    [minRow, midRow, maxRow].map(row =>
        [minCol, midCol, maxCol].map(col => puzzle[row][col] > 0 && puzzle[row][col] !== value 
            ? imposibleNumbers.push(puzzle[row][col])
            : null)
    );
    //subtract the numbers that we found so that we only keep the ones that we can actually use
    imposibleNumbers.map(impNum => posibilitiesArr.splice(posibilitiesArr.findIndex(currentNum => currentNum === impNum), 1));
    return posibilitiesArr
}

// const checkCurrentColumn = (col,currentIndex) => {
//     return puzzle.every((row, index) => currentIndex === index ? true : row[col] !== 0  )
// }
// const checkCurrentRow = (row,currentIndex) => {
//     return puzzle[row].every((value, i) => i === currentIndex ? true : value !== 0)
// }

console.log(sudoku(puzzle));

    // console.log(sudoku.puzzle)

// function solution(list){
//     // TODO: complete solution 
//     const response = []
//     const group = [list[0]]
//     for(let i = 1; i < list.length; i++){
        
//         let previousValue = list[i-1]
//         let currentValue = list[i]
//         if(previousValue+1 === currentValue){ //compare previous value with current
//             group.push(currentValue)
//             if(i === list.length -1 ) response.push(...groupFunc(group));
//             continue;
//         }else{
//             response.push(...groupFunc(group));
//             group.length = 0;
//             group.push(currentValue)
//             if(i === list.length -1 ) response.push(currentValue)
//         }
//     }
//     return response.join(",")
// }
// const groupFunc = (group) =>{
//     if(group.length <= 2) return group
//     return [`${group[0]}-${group[group.length-1]}`]
// }

// console.log(solution([-56,-53,-51,-49,-46,-43,-41,-39,-38,-35,-34,-31,-29,-27,-26,-23,-22,-20]))
// ----------------------------------------

// function sortArray(array) {
//     const obj = {}
//     const response = array.filter(
//         (element, index) => {
//             if(element % 2 === 0){
//                 obj[index] = element;
//                 return false
//             }return true      
//     }).sort((a,b) => a-b);
//     for(key in obj) response.splice(key, 0, obj[key])
//     return response
// }

// console.log(sortArray([5, 8, 6, 3, 4]))
// ----------------------------------------------

// function inArray(array1,array2){
//     return array1.filter( string =>
//         a2.some(string2 =>
//             string2.toLowerCase().includes(string.toLowerCase())
//         )
//     ).sort()
// }
//   a1 = ["live", "strong", "arp"]

//   a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

//   console.log(inArray(a1,a2))

//---------------------------------------------------------------------------

// function comp(array1, array2){
//     if(!array1 ||!array2) return false
//     array1 = array1.sort((a, b) => a-b);
//     array2 = array2.sort((a, b) => a-b);
//     array2 = array2.map(element => Math.sqrt(element));
//     return array1.every((element, index) => {
//         return element === array2[index]})
// }
// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// console.log(comp(a, b))
//---------------------------------------------------------------------------

// function duplicateCount(text){
//     text = text.toLowerCase().split("")
//     let repeated = 0
//     while(text.length > 0){
//         let letterToFilter = text.shift();
//         if(text.indexOf(letterToFilter) >=0){
//             repeated++
//             text = text.filter(letter => letter !== letterToFilter);
//         }
//     }
//     return repeated
//   }

// console.log(duplicateCount("Indivisibility"))
/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

*/

// const spinWords = string => string.split(" ")
//     .map(word => word.length >= 5 ? word
//         .split("")
//         .reverse()
//         .join("")
//     : word)
//         .join(" ");

// console.log(spinWords("Hey fellow warriors"))

// ----------------------------------------------------------


// const order = words => words.split(" ")
//     .sort((a, b)=> a.match(/\d/) - b.match(/\d/))
//     .join(" ");


// function order(words){
//     if(!words) return ""
//     const key =  words.match(/[0-9]/g)
//     const obj = {}
//     words.split(" ").map( (word, index) => obj[key[index]] = word);
//     let response = []
//     for( let value in obj) response.push(obj[value]);
//     return response.join(" ")
//   }
// console.log(order("is2 Thi1s T4est 3a"))

// -----------------------------------------------------

// function digital_root(n) {
//     while(n > 9){
//         n = n.toString()
//         .split("")
//         .reduce((acc, value) => acc + parseInt(value), 0);
//     }
//     return n
// }

// console.log(digital_root(942))
// -----------------------------------------------------


// const countBits = n => n
//     .toString(2)
//     .split("")
//     .reduce( (acc, string) => acc + parseInt(string), 0);

//     //return n.toString(2).replace(/0/g,'').length
//   console.log(countBits(1234))

// --------------------------------------------------

// var moveZeros = function (arr) {
//     // TODO: Program me
//     const zeros = []
//     const response = arr.filter(value => {
//         if(value === 0) {
//             zeros.push(0)
//             return false
//         }
//         return true

//     });
//     return [...response, ...zeros]
//   }

//   console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

// -----------------------------------------------------------

// function solution(str){
//     const response = []
//     while (str.length > 1) {
//         response.push(str.slice(0,1) + str.slice(1,2));
//         str = str.slice(2);
//     }
//     if(str.length === 1) response.push(str + "_")
//     return response;
// }
// console.log(solution("abc"))

// ------------------------------------------------------

// const filter_list = l => l.filter(value => typeof(value) === "number");

// let list = [1,2,'a','b'];

// console.log(filter_list(list))

/*

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/

// String.prototype.toJadenCase = function () {
//     return this
//     .split(" ")
//     .map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// };

//   var str = "How can mirrors be real if our eyes aren't real";

// console.log(str.toJadenCase())

/*
According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing
    Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an
    instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human,
    Man and Woman classes.
*/
// class God{
//     /**
//      * @returns Human[]
//      */
//       static create(){
          
//         return [new Man, new Woman]
//     }
// }
// class Human {

// }
// class Man extends Human {
// }
// class Woman extends Human{

// }

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
