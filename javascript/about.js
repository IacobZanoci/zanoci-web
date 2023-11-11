const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// Check the viewport width and change the content accordingly
function adjustLanguageLevels() {
    const englishLevel = document.getElementById("english-level");
    
    if (englishLevel && window.innerWidth <= 1024 && window.innerWidth > 768) {
      englishLevel.textContent = "UI";
    } else if (englishLevel && window.innerWidth <= 768 && window.innerWidth > 475) {
      englishLevel.textContent = "UI";
    } else if (englishLevel && window.innerWidth <= 475) {
      englishLevel.textContent = "UI";
    } else {
      englishLevel.textContent = "Upper intermediate";
    }
}

// Call the function on page load and whenever the window is resized
window.addEventListener("load", adjustLanguageLevels);
window.addEventListener("resize", adjustLanguageLevels);

  