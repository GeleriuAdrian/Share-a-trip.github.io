//Open popups
function openPopup(popupId){
    document.getElementById(popupId).style.display = "flex";
    document.getElementById("dark-bg-popup").style.display = "block";
}

//Close popups
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
    document.getElementById("dark-bg-popup").style.display = "none";
}

//Switch popups
function switchAccount(containerToShowId, containerToHideId) {
    document.getElementById(containerToHideId).style.display = "none";
    document.getElementById(containerToShowId).style.display = "flex";
}

// Show/hide password
function togglePwd(pwdId, iconOffId, iconOnId) {
    var pwdField = document.getElementById(pwdId);
    var iconOff = document.getElementById(iconOffId);
    var iconOn = document.getElementById(iconOnId);

    if (pwdField.type === "password") {
        pwdField.type = "text";
        iconOff.classList.add("icon-off");
        iconOff.classList.remove("icon-on");
        iconOn.classList.add("icon-on");
        iconOn.classList.remove("icon-off");
    } else {
        pwdField.type = "password";
        iconOff.classList.add("icon-on");
        iconOff.classList.remove("icon-off");
        iconOn.classList.add("icon-off");
        iconOn.classList.remove("icon-on");
    }
}

//Trips Slider
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.trip-item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

//Get name from cookie
function getCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    name = name + "=";
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name) == 0) {
            // Decode URI component and replace '+' with spaces
            return cookie.substring(name.length, cookie.length).replace(/\+/g, ' ');
        }
    }
    return "";
}

document.addEventListener("DOMContentLoaded", function() {
    const username = getCookie("username");
    if (username) {
        document.querySelector(".profile-name").innerText = username;
    }
});

//Verify if registered to trip

document.addEventListener("DOMContentLoaded", function() {
    let k = 0; // Declare k outside the loop
    for (let i = 1; i <= 6; i++) {
        if (getCookie(`trip${i}`)) {
            let tripCard = document.querySelector(`.trip-card[data-trip-id="${i}"]`);
            if (tripCard) {
                tripCard.classList.add("trip-card-active");
            }
            k = k + 1; // Increment k if a trip is found
        }
    }
    let errorMsg = document.querySelector(".no-trip-msg"); // Use querySelector to select single element
    if (k === 0) { 
        errorMsg.style.display = "inline-block";
    } else {
        errorMsg.style.display = "none";
    }
});