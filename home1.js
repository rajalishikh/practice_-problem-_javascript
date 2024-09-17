const prompt = require('prompt-sync')();
let Raj=prompt('please enter you marks :  ') ;
Raj=Number(Raj);


// Raj marks 
if(Raj <= 89 && Raj >= 80){
    console.log('Raj is got gpa A+')

}
else if(Raj<=79 && Raj >= 70){
    console.log('Raj is got A grade ')
}
else if(Raj <=69 && Raj >= 60){
    console.log('Raj is got A-')
}
else if(Raj <=59 && Raj >= 50){
    console.log('Raj is got B ')
}
else if (Raj<= 49 && Raj >= 40){
    console.log('Raj is got c')
}
else{
    console.log('Raj fail in the exam ')
}




