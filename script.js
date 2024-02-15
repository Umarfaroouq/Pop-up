// Get reference to the popup element
let popup = document.getElementById("popup");

// Function to open the popup
function openPopup() {
    // Add the class to make the popup visible
    popup.classList.add("open-popup");
}

// Function to close the popup
function closePopup() {
    // Remove the class to hide the popup
    popup.classList.remove("open-popup");
}
