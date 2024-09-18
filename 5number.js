const prompt = require('prompt-sync')();
let num1=parseInt(prompt('please give me value of num1 '));

let num2=parseInt(prompt('please give me the value of number 2 : '))
let result= num1+num2

// if (num1 >num2 ){
//     num1=num1*2
//     console.log(num1)
// }
// else {
//     console.log(result)

// }

num1= num1>num2? console.log(num1*2):console.log(result)