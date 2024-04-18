// taking input and show alert.

/*let a=prompt("enter any number");

alert("enter any number");
document.body.style.backgroundColor ="red";
console.log(a);*/


// add name and changing name 
/*let name= "john";
let newName= name;

newName ="doe";
console.log(name,newName);*/

// using alert
/*let name= prompt("enter any name");
let newName= name;

alert(name,newName);*/

// adding two numbers

/*let a= prompt("enter firstnumber");
let b= prompt("enter secondnumber");

 c=a+b;
// alert(c);

console.log("the addition of a and b is:",c);*/


/*let a=27;
let b=38;

let c=a+b;
// alert(c);

console.log("the addition of a and b is:",c);*/





// store input numbers
/*const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);*/



// square root of any number

// const a= 15;
/*const a=prompt("enter any number");
 sum=a*a;

//  alert(sum);
console.log("square root of 15 is:",sum);*/


// cube root of any number

/*const a= prompt("enter any number");

c=a*a*a;
// alert(c);
console.log("cube root is:",c);*/




// conditional statment

// let age=25;

/*let age = prompt("enter your age");

if(age>=18){
    console.log("you are eligible");
}

 if(age<18){
    console.log("you are not eligible");
}*/



// check even odd number


/*const a = prompt("enter any number");

if(a%2==0){
    // alert("even number");
    console.log("even number");
}

else{
    // alert("odd number");
    console.log("odd number");
}*/



function display(){
    let age = prompt("enter your age");
    if(age>=18){
        document.getElementById("demo").innerHTML = "you are eligible";
    }
    else{
        document.getElementById("demo").innerHTML = "you are not eligible";
    }
}

