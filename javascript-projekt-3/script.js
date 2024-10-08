const scrollbtn = document.querySelector(".scroll");

var rootElement = document.documentElement;
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollbtn.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 10) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
});

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");
const img = document.querySelector(".welcome");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.classList.remove("navClosed");
    menuList.classList.add("navOpen");
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.classList.remove("navClosed");
    menuList.classList.add("navOpen");
    menuList.classList.remove("navOpen");
    menuList.classList.add("navClosed");
  }
});

const mode = document.querySelector(".mode");
const body = document.querySelector("body");
const a = document.querySelectorAll(".a");
const formular = document.querySelector("form");
const submit = document.querySelector(".submit");
const pass1 = document.querySelector(".pass1");
const pass2 = document.querySelector(".pass2");
const footer = document.querySelector(".foottxt");

let islight = 1;

function hover(color1, color2) {
  mode.addEventListener("mouseover", () => {
    mode.style.backgroundColor = color1;
  });
  a[0].addEventListener("mouseover", () => {
    a[0].style.color = color1;
  });
  a[1].addEventListener("mouseover", () => {
    a[1].style.color = color1;
  });
  a[2].addEventListener("mouseover", () => {
    a[2].style.color = color1;
  });
  submit.addEventListener("mouseover", () => {
    submit.style.backgroundColor = color1;
  });

  mode.addEventListener("mouseout", () => {
    mode.style.backgroundColor = color2;
  });
  a[0].addEventListener("mouseout", () => {
    a[0].style.color = color2;
  });
  a[1].addEventListener("mouseout", () => {
    a[1].style.color = color2;
  });
  a[2].addEventListener("mouseout", () => {
    a[2].style.color = color2;
  });
  submit.addEventListener("mouseout", () => {
    submit.style.backgroundColor = "red";
  });
}

function turnBlack() {
  body.style.color = "white";
  body.style.backgroundColor = "black";
  mode.style.backgroundColor = "white";
  mode.style.color = "black";
  mode.textContent = "Light mode";
  a[0].style.color = "white";
  a[1].style.color = "white";
  a[2].style.color = "white";
  submit.style.backgroundColor = "red";
  hover("grey", "white");
  pass1.style.borderColor = "white";
  pass2.style.borderColor = "white";
  footer.style.color = "white";
}

function turnWhite() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
  mode.style.backgroundColor = "black";
  mode.style.color = "white";
  mode.textContent = "Dark mode";
  a[0].style.color = "black";
  a[1].style.color = "black";
  a[2].style.color = "black";
  hover("grey", "black");
  submit.style.backgroundColor = "grey";
  pass1.style.borderColor = "grey";
  pass2.style.borderColor = "grey";
  footer.style.color = "black";
}

mode.addEventListener("click", () => {
  if (islight === 1) {
    turnBlack();
    islight = 0;
  } else if (islight === 0) {
    turnWhite();
    islight = 1;
  }
});

const check = document.querySelector(".passCheck");

formular.addEventListener("submit", () => {
  event.preventDefault();
  if (pass1.value == "") {
    check.textContent = "please enter password";
  }
  if (pass1.value.length < 4) {
    check.style.color = "red";
    check.textContent = "Password must be atleast 4 symbols long";
    if (pass1.value == "") {
      check.textContent = "Please enter password";
    }
  } else {
    if (pass1.value == pass2.value) {
      check.style.color = "green";
      check.textContent = "Form is correct, thank you for your time";
    } else {
      check.style.color = "red";
      check.textContent = "Passwords must match";
    }
  }
});
