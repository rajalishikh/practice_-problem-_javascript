


// problem solving 1
//  Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

let fruits=['Apple', 'Strawberry','Pineapple','Watermelon','Mango']
fruits[2]= 'jambura'
console.log(fruits[3])

console.log(fruits)



// problem solving 2 
// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


let touristDestination=['Dhaka','CoxBajar','Sirajgonj'];
touristDestination.push('Bandorbon')
touristDestination.push('Rajshahi','Rupnai')
console.log(touristDestination)
touristDestination.pop('Rupnai')
console.log(touristDestination)

// problem solving 3 
// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.
let storeBooks=['python','c','c++','thakomar jhuri ','English grammar','javaScript']

if(storeBooks.includes('javaScript')== true){
    console.log('yes  javasCript here in the list ')

} else{
    console.log('No  javasCript not in the list ')
}

// problem solving 4 
// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

var arrayType=['raj','barat',]
var arrayType2=[12]
var arrayType3=true

console.log(Array.isArray(arrayType))
console.log(Array.isArray(arrayType2))
console.log(Array.isArray(arrayType3))