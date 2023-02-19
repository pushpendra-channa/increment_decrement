var number = 0;

document.getElementById("counter").innerText= number;
 function increment(){
    number++;
    if(number<0){
        number = 0;
    }
    else{number;}
    document.getElementById("counter").innerText= number;
 }

 function decrement(){
number--;
if(number<0){
    number = 0;
}
else{number;}

    document.getElementById("counter").innerText= number;
 }

 function reset(){
    number = 0;
    document.getElementById("counter").innerText= number;
 }