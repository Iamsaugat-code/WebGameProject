
let btn = document.querySelector("button");


const black= ()=>{

    return new Promise (()=>{
   
        console.log(" background color is black");
        
    });

};

const white = ()=>{

    return new Promise (()=>{

        console.log(" backgrond color is white : ");

    });

};

const blue = ()=>{
    return new Promise (()=>{
     console.log(" background color is blue : ");
    });
}


 function calling (x=1){

    setTimeout( async()=>{
    if(x===1){
        x =2;
        await black();
    }
    else if(x===2){
        x = 3;
        await white();
    }
    else{
        x = 1;
        await blue();
    }
},2000);

};

calling();