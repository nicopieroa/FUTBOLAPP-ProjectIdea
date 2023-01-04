const navBar = document.getElementById("navBar");
const navBarSpace = navBar.offsetTop;
const logginButton = document.getElementById("logginButton");
const signUpButton = document.getElementById("signUpButton");

const prevImageButton = document.getElementById("prevImageButton");
const image = document.getElementById("image");
const nextImageButton = document.getElementById("nextImageButton");

// Navbar start //

const navBarFixedOnScroll = () => {
  if (window.scrollY >= navBarSpace) {
    navBar.classList.add("navBarFixed");
  } else {
    navBar.classList.remove("navBarFixed");
  }
};

const logginSignUpButtonDesign = () => {
  logginButton.style.backgroundColor = "#57b7d4";
  logginButton.style.color = "#000000";
  logginButton.style.width = "10rem";

  signUpButton.style.backgroundColor = "#57b7d4";
  signUpButton.style.color = "#000000";
  signUpButton.style.width = "10rem";
};

const hideLogginButton = () => {
  logginButton.style.display = "none";
};

const hideSignUpButton = () => {
  signUpButton.style.display = "none";
};

const handleLogginButton = () => {
  logginSignUpButtonDesign();
  logginButton.innerText = "Welcome Back";
  sessionStorage.setItem("loggin", "Back");
  hideSignUpButton();
};

const handleSignUpButton = () => {
  logginSignUpButtonDesign();
  signUpButton.innerText = "Welcome New User";
  sessionStorage.setItem("sign up", "New User");
  hideLogginButton();
};

const sessionStorageValue = () => {
  if (sessionStorage.getItem("loggin") != null) {
    logginButton.innerText = `Welcome ${sessionStorage.getItem("loggin")}`;
    logginSignUpButtonDesign();
    hideSignUpButton();
  } else if (sessionStorage.getItem("sign up") != null) {
    signUpButton.innerText = `Welcome ${sessionStorage.getItem("sign up")}`;
    logginSignUpButtonDesign();
    hideLogginButton();
  }
};

// Navbar end //

// News carousel start //

let counter = 0;

const images = [
  "Images/Argentina/ARGChampion.jpg",
  "Images/Argentina/messi.jpg",
  "Images/news/alexis.webp",
  "Images/news/enzo.jpg",
  "Images/news/Cristiano-Ronaldo-4.jpg",
];

image.src = images[0];

const prevImage = () => {
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  image.src = images[counter];
};

const nextImage = () => {
  counter++;
  if (counter > images.length - 1) {
    counter = 0;
  }
  image.src = images[counter];
};

let slideTime = setInterval(nextImage, 2000);

const handleTimePrevImage = () => {
  clearInterval(slideTime);
  prevImage();
  slideTime = setInterval(nextImage, 2000);
};

const handleTimeNextImage = () => {
  clearInterval(slideTime);
  nextImage();
  slideTime = setInterval(nextImage, 2000);
};

// News carousel end //

window.addEventListener("scroll", navBarFixedOnScroll);
window.addEventListener("load", sessionStorageValue);

logginButton.addEventListener("click", handleLogginButton);
signUpButton.addEventListener("click", handleSignUpButton);

prevImageButton.addEventListener("click", handleTimePrevImage);
nextImageButton.addEventListener("click", handleTimeNextImage);
