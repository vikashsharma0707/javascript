async function Dohomework(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            let homework = true;
              if(homework){
                resolve("you have completed your work");
              }

              else{
                reject("you have not completed your work");
              }
         },1500);
    });
}


async function haveLunch(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            let lunch = true;
              if(lunch){
                resolve("you have finished your lunch");
              }

              else{
                reject("you have not done your lunch");
              }
         },2000);
    });
}



async function takenrest(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            let rest = true;
              if(rest){
                resolve("you have finished your lunch");
              }

              else{
                reject("you have not done your lunch");
              }
         },2000);
    });

}
async function allworkdone(){
    const dohomeworkresult = await Dohomework();
    console.log(dohomeworkresult);

    const lunchresult = await haveLunch();
    console.log(lunchresult);

    const restresult = await takenrest();
    console.log(restresult);

    console.log("all tasks are finished");

}

allworkdone();












