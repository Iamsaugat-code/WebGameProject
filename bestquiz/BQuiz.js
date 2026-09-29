let box1 = document.querySelector(".box_1");
let box2 = document.querySelector(".box_2");
let inputbtn = document.querySelector("#inputbox");
let spanbtn1 = document.querySelector(".span1");
let spanbtn2 = document.querySelector(".span2");
let Pspan = document.querySelector("#span");
linedisplay = document.querySelector("#h2");
let easybtn = document.querySelector("#bot_1");
let hardbtn = document.querySelector("#bot_2");
box2.style.display = "none";

const touchsound = new Audio("./touch.mp4");
const winsound = new Audio("./win.mpeg");
const losssound = new Audio("./loss.mpeg");

let inputdata = [];
let Rnum = Math.floor(Math.random() * 100);
let harddata = [];

let a = 0;

const easymode = () => {
  inputbtn.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      touchsound.play();
      let inputnumber = parseInt(inputbtn.value);
      if (inputnumber >= 0 && inputnumber <= 100) {
        linedisplay.innerHTML = "   You Guess ! ";
        a++;
        spanbtn1.innerHTML = a;
        if (a === 10) {
          inputbtn.value = "";
          box2.style.display = "block";
          losssound.play();
          box2.innerHTML = ` <h2> You Loss 😞 </h2><br><h4 id="lastresult"> Attempts : 10 </h4><br>
<h4 id="lastresult"> Input Data : ${inputdata}</h4><br>
<h4 id="lastresult"> Correct Data : ${Rnum}</h4><br> <button class="play_btn"> <a href="BQuiz.html"> Play Again ! </a></button> `;
          play_btn.addEventListener("click", () => {
            losssound.pause();
          });
        }
        if (inputnumber > Rnum) {
          inputbtn.value = "";
          linedisplay.innerHTML = "   Your Guess Is High ! 😏 ";
        } else if (inputnumber < Rnum) {
          inputbtn.value = "";
          linedisplay.innerHTML = "   Your Guess Is Low ! 🙄 ";
        } else {
          inputbtn.value = "";
          box2.style.display = "block";
          winsound.play();
          box2.innerHTML = ` <h2> You Win 🤪 </h2><br><h4 id="lastresult"> Attempts : ${a} </h4><br>
<h4 id="lastresult"> Input Data : ${inputdata},${Rnum}</h4><br>
<h4 id="lastresult"> Correct Number : ${Rnum} </h4><br> <button class="play_btn"> <a href="BQuiz.html"> Play Again ! 
</a></button> `;

          play_btn.addEventListener("click", () => {
            winsound.pause();
          });
        }
        inputbtn.value = "";
        inputdata = [...inputdata, inputnumber];
        spanbtn2.innerHTML = inputdata;
      } else if (isNaN(inputnumber)) {
        inputbtn.value = "";
        linedisplay.innerHTML = "   Wrong input ! 🙄 ";
      } else {
        linedisplay.innerHTML = "   Out of Range  😡";
        inputbtn.value = "";
      }
    }
  });
};

let b = 0;
const hardmode = () => {
  inputbtn.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      touchsound.play();
      let hardnum = parseInt(inputbtn.value);
      if (hardnum >= 0 && hardnum <= 100) {
        linedisplay.innerHTML = "   You Guess ! ";
        b++;
        spanbtn1.innerHTML = b;
        if (b === 6) {
          inputbtn.value = "";
          box2.style.display = "block";
          losssound.play();
          box2.innerHTML = ` <h2> You Loss 😞 </h2><br><h4 id="lastresult"> Attempts : 5 </h4><br>
<h4 id="lastresult"> Input Data : ${harddata}</h4><br>
<h4 id="lastresult"> Correct Data : ${Rnum}</h4><br> <button class="play_btn"> <a href="BQuiz.html"> Play Again ! </a></button> `;
          play_btn.addEventListener("click", () => {
            losssound.pause();
          });
        }
        if (hardnum > Rnum) {
          inputbtn.value = "";
          linedisplay.innerHTML = "   Your Guess Is High ! 😏 ";
        } else if (hardnum < Rnum) {
          inputbtn.value = "";
          linedisplay.innerHTML = "   Your Guess Is Low ! 🙄 ";
        } else {
          inputbtn.value = "";
          box2.style.display = "block";
          winsound.play();
          box2.innerHTML = ` <h2> You Win 🤪 </h2><br><h4 id="lastresult"> Attempts : ${b} </h4><br>
<h4 id="lastresult"> Input Data : ${harddata},${Rnum}</h4><br>
<h4 id="lastresult"> Correct Number : ${Rnum} </h4><br> <button class="play_btn"> <a href="BQuiz.html"> Play Again ! </a></button> `;
          play_btn.addEventListener("click", () => {
            winsound.pause();
          });
        }

        inputbtn.value = "";
        harddata = [...harddata, hardnum];
        spanbtn2.innerHTML = harddata;
      } else if (isNaN(hardnum)) {
        inputbtn.value = "";
        linedisplay.innerHTML = "   Wrong input ! 🙄 ";
      } else {
        linedisplay.innerHTML = "   Out of Range 😡 ";
        inputbtn.value = "";
      }
    }
  });
};

easybtn.addEventListener("click", () => {
  box1.style.display = "none";
  box2.style.display = "";
  touchsound.play();
  touchsound.preload();
  easymode();
});

hardbtn.addEventListener("click", () => {
  touchsound.currentTime = 3;
  box1.style.display = "none";
  box2.style.display = "";
  hardmode();
});
