// Bmi calculator 
const prompt = require('prompt-sync')();
// the input section for weight 
let weight=parseInt(prompt('please give me your  weight in kg  : '));
// the in put section for height 
let heightFit=parseInt(prompt('please give me your height in to fit: '))
let heightInch=parseInt(prompt('The remaining inches of height you have give me here : '))
// the calculation section for height to convert in to meter 
let heightFitConvertMeter=heightFit*0.3048;
let heightInchConvertMeter=heightInch*0.0254;
let totalHeight=heightFitConvertMeter+heightInchConvertMeter;

// the bmi calculation part 
let BMi=weight /(totalHeight * totalHeight)


if(BMi<18.5){
    console.log('you are underweight.')

}
else if(BMi >= 18.5 && BMi<= 24.9){
    console.log('you are normal ')
}
else if (BMi >= 25 && BMi <= 29 ){
    console.log('you are over weight ')
}
else{
    console.log('you are obese ')
}