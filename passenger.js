// basic declaration of variable 
const prompt = require('prompt-sync')();
const ticketPrice= 800;
let passenger=prompt('please give me the information about passenger  : ')
let passengerAge=parseInt(prompt('if your passenger is children or senior citizens please give me there age other wish write nothing  '))
// conditions for Children 

if (passenger == 'Children' && passengerAge < 10 ){
    console.log('you got free ticket ')}
// conditions for students 
else if(passenger == 'Students'){
    let ticketPriceDiscount=(ticketPrice)-ticketPrice*50/100
    console.log('Now you got 50% discount on your tickets and the price is :',ticketPriceDiscount)

}
// conditions for  senior passenger 
else if (passenger == 'Senior citizens' && passengerAge >= 60){
    let ticketPriceDiscountSenior=(ticketPrice)-ticketPrice*15/100;
    console.log('you are senior citizens so you got 15% discount on your tickets now total price of your tickets is ', ticketPriceDiscountSenior)
}
// conditions for general citizens 

 else{
    console.log("you need to give the full price of tickets 800 taka only ")
}