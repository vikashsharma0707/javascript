document.getElementById("demo").innerHTMl = "Hello world";

document.write("<h2>this is a nem heading</h2><p> lorem ipsnu data</p>");

let frame = "john";
let iname = "doe";

//  using backticts

document.getElementById( "demo")
.innerHTML = `hello ${frame} ,  ${iname},  welcome to js class  `;
document.write("<h2>this is a nem heading</h2><p> lorem ipsnu data</p>");

function display() {
  let obj = document.getElementById("demo2");
  obj.style.background = "pink";
  obj.style.border = "3px solid red";
  obj.innerHTML = `

<table>
<tr>
<th>Name</h>
<th>course</h>
<th>city</h>
</tr>
<tr>
<th>john</h>
<th>java</h>
<th>bhopal</h>
</tr>
<tr>
<th>Name</h>
<th>Name</h>
<th>Name</h>
</tr>
</table>

`;
}




function row() {
    let obj1 = document.getElementById("demo4");
    obj1.style.background = "blue";
    obj1.style.border = "4px doted red";
    obj1.style.color=  "brown";


}
  