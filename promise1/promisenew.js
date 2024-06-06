//   normal promise function
        /*let complete =true;

        let prom = new Promise(function(resolve,reject){

            if(complete){
                resolve("promise is working");
            }

            else{
                reject("promise is not working");
            }

        });

        console.log(prom);*/

//   with function pass the promise
         /*function prom(complete){
    
            return new Promise(function(resolve,reject){
            if(complete){
                resolve("promise is working");
            }
            else{
                reject("promise is not working");
            }
        });
    }

        console.log(prom(true));*/





//      uisng arrow function and then and catch function
        /*function prom(complete){
            return new Promise(function(resolve,reject){
            if(complete){
                resolve("promise is working");
            }
            else{
                reject("promise is not working");
            }
        });
    }

    let onfullment = (result) =>{
         console.log("promise is working");
    }

    let onrejection = (error) =>{
        console.log("promise is not working");
   }


   prom(true).then(onfullment);
   prom(true).catch(onfullment);*/




   function prom(complete){
    return new Promise(function(resolve,reject){
        console.log("data is fetching please wait")
        setTimeout (() =>{

       
    if(complete){
        resolve("promise is working");
    }
    else{
        reject("promise is not working");
    }
} ,3000)
});
}

let onfullment = (result) =>{
 console.log(result);
}

let onrejection = (error) =>{
console.log(error);
}


prom(true).then(onfullment);
prom(true).catch(onfullment);

    