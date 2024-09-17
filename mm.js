const prompt = require('prompt-sync')();
let moneyRaj=parseInt(prompt('please tell me how much money you have: ')) 

if(moneyRaj >300){
    console.log('bro you are rich !!')

}
else{
    if(moneyRaj >100){
        console.log('you can do any thing ')
    }
    else if(moneyRaj < 0){
        console.log('dst kola kha kelshima bara ')
    }

}
