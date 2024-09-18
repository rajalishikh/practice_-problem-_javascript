// nested friend 
const prompt = require('prompt-sync')();
let my_score=parseInt(prompt('please give me your marks : '))
let friend_score=parseInt(prompt('please give me your friend marks : '))

if(my_score > 80 ){
    if( friend_score> 80){
        console.log('I will go lunch with  you ')
    }
    else if(friend_score<80 && friend_score >= 60){
        console.log('Best luck for the next time ')
    }
    else if (friend_score <60 && friend_score >=40){
        console.log('I will never seen you sms ')
    }
    else if(friend_score <40){
        console.log('I will block you forever ')
    }

}
else if(my_score <80){
    console.log('I will go home and sleep and i act like i am in pain and depressed ')
}


