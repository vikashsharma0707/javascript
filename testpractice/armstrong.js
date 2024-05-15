
// armstrong number
/*let num=prompt("enter any number");
let rem;
let sum=0;
let i;

i=num;
while(num>0){
    rem=num%10;
    sum=sum+(rem*rem*rem);
    num=num/10;

}

 if(i==sum){
    console.log("number is armstrong");
 }

 else{
    console.log("number is not armstrong");
 }*/



 //pelidrome number


 /*let num=prompt("enter any number");
 let rem;
 let sum=0;
 let i;


 i=num;

 while(num>0){
    rem=num%10;
    sum=sum*10+rem;
    num=parseInt(num/10);
 }

 if(i==sum){
    console.log("number is pelidrome");
 }

 else{
    console.log("number is not pelidrome");
 }*/


// table print
 /*let n=2;


 for(let i=1;i<=10;i++){
    console.log(n*i);
 }*/



/*const now= new Date();
document.write(now);*/

/*
const now = new Date();
document.write(now.getDate());*/


/*const now =new Date();
document.write(now.getDay());*/

/*const now= new Date();
document.write(now.getMinutes());*/


/*const now =new Date();
now.setMonth(4);
document.write(now);*/


var a=0;
 var id=setInterval(display,1000);

function display(){
    a=a+10;
    if(a==200){
        clearInterval(id);
    }

    
    console.log(a);
}

