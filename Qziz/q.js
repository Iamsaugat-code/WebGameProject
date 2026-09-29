const data = {
  question: [
    {
      Ques: " 1 . How many Goal is scored By Cristaino Ronaldo ? ",
      opt: [
        { ans: 223, corect: false },
        { ans: 940, corect: false },
        { ans: 954, corect: true },
        { ans: 960, corect: false },
      ],
      indvalue: 2,
    },
    {
      Ques: " 2 . How many Bicycle Kick is short By Cristaino Ronaldo ?",
      opt: [
        { ans: 4, corect: false },
        { ans: 7, corect: false },
        { ans: 8, corect: true },
        { ans: 5, corect: false },
      ],
      indvalue: 2,
    },
    {
      Ques: " 3 . How many Assist is made By Leonel Messi ? ",
      opt: [
        { ans: 401, corect: true },
        { ans: 400, corect: false },
        { ans: 389, corect: false },
        { ans: 405, corect: false },
      ],
      indvalue: 0,
    },
    {
      Ques: " 4 . How Many Countries is playing Football World Cup in 2026 ? ",
      opt: [{ ans: 46 }, { ans: 48 }, { ans: 42 }, { ans: 32 }],
      indvalue: 1,
    },
  ],
};

let heading2 = document.querySelector("h3");
let optbtn = document.querySelectorAll("label");
let nextbtm = document.querySelector(".Nxt");
let allinput = document.querySelectorAll(".onebox,li");
let allinput1 = document.querySelectorAll(".onebox");

let prevbtn = document.querySelector(".prev");

let ind = 0;
let userans = [];
let a =0;

const loadquestion = () => {
  heading2.innerText = data.question[ind].Ques;
  optbtn.forEach((btn, i) => {
    btn.innerText = data.question[ind].opt[i].ans;
  });
  allinput1.forEach((r) => (r.checked = false));
};

optbtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    userans[ind] = i;
    counting(i);
      optbtn.forEach(b => b.disabled = true);
    
  });
});

let sc = 0;
function counting(val) {
  let ans = val;
  if (val === data.question[ind].indvalue) {
    sc++;
    console.log(score);
  }
}

loadquestion();

prevbtn.addEventListener("click", () => {
  ind--;
  if (ind > -1) {
    loadquestion();
    if (userans[ind] !== undefined) {
      allinput1[userans[ind]].checked = true;
    }
  }
});

nextbtm.addEventListener("click", () => {
  ind++;
  if (ind < data.question.length) {
    loadquestion();
  } else {
    allinput.forEach((btn) => {
      btn.style.display = "none";
    });
    nextbtm.style.display = "none";
    prevbtn.style.display = "none";
    heading2.innerHTML = `<div class =" lastdiv">
    <h4> Congratulation 🏆 You Got ${sc} / ${data.question.length}</h4>
   <a href="Q.html"> <button class = "playbtn"> Play Again ! </button></a>
   </div>`;
  }
});
