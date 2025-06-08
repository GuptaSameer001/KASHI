function checkOrientation() {
  const warning = document.getElementById("rotate-warning");
  if (window.innerWidth > window.innerHeight) {
    // Landscape Mode
    warning.style.display = "block";
  } else {
    // Portrait Mode
    warning.style.display = "none";
  }
}

// Page load aur resize pe check karo
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
