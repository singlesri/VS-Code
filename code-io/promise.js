isHalwaThere = true;

function waitInQueue(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve('Buy 1/2 kg Halwa');
            }
            else{
                reject('Halwa Finished');
            }
        }, 1000);
    });
}

function buyHalwa(){
    waitInQueue().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('Go Home');
    })
}

buyHalwa();