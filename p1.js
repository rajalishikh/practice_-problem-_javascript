const prompt = require('prompt-sync')();
let burger = parseInt(prompt('please tell me how much burger do  you want to buy : '));
if(burger>500){
    console.log('you got free coke ')
}
else{
    console.log(' you will pay for coke 30 taka ')

}