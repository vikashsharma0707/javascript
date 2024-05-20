let promise = new promise((resolve,reject)=>{
   let something= true;
   if(something){
        resolve("sucessful");
   }

   else{
       reject("it is rejected")
   }

});

promise
  .then((res)=>{
    console.log(res);
    alert(res);
    
    
  })

  .catch((err)=>{
    console.log(err);
  });