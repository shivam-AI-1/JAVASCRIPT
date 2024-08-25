// Q1
// no help
// const person={
// name:"john",
// age:25,
// city:"New-York",
// }
// console.log(person)


// Q2
// no help
// function getProperty(obj, prop) {
//     return obj[prop];
// }
// const obj = { 
//  name: 'Alice',
//  age: 30 };
// console.log(getProperty(obj, 'name')); 

// Q3
// no help
// function addProperty(obj, propName, propValue) {
//     obj[propName] = propValue;
// }
// const car = { 
//brand: 'Toyota',
//model: 'Corolla' 
// };
// addProperty(car, 'year', 2020);
// console.log(car); 


// Q4
// no help
// function deleteProperty(obj, propName) {
//     delete obj[propName];
// }
// const user = { 
// username: 'john_doe',
// password: '12345' };
// deleteProperty(user, 'password');
// console.log(user); 

// Q5
// no help
// function hasProperty(obj, propName) {
//     return propName in obj;
// }
// const obj = { 
// name: 'Alice',
// age: 30 };
// console.log(hasProperty(obj, 'age'));

// Q6
// no help
// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(mergeObjects(obj1, obj2));

// Q7
// Help-chatgpt

// function cloneObject(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }
// const original = { 
// name: 'Alice',
// details: {
// age: 30,
// city: 'NYC' 
// } 
// };
// const clone = cloneObject(original);
// clone.details.city = 'LA';

// console.log(original.details.city); 
// console.log(clone.details.city); 

// Q8
// Help-chatgpt
// function printProperties(obj) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             console.log(`${key}: ${obj[key]}`);
//         }
//     }
// }
// const user = { 
// name: 'John',
// age: 30, 
// city: 'New York' 
// };
// printProperties(user);

// Q9
// No help
// function countProperties(obj) {
//     return Object.keys(obj).length;
// }
// const obj = { 
// name: 'Alice',
// age: 30,
// city: 'NYC' 
// };
// console.log(countProperties(obj));

// Q10
// No Help
// function objectKeysToArray(obj) {
//     return Object.keys(obj);
// }
// const obj = { 
// name: 'Alice',
// age: 30, 
// city: 'NYC' };
// console.log(objectKeysToArray(obj)); 

// Q11
// No Help
// function objectValuesToArray(obj) {
//     return Object.values(obj);
// }
// const obj = { 
// name: 'Alice', 
// age: 30, 
// city: 'NYC' };
// console.log(objectValuesToArray(obj)); 


// Q12
// Help-chatgpt
// function arrayToObject(arr) {
//     const result = {};
//     arr.forEach(item => {
//         result[item.key] = item.value;
//     });
//     return result;
// }
// const arr = [
// { key: 'a', value: 1 },
// { key: 'b', value: 2 }
// ];
// console.log(arrayToObject(arr)); 


// Q13
// Help-chatgpt
// function groupBy(arr, prop) {
//     return arr.reduce((acc, obj) => {
//         const key = obj[prop];
//         if (!acc[key]) {
//             acc[key] = [];
//         }
//         acc[key].push(obj);
//         return acc;
//     }, {});
// }
// const users = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age:30, }
// ];
// console.log(groupBy(users, 'age'));

// Q14
// Help-chatgpt
// function findMax(arr, prop) {
//     return arr.reduce((maxObj, currentObj) => {
//         return currentObj[prop] > maxObj[prop] ? currentObj : maxObj;
//     }, arr[0]);
// }
// const users = [
//     { name: 'Alice', age: 38 },
//     { name: 'Bob', age: 28 },
//     { name: 'Charlie', age: 30
// }
// ];
// console.log(findMax(users, 'age'));


// Q15
// function sumProperty(arr, prop) {
//     return arr.reduce((total, obj) => {
//         return total + obj[prop];
//     }, 0);
// }
// const items = [
//     { name: 'item1', price: 10 },
//     { name: 'item2', price: 15 },
//     { name: 'item3', price: 20 }
// ];
// console.log(sumProperty(items,"price"));






// Beginner Friendly Questions

// Q1
// No help
// function Helloworld(){
//     console.log("Hello world")
// }
// Helloworld();


// Q2
// No help
// function sum(a,b){
//     return a+b
// }
// console.log(sum(3,5))

// Q3
// No help
// function largest_number(a,b,c){
//     if(a>b && a>c){
//         console.log("a is the greatest number")
//     }else if(b > c && b>a){
//         console.log("b is the greatest number")
//     }else{
//         console.log("c is the geeatest number")
//     } 
// }
// console.log(largest_number(2,8,5));

// Q4
// No help
// function even_number(a){
//     if (a % 2 == 0){
//         console.log("the given number is even")
//     }else{
//         console.log("the given number is odd")
//     }
// }
// console.log(even_number(4))

// Q5
// No help
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));

// Q6
// Help-chatgpt
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('hello')); 

// Q7
// hints from chatgpt
// function isPalindrome(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return str === reversed;
// }
// console.log(isPalindrome('121')); 

// Q8
// No help
// function findMin(arr) {
//     let min = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]; 
//         }
//     }
//     return min;
// }
// console.log(findMin([3, 1, 4, 1, 5])); 


// Q9
// No help
// function sortArray(arr) {
//     arr.sort((a, b) => a - b);
//     return arr;
// }
// console.log(sortArray([3, 1, 4, 1, 5])); 


// Q10
//  No help
// function contains_substring(str,substr){
//     return str.includes(substr)
// }
// console.log(contains_substring("Hello World","World"));

// Q11
// No Help
// function sumArray(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sumArray([1,2,3,4,5]))


// Q12
// No help
// var a=0 , b=1 ;
// console.log(a)
// console.log(b)
// for(var i=0;i<=2;i++){
//   var temp=a+b
//   console.log(temp)
//   a=b;
//   b=temp;
// }


// Q13
// Help- little hints taken from code saved in other compiler
// var number =435758
// var count = 0
// for(var i=2;i<number;i++){
//   if (number % i == 0){
//     count=count + 1
//   }
// }
// if (count>0){
//   console.log("the number is not prime")
// }else{
//   console.log("the number is  prime")
// }

// Q14
// No help
// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels('hello'))


// Q15
// no help
// function findIndex(arr, element) {
//     return arr.indexOf(element);
// }
// console.log(findIndex([1, 2, 3, 4, 5], 3)); 


// Q16
// Help-chatgpt
// function removeDuplicates(arr) {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueArray.indexOf(arr[i]) === -1) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }
// console.log(removeDuplicates([1,2,2,3,4,4,5]))


// Q17
// No help
// function findIntersection(arr1, arr2) {
//     const result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) !== -1 && result.indexOf(arr1[i]) === -1) {
//             result.push(arr1[i]);
//         }
//     }
//     return result;
// }
// console.log(findIntersection([1, 2, 3], [2, 3, 4])); 


//Q18
// Help-https:www.geeksforgeeks.org/javascript-program-to-check-whether-two-strings-are-anagram-of-each-other
// function areAnagram(str1, str2){
//     let n1 = str1.length;
//     let n2 = str2.length;
//     if (n1 != n2)
//         return false;
//     str1.sort();
//     str2.sort()
//     for (let i = 0; i < n1; i++)
//         if (str1[i] != str2[i])
//             return false;
//     return true;
// }
// let str1 = ["listen"];
// let str2 = ["silent"];
// if (areAnagram(str1, str2)) {

//     console.log("The two strings are" + " anagram of each other");
// }
// else {
//     console.log(
//         "The two strings are not" +
//         " anagram of each other");
// }

// Q19
// help-chatgpt
// function capitalizeWords(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0 || str[i - 1] === ' ') {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(capitalizeWords('hello world'));

// Q20
// help-chatgpt
// function flattenArray(arr) {
//     let flatArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flatArray = flatArray.concat(flattenArray(arr[i]));
//         } else {
//             flatArray.push(arr[i]);
//         }
//     }
//     return flatArray;
// }
// console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); 

// Q21
// help-chatgpt
// function randomNumber(min, max) {
//     let randomDecimal = Math.random();
//     let stretchedNumber = randomDecimal * (max - min + 1); 
//     let wholeNumber = Math.floor(stretchedNumber); 
//     let finalNumber = wholeNumber + min; 
//     return finalNumber;
// }
// console.log(randomNumber(1, 10)); 



// Q22
// No help
// function isValidEmail(email) {
//     return email.includes('@') && email.includes('.');
// }
// console.log(isValidEmail('test@example.com')); 
// console.log(isValidEmail('invalid-emailexample.com') )


// Q23
// No help
// function celsiustofarenhite(celsius){
//     return (celsius * 9/5) + 32

// }
// console.log(celsiustofarenhite(0))

// Q24
// no help
// function removeElement(arr,element) {
//     const index = arr.indexOf(element);
//     if (index > -1) {
//         arr.splice(index, 1);
//     }
//     return arr;
// }
// console.log(removeElement([1, 2, 3, 4, 5], 3)); 

// Q25
// no help
// function secondLargest(arr) {
//     arr.sort((a, b) => b - a); 
//     return arr[1]; 
// }
// console.log(secondLargest([1, 2, 3, 4, 5])); 


// Q26
// no help
// function longestWord(sentence) {
//     const words = sentence.split(' ');
//     let longest = '';
//     for (const word of words) {
//         if (word.length > longest.length) {
//             longest = word; 
//         }
//     }
//     return longest;
// }
// console.log(longestWord('The quick brown fox jumped over the lazy dog'));



// Q27
// help-chatgpt
// function findMissingNumber(arr) {
//     const n = arr.length + 1; 
//     const sum = (n * (n + 1)) / 2; 
//     const actualSum = arr.reduce((total, num) => total + num, 0); 
//     return sum - actualSum; 
// }
// console.log(findMissingNumber([1, 2, 4, 5, 6]));


// Q28
// no help
// function gcd(a, b) {
//     while (b !== 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// } 
// console.log(gcd(12, 18)); 


// Q29
// no help
// function gcd(a, b) {
//     while (b !== 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// function lcm(a, b) {
//     return Math.abs(a * b) / gcd(a, b);
// }
// console.log(lcm(4, 6)); 

// Q30
// Help-chatgpt
// function isBalanced(str) {
//     let balance = 0;
//     for (let char of str) {
//         if (char === '(') {
//             balance++;
//         } else if (char === ')') {
//             balance--;
//             if (balance < 0) return false; 
//         }
//     }
//     return balance === 0; 
// }
// console.log(isBalanced('()')); 
// console.log(isBalanced('(())')); 
// console.log(isBalanced('(()')) 


// Q31
// help-chatgpt
// function rotateArray(arr, k) {
//     while (k > 0) {
//         arr.unshift(arr.pop());
//         k--;
//     }
//     return arr;
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); 

// Q32
// help-chatg
// function sumArray(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5])); 




// ARRAY questions

// Q1
// function sumArray(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([1, 2, 3, 4, 5])); 


// Q2
// function findLargest(arr) {
//     return Math.max(...arr);
// }

// console.log(findLargest([1, 5, 3, 9, 2])); 



// Q3

// function findSmallest(arr) {
//     return Math.min(...arr);
// }

// console.log(findSmallest([1, 5, 3, 9, 2])); 


// Q4
// function sortArray(arr) {
//     return arr.sort();
// }
// console.log(sortArray([5, 2, 9, 1, 5, 6])); 


// Q5
// function sortArrayDescending(arr) {
//     return arr.sort().reverse();
// }
// console.log(sortArrayDescending([5, 2, 9, 1, 5, 6])); 

// Q6
// function reverseArray(arr) {
//     return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4, 5])); 

// Q7
// function containsElement(arr, element) {
//     return arr.includes(element);
// }
// console.log(containsElement([1, 2, 3, 4, 5], 3)); 


// Q8
// function findIndex(arr, element) {
//     return arr.indexOf(element);
// }
// console.log(findIndex([1, 2, 3, 4, 5], 3)); 

// Q9
// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 


// Q10
// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 


// Q11
// function findIntersection(arr1, arr2) {
//     const set2 = new Set(arr2);
//     return arr1.filter(value => set2.has(value));
// }
// console.log(findIntersection([1, 2, 3], [2, 3, 4])); 


// Q12
// function findUnion(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])];
// }
// console.log(findUnion([1, 2, 3], [2, 3, 4])); 


// Q13
// function isSorted(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isSorted([1, 2, 3, 4, 5])); 
// console.log(isSorted([1, 3, 2, 4, 5])); 

// Q14
// function findDifference(arr1, arr2) {
//     return arr1.filter(item => !arr2.includes(item));
// }
// console.log(findDifference([1, 2, 3], [2, 3, 4])); 
// console.log(findDifference([1, 2, 3, 5], [2 ,3 ,4]));

// Q15
// function rotateArray(arr, k) {
//     k = k % arr.length;
//     while (k--) {
//         arr.unshift(arr.pop());
//     }
//     return arr;
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2));


// Q16
// function maxDifference(arr) {
//     let maxDiff = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             maxDiff = Math.max(maxDiff, arr[j] - arr[i]);
//         }
//     }
//     return maxDiff;
// }
// console.log(maxDifference([2, 3, 10, 6, 4, 8, 1]))


// Q17
// function secondLargest(arr) {
//     if (arr.length < 2) {
//       throw new Error('Array must contain at least two elements.');
//     }
//     const uniqueArr = [...new Set(arr)]; 
//     if (uniqueArr.length < 2) {
//       throw new Error('Array must contain at least two distinct elements.');
//     }
//     uniqueArr.sort((a, b) => b - a); 
//     return uniqueArr[1]; 
// }
//  console.log(secondLargest([1, 2, 3, 4, 5]));
  

// Q18

// function maxSumPair(arr) {
//     if (arr.length < 2) {
//       throw new Error('Array must contain at least two elements.');
//     }
//     const sortedArr = [...arr].sort((a, b) => b - a);
//     return [sortedArr[1], sortedArr[0]];
//   }
//   console.log(maxSumPair([1, 2, 3, 4, 5]));


// Q19

// function minSumPair(arr) {
//     if (arr.length < 2) {
//       throw new Error('Array must contain at least two elements.');
//     }
//     const sortedArr = [...arr].sort((a, b) => a - b);
//     return [sortedArr[0], sortedArr[1]]; 
//   }
//   console.log(minSumPair([1, 2, 3, 4, 5]));
  

// Q20

// function moveZeros(arr) {
//     let result = [];
//     let zeroCount = 0;
//     for (const num of arr) {
//       if (num === 0) {
//         zeroCount++;
//       } else {
//         result.push(num);
//       }
//     }
//     return result.concat(Array(zeroCount).fill(0));
//   }
//   console.log(moveZeros([0, 1, 0, 3, 12])); 


// Q21

// function countFrequency(arr) {
//     const frequency = {};
  
//     for (const num of arr) {
//       frequency[num] = frequency[num] + 1 || 1;
//     }
//     return frequency;
//   }
//    console.log(countFrequency([1, 2, 2, 3, 3, 3]));
  
  
// Q22

// function mostFrequent(arr) {
//     const frequency = {};
//     let mostFreqElement = arr[0];
//     for (const num of arr) {
//       if (frequency[num]) {
//         frequency[num]++;
//       } else {
//         frequency[num] = 1;
//       }
//       if (frequency[num] > frequency[mostFreqElement]) {
//         mostFreqElement = num;
//       }
//     }
//     return mostFreqElement;
//   }
//   console.log(mostFrequent([1, 2, 2, 3, 3, 3]));
  


// Q23

// function longestIncreasingSubsequence(arr) {
//     if (arr.length === 0) return [];
//     let longestSubsequence = [];
//     let currentSubsequence = [arr[0]];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > arr[i - 1]) {
//         currentSubsequence.push(arr[i]);
//       } else {
//         if (currentSubsequence.length > longestSubsequence.length) {
//           longestSubsequence = currentSubsequence;
//         }
//         currentSubsequence = [arr[i]];
//       }
//     }
//     if (currentSubsequence.length > longestSubsequence.length) {
//       longestSubsequence = currentSubsequence;
//     }
//     return longestSubsequence;
//   }
//   console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]));
  
// Q24

// function longestConsecutive(arr) {
//     if (arr.length === 0) return 0;
  
//     let numSet = new Set(arr);
//     let longestStreak = 0;
  
//     for (let num of arr) {
//       if (!numSet.has(num - 1)) {
//         let currentNum = num;
//         let currentStreak = 1;
//         while (numSet.has(currentNum + 1)) {
//           currentNum += 1;
//           currentStreak += 1;
//         }
//         longestStreak = Math.max(longestStreak, currentStreak);
//       }
//     }
//     return longestStreak
// }
// console.log(longestConsecutive(["hello"]));


// STRING QUESTIONS 

// Q2

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
//   }
//   console.log(isPalindrome("racecar")); 
//   console.log(isPalindrome("hello"));   


// Q3

// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i].toLowerCase();
//       if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         count++;
//       }
//     }
//     return count;
//   }
//   console.log(countVowels("hello world"));

// Q4

// function firstNonRepeatedCharacter(str) {
//     const charCount = new Map();
//     for (const char of str) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     for (const char of str) {
//         if (charCount.get(char) === 1) {
//             return char;
//         }
//     }
//     return null;
// }
// console.log(firstNonRepeatedCharacter("swiss"));  



// Q5

// function countWords(str) {
//     str = str.trim(); 
//     if (str === "") {
//         return 0;
//     }
//     const words = str.split(' ');
//     return words.filter(word => word.length > 0).length;
// }
// console.log(countWords("This is a test string")); 


// Q6

// function areAnagrams(str1, str2) {
//     str1 = str1.toLowerCase().replace(/\s+/g, '');
//     str2 = str2.toLowerCase().replace(/\s+/g, '');
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
//     return sortedStr1 === sortedStr2;
// }
// console.log(areAnagrams("listen", "silent")); 
// console.log(areAnagrams("hello", "world"));   


// Q7

// function  replaceStrings(str){
//     return str.replace(/ /g,'-')
// }
// console.log(replaceStrings("Hello World"));

// Q8

// function toTitleCase(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
//     }
//     return words.join(' ');
// }
// console.log(toTitleCase("this is a test string")); 

// Q9

// function isNumeric(str) {
//     return /^\d+$/.test(str);
// }
// console.log(isNumeric("12345")); 
// console.log(isNumeric("123a5")); 


// Q10

// function removeDuplicates(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (result.indexOf(char) === -1) {
//             result += char;
//         }
//     }
//     return result;
// }
// console.log(removeDuplicates("programming")); 


// Q11
// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longestWord = "";
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 

// Q12

// function capitalizeFirstLetters(str) {
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (word.length > 0) {
//             words[i] = word[0].toUpperCase() + word.slice(1);
//         }
//     }
//     return words.join(" ");
// }
// console.log(capitalizeFirstLetters("javascript is fun"));

// Q13

// function repeatString(str, n) {
//     let result = "";
//     for (let i = 0; i < n; i++) {
//         result += str;
//     }
//     return result;
// }
// console.log(repeatString("abc",3 )); 



// Q14

// function containsSubstring(str, substring) {
//     return str.includes(substring);
// }
// console.log(containsSubstring("hello world", "world")); 
// console.log(containsSubstring("hello world", "planet")); 

// Q15

// function stringToWords(str) {
//     return str.split("");
// }
// console.log(stringToWords("This is a test")); 

// Q16
// function truncateString(str, length) {
//     if (str.length > length) {
//         return str.slice(0, length) + "...";
//     }
//     return str;
// }
// console.log(truncateString("This is a long string", 10)); 

// Q17

// function startsWith(str, substring) {
//     return str.startsWith(substring);
// }
// console.log(startsWith("hello world", "hello")); 
// console.log(startsWith("hello world", "world")); 

// Q18
// function endsWith(str, substring) {
//     return str.endsWith(substring);
// }
// console.log(endsWith("hello world", "world")); 
// console.log(endsWith("hello world", "hello")); 

// Q19

// function insertSubstring(original, substring, position) {
//     return original.slice(0, position) + substring + original.slice(position);
// }
// console.log(insertSubstring("Hello World", "Beautiful ", 6)); 


// Q20

// function removeSubstring(str, substring) {
//     while (str.indexOf(substring) !== -1) {
//         str = str.replace(substring, '');
//     }
//     return str;
// }
// console.log(removeSubstring("This is a test. This is only a test.", "test")) 



































































 





  






















     







  
















  










































































































console.log("Hello world")


































































































































































































































































































