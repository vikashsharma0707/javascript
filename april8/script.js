/*const myinterval = setInterval(display,500);

function display(){
    document.getElementById("demo").innerHTML += "Hello";
}

function stop(){
    clearInterval(myinterval);
}*/





/*const myinterval = setTimeout(display,3000);


function display(){
    document.getElementById("demo").innerHTML = "happy birthdaty";
}


function stop(){
    clearTimeout(myinterval);
}*/



/*const myinterval = setInterval(display,500);

function display(){
    document.getElementById("demo").innerHTML += "cybrom";
}

function stop(){
    clearInterval(myinterval);
}*/

/*const mytimer = setInterval(timer,1000);
function timer(){
    const date =new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function stop(){
    clearInterval(mytimer);
}*/




const myinterval = setInterval(display,500);
let count=0;

function display(){
    //  count= count+1;
   count++;
    document.getElementById("demo").innerHTML = count;
    // count++

}

function stop(){
    clearInterval(myinterval);
}
