/*function display(){
    alert("hello your code is running")
}*/


/*document.getElementById("mybtn").addEventListener("click", function(){
    alert("this is addlistner evenet")
} )*/


/* by function taking*/

let x = document.getElementById("mybtn")
x.addEventListener("click", function(){
    alert("this is addlistner evenet")
} );

x.addEventListener("mousemove",myfunction);

function myfunction(){
    document.getElementById("demo").innerHTML= Math.random();
}







function result(){
    let y= document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML =y;

}


function result(){
    let y= document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML =y;

}










