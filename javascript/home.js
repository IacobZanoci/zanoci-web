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

function adjustHeader() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var welcomeTitle = document.querySelector('.welcome_title');

    if (viewportWidth <= 640) {
        welcomeTitle.innerHTML = 'Designer & <span class="h1_gradient">Developer</span>';
    } else {
        welcomeTitle.innerHTML = 'Designer & Web/Mobile <span class="h1_gradient">Developer</span>';
    }
}

window.addEventListener('resize', adjustHeader);

adjustHeader();
