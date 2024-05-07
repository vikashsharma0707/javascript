/*const x= new Date();

// const d=x.getDate();
// const d= x.getDay();
// const d= x.gethours();
// const d= x.getMinutes();
//  const d= x.getMilliseconds();


document.getElementById("demo").innerHTML =d*/




// =============================== craeating array(array literal)===================

const myarray = ["Bmw","ford","nissan","kia","tata"];

console.log(myarray[0]);
console.log(myarray[1]);
console.log(myarray[2]);
console.log(myarray[3]);
console.log(myarray[4]);


const newArray =new Array(34,56,89,278);
console.log(newArray);




const display = () => {
    console.log("hello");
};


const array1= ["john",34,{name: "sanjana", age:23},display];

console.log(array1);
console.log(array1[0]);
console.log(array1[2].name);


const array2 = [
    {
        id:0,
        course: 'react',
        price:34000
    },


    {
       id:1,
       course:'phython',
       price:35000

    },

    {
        id:2,
        course:'javascript',
        price:20000
 
     },


]


console.log(array2)



// ============== array lenght===============


const fruits = ["banana","apple","watermelon","grapes","mango"];
const x=fruits.length;
console.log(x);
// first element 
// let fruit = fruits[0];
// last element
let fruit =fruits[fruits.length-1];
document.getElementById("demo").innerHTML=fruits;
