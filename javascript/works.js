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

const paragraph = document.querySelector(".truncate-paragraph");
const readMore = document.querySelector(".read-more");

readMore.addEventListener("click", () => {
    paragraph.classList.toggle("expanded");
    if (paragraph.classList.contains("expanded")) {
        readMore.textContent = " -> Show Less";
    } else {
        readMore.textContent = " -> more";
    }
});


// Target the second paragraph with the unique class
const secondParagraph = document.querySelector(".second-paragraph");
const secondReadMore = secondParagraph.querySelector(".read-more");

secondReadMore.addEventListener("click", () => {
    secondParagraph.classList.toggle("expanded");
    if (secondParagraph.classList.contains("expanded")) {
        secondReadMore.textContent = " -> Show Less";
    } else {
        secondReadMore.textContent = " -> more";
    }
});

// Target the 3th paragraph with the unique class
const threeParagraph = document.querySelector(".three-paragraph");
const threeReadMore = threeParagraph.querySelector(".read-more");

threeReadMore.addEventListener("click", () => {
    threeParagraph.classList.toggle("expanded");
    if (threeParagraph.classList.contains("expanded")) {
        threeReadMore.textContent = " -> Show Less";
    } else {
        threeReadMore.textContent = " -> more";
    }
});




