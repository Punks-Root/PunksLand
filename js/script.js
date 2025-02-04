document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById("contact-btn");
    const contactBar = document.getElementById("contact-bar");

    contactBtn.addEventListener("click", function() {
        if (contactBar.style.display === "none" || contactBar.style.display === "") {
            contactBar.style.display = "block";
        } else {
            contactBar.style.display = "none";
        }
    });
});
