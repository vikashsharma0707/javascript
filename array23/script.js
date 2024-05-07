// =================== sort (high order function)=======================//

const array1 =[13,45,100,23,50,244];

/*array1.sort(function(a,b){
    return a-b;
});*/




// =====================decending order and reverse order===================================//
/*array1.sort(function(a,b){
        return b-a;
});


console.log(array1);
array1.reverse();
console.log(array1);*/


// ======================== 
/*const array2 =[10,23,30,40,50];

const newarray =[...array1, ...array2];
console.log(newArray);*/


// =============================== spread operator=====================================//
/*const person1={
    name: "john",
    age:   "doe",
    city: "bhopal",
};


const person2={
    lastname: "emma",
    author:   "steve",
    city: "indore",
};


const newPerson ={...person1,...person2};
console.log(newPerson);*/





//  spread operator==============//
/*const arr1 =[1,2,3];
const arr2 =[...arr1,4,5,6,7];

console.log(arr2);*/




// copy spread operator===========================//
const arr1 =[1,2,3];
const arr2 =[...arr1];
arr1.push(5);
console.log(arr1);
console.log(arr2);