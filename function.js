// IMP QUESTION (ARMSTRONG NUMBER)

//       function isArmstrong(number) {
//     let numberString = number.toString()
//     let numberOfDigits = numberString.length;
//     let sum = 0;
//     for (let i = 0; i < numberOfDigits; i++) {
//         let digit = parseInt(numberString[i]);
//         sum += digit ** numberOfDigits;
//     }
// }
// let number = 153;
// if (isArmstrong(number)) {
//     console.log(number + " is an Armstrong number.");
// } else {
//     console.log(number + " is not an Armstrong number.");
// }  
//}



// WAY NO-2


// var number = 153
// var sum = 0
// var pow = number.toString().length
// while(number>0){
//   sum=sum+(number%10**pow)
//   number = (number-(number%10))/10
// }
// console.log(sum) 