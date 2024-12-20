// JavaScript for toggling the navigation menu
document.querySelector('.nav-toggler').addEventListener('click', function() {
  const aside = document.querySelector('.aside');
  aside.classList.toggle('open');
  this.classList.toggle('active');
});

// JavaScript for the typing effect
const typingText = document.querySelector('.typing');
const textArray = ["university student", "web developer", "programmer"];
let arrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[arrayIndex].length) {
      typingText.textContent += textArray[arrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
  } else {
      setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
      typingText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
  } else {
      arrayIndex++;
      if (arrayIndex >= textArray.length) arrayIndex = 0;
      setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  type();
});
