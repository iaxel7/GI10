//<--------- PRACTICE FILE FOR PROBLEMS OUTSIDE CODE-WARS------------>//







//capitalize first letter of name 

let names = ["john","mary","alex"]

function capitalizeNames(arr) {
    let newARR = []
   for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i].substring(0,1).toUpperCase(), arr[i].substring(1, arr[i].length))
    newARR.push(arr[i].substring(0,1).toUpperCase() + arr[i].substring(1, arr[i].length))
   }
   return newARR.join()
}

console.log(capitalizeNames(names))




//create a js program that checks two numbers and returns true if 1 or both equal 100
const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqualTo100(100,0));
console.log(isEqualTo100(50,50));

//create a js program to get the extension of a filename 
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'))
console.log(getFileExtension('index.html'));

//create a js program to replace every char in a given string with a char following it in the alphabet 

const moveCharForward = (str) =>
     str.split('')
    .map(char => String.fromCharCode(char.charCodeAt
    (0) + 1))
    .join(''); 

    console.log(moveCharForward("Jorge"));

//create a js program to create a new string from a given string taking the first 3 char
//and the last the char and adding them together, string length must be 3 or more if not the og string is returned

//function made through ES6 
const makeNewString = (str) => 
    //length of a string less than 3 
    str.length < 3 ? str : str.slice(0,3) +
    str.slice(-3);

    

