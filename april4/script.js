const validate = () =>{
let myname = document.form1.name.value;
let myemail= document.form1.email.value;
let myadd= document.form1.add.value;
let mypass= document.form1.pass.value;


if(myname == ""){
    alert("enyter your name:");
    document.form1.name.focus();
    return false;
}


if(myemail == ""   ||  !myemail.includes('@')  ){
    alert("enyter your email:");
    document.form1.email1.focus();
    return false;
}

if(myadd == ""){
    alert("enyter your name:");
    document.form1.add.focus();
    return false;
}


if(mypass.lenght < 6){
    alert("password should be greater than 8:");
    document.form1.pass.focus();
    return false;
}

}

/*const validate1 = () => {
  let myname = document.form1.name.value;
  let mypass = document.form1.pass.value;

  if (myname == ""  ) {
    alert("enyter your name:");
    document.form1.name.focus();
    return false;
  }

  if (mypass.length < 8) {
    alert("password should be greater than 8");
    document.form1.pass.focus();
    return false;
  }
};*/
