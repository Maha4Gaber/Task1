// toggle  menu;

let toggle = document.querySelector("header nav .togle-menu ");
let links = document.querySelector("header nav ul");

toggle.addEventListener("click", () => {
  links.classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (e.target !== toggle && e.target !== links) {
    if (links.classList.contains("open")) links.classList.toggle("open");
  }
});

// typign animation

let typed = new Typed(".typing", {
  strings: ["", "Success", "Grow Up", "Dream"],
  typeSpeed: 150,
  BackSpeed: 200,
  loop: true,
});

// Mission

let Skills = document.querySelector(".about .content");

window.onscroll = () => {
  let SofsetTop = Skills.offsetTop;

  let SosetH = Skills.offsetHeight;

  let wHeight = this.innerHeight;

  let scrol = this.pageYOffset;

  if (scrol > SofsetTop + SosetH - wHeight) {
    let ourSkills = document.querySelectorAll(
      ".about .mission .missionProgress span"
    );
    ourSkills.forEach((skill) => {
      let num = skill.getAttribute("dataProgress");
      skill.style.cssText = `width:${num}`;
    });
  }

  // numbers Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

// numbers Increase Number
let nums = document.querySelectorAll(".numbers .number");
let statsSection = document.querySelector(".numbers");
let started = false; // Function Started ? No

function startCount(el) {
  let goal = el.dataset.goal;
  el.textContent = 0;
  let count = setInterval(() => {
    el.textContent++;

    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Portfolio;

let portcontant = [
  ` 
        <div class="box ">
          <img src="imgs/port/1.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/1"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box box-1">
          <img src="imgs/port/2.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/1"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box">
          <img src="imgs/port/3.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/2"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box">
          <img src="imgs/port/4.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/4"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box">
          <img src="imgs/port/5.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/5"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box box-1">
          <img src="imgs/port/6.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/6"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box">
          <img src="imgs/port/7.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/7"><i class="fa fa-image"></i></a>
          </div>
        </div>`,
  ` 
        <div class="box">
          <img src="imgs/port/3.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/2"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box box-1">
          <img src="imgs/port/6.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/6"><i class="fa fa-image"></i></a>
          </div>
        </div>`,
  `<div class="box box-1">
          <img src="imgs/port/2.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/1"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box">
          <img src="imgs/port/5.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/5"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box">
          <img src="imgs/port/7.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/7"><i class="fa fa-image"></i></a>
          </div>
        </div>`,
  `<div class="box ">
          <img src="imgs/port/1.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/1"><i class="fa fa-image"></i></a>
          </div>
        </div>
        <div class="box">
          <img src="imgs/port/4.jpg" alt="">
          <div class="text">
            <h6>Crearive Design</h6>
            <p>Work description here</p>
            <a href="imgs/port/4"><i class="fa fa-image"></i></a>
          </div>
        </div>`,
];
let spanarray = document.querySelectorAll(".portfolio .links span");
let newcontent = document.querySelector(".portfolio .content");
let boxs = document.querySelector(".portfolio .content .box");

for (let i = 0; i < 4; i++) {
  spanarray[i].addEventListener("click", () => {
    spanarray.forEach((e) => {
      e.classList = "";
    });
    spanarray[i].classList.toggle("active");
    newcontent.innerHTML = portcontant[i];
  });
}

let itms = document.querySelectorAll(".services .itmes .itme");
let text = document.querySelectorAll(".services .text");

window.onload = () => {
  itms.forEach((el) => {
    el.classList = "itme";
  });
  itms[0].classList.toggle("active");
};
for (let i = 0; i < 4; i++) {
  itms[i].addEventListener("click", (e) => {
    itms.forEach((el) => {
      el.classList = "itme";
    });
    itms[i].classList.toggle("active");
    rewrite(i);
  });
}

function rewrite(i) {
  text.forEach((el) => {
    el.classList = "text";
  });
  text[i].classList.toggle("active");
}

// creat popup with video

let video = `<video controls >
    <source src="https://player.vimeo.com/video/127203262?autoplay=1" type="video/mp4">
  </video>`;

let vidplay = document.querySelector(".vid-play");
vidplay.addEventListener("click", (e) => {
  // create overlay
  let overlay = document.createElement("div");
  overlay.classList = "popup-overly";
  document.body.appendChild(overlay);

  // create popup

  let popupBox = document.createElement("div");
  popupBox.classList = "popupBox";

  popupBox.innerHTML = video;
  overlay.appendChild(popupBox);
});
document.addEventListener("click", (e) => {
  if (e.target.className == "popup-overly") {
    document.querySelector(".popup-overly").remove();
  }
});
