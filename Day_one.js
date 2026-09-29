


// let url = "https://cataas.com/api/cats?tags=cute";

// let bot = document.querySelector("button");

// bot.addEventListener("click",(evt)=>{
//  console.log(evt);
//  home();
// });

// let p = document.querySelector("p");

// const getdata = async()=>{

//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data[0].id);

//     p.innerText = data[0].id;

// }

// bot.addEventListener("click",getdata);




function getdata(data){

    return new Promise((reslove,reject)=>{

        setTimeout(()=>{
            console.log(" Data : ",data);
            reslove("\n Uploading work is finished");
        },2000);
    });
}


(async function conting(){
    console.log("Data 1 is uploading...");
    await getdata(1);
    console.log("Data 2 is uploading...");
    await getdata(2);
    console.log("Data 3 is uploading...");
    await getdata(3);
    console.log("Data 4 is uploading...");
    await getdata(4);
    
})();

// console.log("Data 1 is uploading...");
// getdata(1).then(()=>{
//   console.log("Data 2 is uploading...");
//   return getdata(2);
// }).then(()=>{
// console.log("Data 3 is uploading...");
// return getdata(3);
// }).then(()=>{
//     console.log("Data 4 is uploading...");
//     return getdata(4);
// });



// console.log("data 1 is uploading...");
// getdata(1,()=>{

//     console.log("data 2 is uploading...");
//     getdata(2,()=>{
//     console.log("data 3 is uploading...");
//     getdata(3,()=>{
//   console.log("data 4 is uploading...");
//     getdata(4);
//     });
//     });
// });


const home = ()=>{
    console.log("Your are my hero : ");
}