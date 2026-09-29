
let input = document.querySelector("#display");

let number = document.querySelectorAll(".box_1");
let cancel = document.querySelector("#cancel");

let ebt = document.querySelector("#equalto");

let del = document.querySelector("#back");


number.forEach((val)=>{

    const value = val.getAttribute("value");
    val.addEventListener("click",()=>{


        input.value += value;
    });

});

cancel.addEventListener("click",()=>{

    input.value= "";
});

ebt.addEventListener("click",()=>{

    input.value = eval(input.value);
});

del.addEventListener("click",()=>{

input.value = input.value.slice(0,-1);
});