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

// Event binding for button click
$(document).on('click', 'button', function () {
    sendMail();
});

// Event binding for close button click
$('.close-btn').click(function () {
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
});

function sendMail() {
    (function () {
        emailjs.init("QgkQoTfOx4-6IatQB"); // Account Public Key
    })();

    var senderNameInput = document.querySelector("#sendername");
    var toInput = document.querySelector("#to");
    var subjectInput = document.querySelector("#subject");
    var messageInput = document.querySelector("#message");

    var params = {
        sendername: senderNameInput.value,
        to: toInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
    };

    var serviceID = "service_08xrpw6"; // Email Service ID
    var templateID = "template_ere2st7"; // Email Template ID

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear input values
            senderNameInput.value = "";
            toInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";

            $('.alert').addClass("show");
            $('.alert').removeClass("hide");
            $('.alert').addClass("showAlert");
            setTimeout(function () {
                $('.alert').removeClass("show");
                $('.alert').addClass("hide");
            }, 5000);
        })
        .catch(error => {
            // Handle the error as needed
        });
}


//Function for alert text -> shorter (viewport <=400px)
function updateMessageText() {
    const msgElement = document.querySelector('.msg');
    if (window.innerWidth <= 400) {
        msgElement.textContent = 'Email sent successfully!';
    } else {
        msgElement.textContent = 'Success: Email sent successfully!';
    }
}

updateMessageText();
window.addEventListener('resize', updateMessageText);
