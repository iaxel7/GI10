// Problem 1: Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNumbers(numbers) {
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);
    // Return the sum of the first two numbers
    return numbers[0] + numbers[1];
  }
  //<-----Arrays i feel are one of my strengths so finding the solution to this problem wasn't too difficult------>//





  // Problem 2: Create a function that takes an array of numbers and returns the sum of all the positive numbers.
  function positiveSum(arr) {
    // Initialize sum variable
    let sum = 0;
    // Loop through array
    for (let num of arr) {
      // Add positive numbers to sum
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  //<------ I knew I had to loop through the array to find all the positive numbers, at first creating a if statement didn't come to mind------>//
 
 
 
  // Problem 3: Write a function that takes a string as input and returns the reversed string.
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  //<-----I did a similar problem when practicing white-boarding with my peers, so i implemented a similar solution leveraging methods------>





  // Problem 4: Write a function that takes an array of numbers and returns the difference between the largest and smallest numbers.
  function differenceMaxMin(arr) {
    // Find maximum and minimum values in the array
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    // Return the difference
    return max - min;
  }

  ///<--------- I learned the spread syntax from learnjs.com and used it 
  //...arr is used to spread the elements of the array arr as individual values ---->//







  // Problem 5: Write a function that takes a string as input and returns true if it's a valid password, false otherwise.
  // Password should be at least 5 characters long and contain at least one uppercase letter and one lowercase letter.
  function validPassword(password) {
    // Regular expression to match valid passwords
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    return regex.test(password);
  }

//<--------- I had experience working with regex from my projects that involved js validation, 
//the ^ starts a new string and the $ ends it, the .{5} ensures it 5 char lon-------------->//
  







  // Problem 6: Write a function that takes a number as input and returns true if it's a prime number, false otherwise.
  function isPrime(num) {
    // 0 and 1 are not prime numbers
    if (num <= 1) return false;
    // Check for factors from 2 to sqrt(num)
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

//<-----i had to do a refresher on what prime numbers are as well----->








  
  // Problem 7: Write a function that takes a string as input and returns the number of vowels in the string.
  function countVowels(str) {
    // Define a string containing all vowels
    const vowels = 'aeiouAEIOU';
    // Initialize a variable to store the count of vowels
    let count = 0;
    
    // Iterate over each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a vowel
      if (vowels.includes(str[i])) {
        // If it is a vowel, increment the count
        count++;
      }
    }
    
    // Return the count of vowels found in the string
    return count;
  }


//<------ I didnt know how to approach this question at first, I was told from peers that it might be easier with a regex----->//




  
  // Problem 8: Write a function that takes an array of strings and returns the longest string.
  function longestString(arr) {
    // Initialize variable to store longest string
    let longest = '';
    // Loop through array
    for (let str of arr) {
      // Update longest string if current string is longer
      if (str.length > longest.length) {
        longest = str;
      }
    }
    return longest;
  }

  //<----- I used a for of loop which iterates through every char in the string, just a simpler syntax for a for loop------>
  

