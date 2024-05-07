//====================================for loop=====================================//
/*for(let i=1;i<=5;i++){
    document.write("hello javascript<br>");
    console.log("hello javascript");
}*/



// add two number in loop

/*let sum=0;
 for(let i=1;i<=5;i++){
    document.write("hello javascript<br>");
    console.log("hello javascript");
    sum=sum+i;
 }
 document.write(sum);
 console.log("sum",sum);*/




// takin number from user
 /*let sum=0;
 //let n=10;
 let n=prompt("enter number");
 for(let i=1;i<=n;i++){
    document.write("hello javascript<br>");
    console.log("hello javascript");
    sum=sum+i;
 }
 document.write(sum);
 console.log("sum",sum);*/



 // print the value of i
 // i is not define outside the class 

 /*for (let i=1;i<=5;i++){
    document.write(i);
    console.log("i=",i);
 }*/






 //===========================================while loop=====================================//

 /*let i=1;
 while(i<=10){
    console.log("hello javascript");
    i++;
 }*/






//======================================do while loop================================//

/*let i=20;
do{
   console.log("hello javascript");
   i++;
}
while(i<=10);*/




/*let i=1;
do{
   console.log("hello javascript");
   i++
}

while(i<=5);*/





//===================================for of loop=======================================//
// this loop is used for string and array not for object

/*let str="javascript";
let size=0;


for(let i of str){
   console.log("i=",i);
   size++;
}

console.log("string size",size);*/




// ==========================for in loop========================================//
// this loop is mainly used for object and arrays


/*let student={
  name:"rahul",
  age:24,
  cgpa:95,
  ispass:true,
}

for(let i in  student){
   console.log(i);
}*/



// print even numbers from 1 to 100;

/*let n=prompt("enter any number")
for (i=0;i<=n;i++){
   if(i%2==0){
      console.log(i);
   }
}*/




// enter the numbee until number is not match from the given number


let gameNumber=25;

let userName=prompt("enter any number");

while(userName != gameNumber){
   userName=prompt("you entered a wrong number:guess again");
}

console.log("congratualtons you have entered a right number");



 
  

