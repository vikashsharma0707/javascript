//======================rest parameter  it is type of spread parameter===================//
/*let display =function(...num1){
    console.log(num1);
};

display(3);
display(4,5);
display(5,6,7,8,9,10);*/


/*let sum = function(x,y,z){
    console.log(x+y+z);
};


const array1=[1,3,4,5,7];
sum(...array1);*/



// destructuring

/*const myarray =[1,2,3,4,5,6];

const[a,b,c,d] =myarray;
console.log(a,b,c,d);*/





// destrucuring with spread operator
/*const myarray =[1,2,3,4,5,6,7,8,9,10];

const[a,b,c,d, ...num] =myarray;
console.log(a,b,c,d);
console.log(num);*/





// destructuring in object



const person ={
    name:  "john",
    id:1,
    age:30,

};


/*const {name,id ,age} = person;
console.log(name,id,age);*/

// add name on it 
const {name:username, id:i, age:myage} =person;
console.log(username,i,myage);








