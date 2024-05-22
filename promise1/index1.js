



async function Dowork(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            let work = true;
              if(work){
                resolve("promise is working");
              }

              else{
                reject("promise is not working");
              }
         },2000);
    });
}



async function allwork(){
    const workresult = await Dowork();
    console.log(workresult);
}


allwork();