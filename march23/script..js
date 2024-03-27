/*function name()  {
    console.log("Hello World");
}

name();*/


// arrow function  use 
/*const name = () => {
    console.log("Hello World");
};
name();*/


// taking parameters 
/*const name = (val) => {
    console.log("Hello " + val);
};
name("john");
name("doe");



// taking varible in arrow function
const display =(fname, Iname)  => {
    console.log(fname+ " " + Iname);
};


display("shubham", "Kose");*/





// arrow function in single statement use single in function

const name1= () => console.log("hello");
name1();

// arrow function in single statement use single in function to add two number
/*const add =(x,y)  => console.log(x+y);
add(3,4);*/

// innerhtml use of arrow
/*const add =(x,y)  =>{
    return x+y;
};
add(3,4);


document.getElementById("demo").innerHTML = add(3, 4);*/


// take input from the user and multiply  by using arrow

/*let num1 =prompt("Enter first number");
console.log(num1);
let num2 =prompt("Enter second number");
console.log(num2);

const multiply =( x, y)  => {
    return x * y;
};

let output = multiply(num1, num2);
console.log(output);



document.getElementById("demo").innerHTML = output;*/



const display =()  => {
    alert("welcome to js class");
};
