const newBookBtn = document.getElementById("newBook");
const modalWindow = document.getElementById("modalWindow");

newBookBtn.addEventListener("click", () => {
    modalWindow.style.display = "block";
});

window.onclick = function (event) {
    if (event.target === modalWindow) {
        modalWindow.style.display = "none";
    }
}