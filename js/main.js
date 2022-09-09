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

// nav bar
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul li a ");
let header = document.querySelector("header");
let logo = document.querySelector("header img");

// Mission

let Skills = document.querySelector(".about .content");

window.onscroll = () => {
  // nav bar
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let hieght = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top > offset && top < offset + hieght) {
      navlinks.forEach((link) => {
        link.classList.remove("active");

        let n = document.querySelector("nav ul li [href*=" + id + "]");
        n.classList.add("active");
        // n
      });
    }
    if (top > 350) {
      logo.src = "imgs/logo-dark .png";
      header.style.cssText = `
    background-color: rgb(255, 255, 255);`;
      toggle.style.cssText = `color: rgb(0, 0, 0);`;
      navlinks.forEach((link) => {
        link.style.cssText = `color: rgb(0, 0, 0);`;
        if (link.classList.contains("active")) {
          link.style.cssText = `color: var(--m-color);`;
        }
      });
      if (links.classList.contains("open")) {
        navlinks.forEach((l) => {
          l.style.cssText = `color: #fff;`;
          if (l.classList.contains("active")) {
            l.style.cssText = `color: var(--m-color);`;
          }
        });
      }
    } else {
      logo.src = "imgs/logo-light.png";
      header.style.cssText = `left: 0;
    `;
      toggle.style.cssText = `color: var(--m-color);`;
      navlinks.forEach((link) => {
        link.style.cssText = `color: rgb(255, 255, 255);`;
        if (link.classList.contains("active")) {
          link.style.cssText = `color: var(--m-color);`;
        }
      });
    }
  });

  // Mission

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
  }, 200 / goal);
}

// Portfolio;

let spanarray = document.querySelectorAll(".portfolio .links span");
let content = document.querySelector(".portfolio .content");
let boxs = document.querySelectorAll(".portfolio .content .box");
let newcontent = [];

spanarray.forEach((e) => {
  e.addEventListener("click", () => {
    let filter = e.getAttribute("data-filter");
    console.log(filter);

    boxs.forEach((el) => {
      if (el.classList.contains(filter)) {
        el.style.cssText = `display: flex;`;
      } else {
        el.style.cssText = `display: none;`;
      }
    });
  });
});

// services;

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
