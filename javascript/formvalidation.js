
const display = () =>{
  let myname =document.form2.name.value;
  let myname2 =document.form2.lastname.value;
  let myemail =document.form2.email.value;
  let mypass =document.form2.password.value;
  let myconfirmpass =document.form2.confirmpassword.value;
  let mynumber = document.form2.mobilenumber.value;
  let myadd= document.form2.add.value;


if(myname == ""){
    alert("enter your name:");
    document.form2.name.focus();
    return false;
}



if(myname2 == ""){
    alert("enyter your name:");
    document.form2.lastname.focus();
    return false;
}


if(myemail == ""   ||  !myemail.includes('@')  ){
    alert("enyter your email:");
    document.form1.email1.focus();
    return false;
}


if(mypass.lenght < 6){
    alert("password should be greater than 8:");
    document.form1.password.focus();
    return false;
}


}