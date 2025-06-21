const menuBtn = document.querySelector(".menu-btn");
const menuLink = document.querySelector(".link-container");
let menuOpen = false;

const toggleMenu = () => {
  menuBtn.classList.toggle("open");
  menuLink.classList.toggle("show");
  menuOpen = !menuOpen;
};

menuBtn.addEventListener("click", toggleMenu);
menuLink.addEventListener("click", toggleMenu);

// function to change background navbar when scrolling or if it's > 900px

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header_main");
  const scrollToTopButton = document.getElementById("scrollToTop");
  const mediaQuery = window.matchMedia("(min-width: 900px)");

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    scrollPosition > 0
      ? (scrollToTopButton.style.display = "block")
      : (scrollToTopButton.style.display = "none");

    mediaQuery.matches || scrollPosition > 0
      ? (header.style.backgroundColor = "#418fa5")
      : (header.style.backgroundColor = "transparent");
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  const handleMediaQueryChange = () => {
    handleScroll();
  };

  // Initial call to handleMediaQueryChange to set initial styles
  handleMediaQueryChange();

  // Add event listener for changes in the media query
  mediaQuery.addEventListener("change", handleMediaQueryChange);
});

// function to go top

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Function to generate a random CSRF token
function generateCSRFToken() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

// Function to set the CSRF token in the meta tag
function setCSRFToken() {
  const csrfToken = generateCSRFToken();
  document.getElementById("csrf-token").content = csrfToken;
}

// Set CSRF token when the page is loaded
window.addEventListener("load", setCSRFToken);
