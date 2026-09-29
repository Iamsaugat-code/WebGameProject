const data = [
  {
    name: "Java",
    img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg`,
  },
  {
    name: "Python",
    img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg`,
  },
  {
    name: "HTML",
    img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg`,
  },
  {
    name: "JavaScript",
    img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`,
  },
  {
    name: "Node.js ",
    img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg`,
  },
  {
    name: "React",
    img: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`,
  },
];

let selectionbtn = document.querySelector("#selection_box");
let resultbtn = document.querySelector("#result");
let h4btn = document.querySelector("h4");

let winbtn = document.querySelector(".win");
let changebtn = document.querySelector(".change");

let count = 0;

let firstclick = "";
let secondclick = "";

let change = 16;
let win = 0;
let val;

const reset = () => {
  count = 0;
  firstclick = "";
  secondclick = "";
  let twosetdiv = document.querySelectorAll(".card_selected");
  twosetdiv.forEach((btn) => {
    btn.classList.remove("card_selected");
  });
};

const twosetcolor = () => {
  let twosetdiv = document.querySelectorAll(".card_selected");
  twosetdiv.forEach((btn) => {
    btn.classList.add("two_setcolor");
  });
};

selectionbtn.addEventListener("click", (evt) => {
  let curlist = evt.target;

  if (curlist.id === "selection_box") {
    return false;
  }
  count++;
  if (count < 3) {
    if (count === 1) {
      firstclick = curlist.parentNode.dataset.name;
      curlist.parentNode.classList.add("card_selected");
      change--;
    } else {
      secondclick = curlist.parentNode.dataset.name;
      curlist.parentNode.classList.add("card_selected");
      change--;
    }
  }
  changebtn.innerText = change;
  if (change == 0) {
    setTimeout(() => {
      resultbtn.innerHTML = `<div class ="game_O"> </h1> Game Over ! <h1></div><div><button class="play"><a href="B.html" id="link"> Play Again !</a></button></div>`;
      h4btn.style.display = "none";
      changebtn.style.display = "none";
    }, 200);
  }

  if (firstclick !== "" && secondclick !== "") {
    if (firstclick === secondclick) {
      setTimeout(() => {
        twosetcolor();
        reset();
        win++;
        winbtn.innerText = win;
        setTimeout(()=>{
        if (win == 6) {
          resultbtn.innerHTML = `<div class ="game_O"> </h1> You Win ! <h1></div><div><button class="play" style ="background-color : green ; margin-left : 4px;"><a href="B.html" id="link"> Play Again !</a></button></div>`;
          h4btn.style.display = "none";
          changebtn.style.display = "none";
        }
      },500);
      }, 500);
    } else {
      setTimeout(() => {
        reset();
      }, 500);
    }
  }
});

const newdata = data.concat(data);

const numberchange = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
const changeInd = numberchange(newdata);

for (let i = 0; i < changeInd.length; i++) {
  const childselection = document.createElement("div");
  childselection.classList.add("card");
  childselection.dataset.name = changeInd[i].name;

  const frontCard = document.createElement("div");
  frontCard.classList.add("front-card");

  const backCard = document.createElement("div");
  backCard.classList.add("back-card");
  backCard.style.backgroundImage = `url(${changeInd[i].img})`;

  selectionbtn.appendChild(childselection);
  childselection.appendChild(frontCard);
  childselection.appendChild(backCard);
}
