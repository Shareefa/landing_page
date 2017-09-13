var flag = 1;
var a = document.getElementById("subtext");
console.log("what");
console.log(a)
if(a){
    a.addEventListener("animationend", function( event ) {
        if(flag){
            a.style.animationName =  'none';
        }
        else {

            //a.style.animationName = 'none';

            a.style.width = '3.2em'
        }
    },false);
}

setTimeout(function(){
    console.log(a.style.animationDuration);
    console.log(a);
    console.log("trying to type");
    a.innerHTML = "Hacker";
    a.style.animationName = 'typing1';
}, 3100)

setTimeout(function(){
    console.log(a);
    console.log("trying to type");
    a.innerHTML = "Leader";
    console.log(a.style.animationDuration);
    a.style.animationDuration = "1.5s";
    a.style.animationName = 'typing2';
    flag = 0;
}, 6200)

setTimeout(function(){
    a.style.borderRight = 'none';
}, 7900)
