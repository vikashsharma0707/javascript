// =====================================string methdod===============================//

//================string=================//
const mypara = "this is a string of names Rahul,yashi,pragya,mohit and rahul is good friend of jalaj";

// ==============string length=====================================//

console.log(mypara.length);

//=================slice method====================================//

let x=mypara.slice(7,30);
x=mypara.slice(7);
x=mypara.slice(-12,-1);
console.log(x);


//==========================substring,substr,replace,replaceall,==============//

x=mypara.substring(7,30);
x=mypara.substring(7);
//x=mypara.substring(-12-1);
console.log(x);


// =================replace==========================//

x= mypara.replace("rahul","arun");
console.log(x);

x=mypara.repalceAll("rahul","arun");
console.log(x);

// =========================== regular exepression  gi (global casesensitive)=================//

/*x= mypara.replace(/rahul/gi,"arun");
console.log(x);*/




const myname="john doe";
console.log(myname.toUpperCase());


const subject ="javascript";
console.log(subject.toLowerCase());


// concat charat charcodeat

// const newString = myname +" "+ subject;
// const newstring = `${myname} ${subject}`;

const newstring = mypara =myname.contact(" ",subject);
console.log(newstring);

