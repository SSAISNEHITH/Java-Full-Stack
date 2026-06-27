function greet_afternoon(){
    let text = document.getElementById("greet");
    text.innerHTML = "Good Afternoon";  
}

function Turn_on(){
    let light = document.getElementById("light");
    light.src = "light-bulb.jpg";
}
function Turn_off(){
    let light = document.getElementById("light");
    light.src = "light-turnoff.jpg";
     let colour= document.getElementById("cat");
    colour.style.backgroundColor = "Black";
}
let greetings=["Good Morning","Good Afternoon","Good Evening","Good Night  "];
let  num=0;
function greet_afternoon(){
    let text = document.getElementById("greet");
    text.innerHTML = greetings[num];
    num++;  
    if(num==3){
        num=0;
    }
}