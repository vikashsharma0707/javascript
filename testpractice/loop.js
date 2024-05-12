// normal loop
/*for(let i=1;i<=5;i++){
    console.log("apna college");
}*/

// addition of number in loop
/*let sum=0;
for(let i=0;i<=5;i++){  
    sum=sum+i;  
}
console.log(sum);*/



// even numbers from 1 to 100;

/*for(let i=0;i<=100;i++){
    if(i%2==0){
    console.log(i);
    }
}*/


let gameNum =25;
let userNum =prompt("enter any number");

while(userNum!=gameNum){
    userNum=prompt("you entered a wrong number");
}

console.log("ypou entered a right number");