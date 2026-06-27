
// three types of variable creation.
let name="Sai";
var age=26;
const height="1.72";

//printing in javascript.
console.log(name);
console.log(age);
console.log(height); 

//concept of operators

//arthematic operatorsoperators
console.log(age+3);
console.log(age-3);
console.log(age*3);
console.log(age/3);
console.log(age%3);

//assignment operators
age+=3;
console.log(age);
age-=3;
console.log(age);
age*=3;
console.log(age);
age%=3;
console.log(age);

//relational operators
let age1=78;
console.log(age<age1);
console.log(age<=age1);
console.log(age>age1);
console.log(age>=age1);
console.log(age===age1);


//task


let amount=20000;
if(amount>=500){
    console.log(amount/500);
    
}
if(amount>=200){
    console.log(amount/200);
}
if(amount>=100){
    console.log(amount/100);
}

//for condition

for(let i=1;i<=30;i++){
    console.log("Day"+i+"Completed");
}


//Nested

//Nested-if statement

let user1="sai";
let pass1="sai@pass";
let user2="snehith";
let pass2="snehith@pass";
if(user1=="sai"){
    console.log(user1);
    if(pass1="sai@pass"){
            console.log("login successfull");
    }
}


//nesterd for loop

//task

/*5 people in circle given gift in a kamnner where skip by each
find the person who get the last gift
*/

let gift=7;
let lp;
if(gift!=0){
for(let person=1;person<=5;person++){
    if((person%2)!=0){
    console.log("Gift deliveried to person "+ person);
    gift--;
    lp=person;
    }
}
for(let person=1;person<=5;person++){
if((person%2)==0){
    console.log("Gift deliveried to person "+ person);
    gift--;
    lp=person;
}
}

    console.log(lp+"is person who got last gift");
}


//functions

function cook(){
    console.log("make dosa");
    console.log("pour oil on the pan");
    console.log("put it on the pan");
    console.log("twist it with care");
    console.log("serve it into the plate");
}
cook(); 

//task

function sum(a,b){
    console.log(a+b);
    return sum;
}
sum(1,2);

