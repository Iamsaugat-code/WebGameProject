
let userscorer = 0;
let computerscorer =0;

let divone = document.querySelectorAll(".image_box");

const comp = () =>{
    const option = ["Rock","Paper","Scissor"];
    const ind = Math.floor(Math.random()*3);

    return option[ind];
}
let p1 = document.querySelector("#usercount");

let p2 = document.querySelector("#comp");

const bot = document.querySelector("h2");
const showans = (youwin) =>{
    if(youwin){
        let p ="you win !";
        bot.innerText =p;
        bot.style.backgroundColor = "Green";
        userscorer++;
        p1.innerText = userscorer;

    }
    else{
        let p ="you lose !";
        bot.innerText = p;
        bot.style.backgroundColor = "red";
        computerscorer++;
        p2.innerText = computerscorer;
    }
}
const playerclick = (ID) =>{
    console.log("player choice : ",ID);
    const computer = comp();
    console.log("Computer Choice : ",computer);
    if(ID === computer){
        let p =" Draw (Try Again) ";
        bot.innerText = p;
        bot.style.backgroundColor = "blue";

    }
    else{
     let youwin = true;
     if(ID ==="Rock"){
        youwin = computer==="Scissor"?true:false;
        // console.log("you win : ",youwin);
   
     }
     else if(ID ==="Scissor"){
       youwin = computer ==="Paper"?true:false;
    //    console.log("you win : ",youwin);
     }
     else{
        youwin = computer==="Rock"? true:false;
        // console.log("you loss ",youwin);
     }
     showans(youwin);
    }
}
divone.forEach((image_box)=>{

    const id = image_box.getAttribute("id");
    image_box.addEventListener("click",()=>{
    playerclick(id);
    });
});


