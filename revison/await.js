//================= normal await method ============================//
/*async function display(){
    console.log("this is : 2");
    await console.log("this is : 3");
    console.log("this is : 4");
}

console.log("this is: 1");
display();
console.log("this is : 5");*/


//==================== await fetch data ====================//
/*async function display(){
    console.log("this is : 2");
    const response =  await fetch("json./data.json");
    console.log("this is : 3");
    const student = await response.json;
    console.log("this is : 4");
    return student;
}

console.log("this is: 1");
let a=display();
console.log("this is : 5");
console.log(a);*/



async function display(){
    console.log("hello");
    return (await fetch("json./data.json")).json();
}

display().then((res) =>{
    console.log(res);
});

display().catch((error)=>{
   console.log(error);
});