//===================char method============================//

const mypara ="apple,Grapes,watermelon,apple";
console.log(mypara.charAt(16));

// =======================utf code=======================//
console.log(mypara.charCodeAt(0));

// ===========split to convert string to array==========================//

let x= mypara.split(",");
//console.log(x);

// ===================indexof   to get the index of any character===================//

x= mypara.indexOf("Grapes");
console.log(x);


// ============== includes    it return true or false=====================//

x= mypara.includes("watermelon");
console.log(x);

// ================search   to search index number============================//

x= mypara.search('mel');
console.log(x);


// ===================== match method==============================//

x= mypara.match(/Apple/gi);
console.log(x);


