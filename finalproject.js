
let btn = document.querySelector("form button");
let fromcur = document.querySelector(".flag_one select");
let tocur = document.querySelector(".flag_two select");
let optdrop = document.querySelectorAll(".flag_one select,.flag_two select");

let msg = document.querySelector("#msg");


for(let select of optdrop){
  for(countryCode in countryList){
    let newoption = document.createElement("option");
    newoption.innerText = countryCode;
    newoption.value = countryCode;
    if(select.name ==="From" && countryCode ==="NPR"){
      newoption.selected = true;
    }
    else if(select.name ==="To" && countryCode ==="USD"){
      newoption.selected = true;
    }
    select.append(newoption);
  }
  
  
  select.addEventListener("change",(evt)=>{
    updateflag(evt.target);
  });
}


const updateflag = (element)=>{
  let curCode = element.value;
  let countryCode = countryList[curCode];
  let flag = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = flag;
  
}


const exchangeupdate= async()=>{
let amt = document.querySelector("form input");
let amtval = amt.value;
if(amtval ==="" || amtval < 0){
  amtval =1;
  amt.value ="1";
}
let baseurl = `https://open.er-api.com/v6/latest/${fromcur.value.toUpperCase()}`;
let respons = await fetch(baseurl);
console.log(respons);
let data = await respons.json();
let rate = data.rates[tocur.value.toUpperCase()];

let covertedamt = rate*amtval;
msg.innerText = `${amtval} ${fromcur.value} = ${covertedamt} ${tocur.value}`;
}

btn.addEventListener("click",(evt)=>{
evt.preventDefault();
exchangeupdate();
});