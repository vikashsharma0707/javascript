const array1 =[];
array1[0] = "john";
array1[1] = "Doe";
array1[2] = 34;
console.log(array1);

// ============================== 
const fruits =["Banana","Apple","Chiko","Kiwi","Mango"];
/*let flen= fruits.length;
console.log(flen);
let text ="<ul>";
 for(let i=0;i<flen;i++){
    text+= "<li>" + fruits[i]+"</li>";
 }



 text+= "</ul>";
 document.getElementById("demo").innerHTML= text;



//  ====================================== add name on array

let x=fruits.push("watermelon");
console.log(x);
console.log(fruits);



// ========================= last element remove
 fruits.pop();
 console.log(fruits);



//  ============================ shift element


fruits.shift();
console.log(fruits);




// =====================================unshift element
fruits.unshift("papaya");
console.log(fruits);*/


// ================ sort method 

/*fruits.sort();
console.log(fruits);


// ======== to string (, print)
//================== to check it is array or not(true or false)
console.log(Array.isArray(fruits)); //=========check array
console.log(typeof fruits);
let x= fruits.toString();
// document.getElementById("demo").innerHTML=x;
console.log(typeof x);
// ==================== join method 
document.getElementById("demo").innerHTML =fruits.join("*");*/


// ===================================splice method      to add element


/*const fruit =["Banana","Apple","Chiko","Kiwi","Mango"];
let y=fruit.splice(2,2,"Grape","Apricot");
console.log(y);
console.log(fruit);*/





// =============================slice method
 /*let x= fruits.slice(3);
console.log(x);
console.log(fruits);*/




const veggies =["okra","carrot","cabbage","chilly"];
const newarray =fruits.concat(veggies);
console.log(newarray);
