const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// muestra sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// cierra sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

const toggleBtn = document.querySelector('[data-toggle="theme"]');

// Turn the theme on if the 'data-theme=dark' attribute exists in localStorage
if (localStorage.getItem('data-theme', 'dark')) {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.querySelector('[data-toggle="theme"]').checked = true;
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
} else {
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
}

themeToggler.addEventListener('click', () => {
  if (document.documentElement.hasAttribute('data-theme')) {
    // Turning the theme off
    document.documentElement.removeAttribute('data-theme');
    // Store the preference
    localStorage.removeItem('data-theme', 'dark');
    console.log('Light');
    //themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  }
  else {
    // Turning the theme on
    document.documentElement.setAttribute('data-theme', 'dark');

    // Store the preference
    localStorage.setItem('data-theme', 'dark');
    console.log('Dark');

  }
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");

});

//let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;


themeToggler.addEventListener("click", () => {
  /*

  //document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active"); */
});
