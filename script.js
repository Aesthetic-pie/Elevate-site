const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when tapping the dimmed area outside it
document.addEventListener("click", (e) => {
    if (document.body.classList.contains("show-mobile-menu") &&
        !e.target.closest(".nav-menu") && !e.target.closest("#menu-open-button")) {
        document.body.classList.remove("show-mobile-menu");
    }
});

// Split text into pieces so each can animate in on page load
function splitText(el, mode) {
    const text = el.textContent.trim();
    el.setAttribute("aria-label", text);
    el.textContent = "";
    const parts = mode === "letters" ? [...text] : text.split(" ");
    parts.forEach((part, i) => {
        const span = document.createElement("span");
        span.className = mode === "letters" ? "char" : "word";
        span.setAttribute("aria-hidden", "true");
        span.style.setProperty("--i", i);
        span.textContent = part === " " ? "\u00A0" : part;
        el.appendChild(span);
        if (mode === "words" && i < parts.length - 1) el.appendChild(document.createTextNode(" "));
    });
}

splitText(document.querySelector("#hero-title"), "letters");
splitText(document.querySelector("#hero-subtitle"), "words");
