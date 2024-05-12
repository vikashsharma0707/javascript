document.getElementById("row").style.backgroundColor ="blue";
let a= document.getElementById("row");
a.style.color="red";
a.style.fontSize="50px";
a.innerHTML ="this is innerhtml";
a.innerText="hello";


document.body.style.backgroundColor ="auqa";
document.body.style.color ="brown";
document.write ("this is body tag");
document.write("<h1>this is heading tag</h1>");


document.querySelector("p.row2").style.backgroundColor ="blue";
let b=document.querySelector("p.row2");
b.style.color ="red";
b.innerHTML ="this is paragrapg tag";
b.innerText="this is a paragraph text";


document.querySelector("h2.row3").style.backgroundColor = "yellow";
document.querySelector("h2.row3").style.color = "blue";
document.querySelector("h2.row3").style.fontSize ="50px";
document.querySelector("h2.row3").innerHTML ="this is h2 heading tag";

// to add text in h2
let add = document.querySelector("h2.row3");
add.innerText =add.innerText+ "hello";



