//Q7

function Capital(str){
    let arr=str.split(" ");
    let arr1=arr.map((x)=>{
        return x[0].toUpperCase() + x.substring(1,x.length);
    })
    return arr1.join(" ");
}

console.log(Capital("cybrom technology bhopal"));


//Q5.
/*function blank(str){
    return str.trim()=="";
}
console.log(blank(""));
console.log(blank("   "));
console.log(blank("Hello"));
console.log(blank("   Hello   "));*/

