function onContentLoaded() {
    setTimeout(showPage, 500);
    document.getElementById("splash").style.display = "none";
}

function showPage() {
    document.getElementById("content").style.display = "block";
    document.getElementById("viewScreen1").src = "images/screenshot_1.png";
    document.getElementById("viewScreen2").src = "images/screenshot_2.png";
    document.getElementById("viewScreen3").src = "images/screenshot_3.png";
    document.getElementById("viewScreen4").src = "images/screenshot_4.png";
    document.getElementById("viewScreen5").src = "images/screenshot_5.png";
    document.getElementById("viewScreen6").src = "images/screenshot_6.png";
    document.getElementById("viewScreen7").src = "images/screenshot_7.png";
    document.getElementById("viewScreen8").src = "images/screenshot_8.png";
}

function openLink(_url, _blank) {
    if (_blank) {
        window.open(_url, "_blank");
    } else {
        window.open(_url, "_self");
    }
}

function viewScreen() {
    document.getElementById("viewScreen").style.display = "block"
}

function closeViewScreen() {
    document.getElementById("viewScreen").style.display = "none";
}
