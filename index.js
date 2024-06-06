// mass schedule pop-up function
function togglePopup() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("popupOverlay");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
    }
}

  