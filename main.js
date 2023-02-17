const newBookBtn = document.getElementById("newBook");
const modalWindow = document.getElementById("modalWindow");
const submitButton = document.getElementById("submitButton");
const removeButton = document.getElementById("removeButton");
const bookShelf = document.getElementById("bookShelf");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const form = document.getElementsByTagName("form")[0];
const alertMessage = document.getElementById("alertMessage");

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function createLayout() {
    bookShelf.textContent = "";
    myLibrary.forEach(book => {
        createBook(book);
    });
}

function createBook(book) {
    const newBook = document.createElement("div");
    const newHr = document.createElement("hr");
    const newBookInfo = document.createElement("div");
    const newBookButtons = document.createElement("div");
    const newPTitle = document.createElement("p");
    const newPAuthor = document.createElement("p");
    const newPPages = document.createElement("p");
    const newReadButton = document.createElement("button");
    const newRemoveButton = document.createElement("button");
    const wrapBook = document.createElement("div");

    newBook.classList.add("book");
    newBookInfo.setAttribute("class", "book-info");
    newBookButtons.setAttribute("class", "book-buttons");
    newPTitle.classList.add("pInfo");
    newPAuthor.classList.add("pInfo");
    newPPages.classList.add("pInfo");
    newReadButton.setAttribute("class", "readButton");
    newRemoveButton.setAttribute("class", "removeButton");

    newReadButton.textContent = "Read";
    newRemoveButton.textContent = "Remove";
    newPTitle.textContent = book.title + " |";
    newPAuthor.textContent = book.author + " |";
    newPPages.textContent = book.pages;

    bookShelf.appendChild(wrapBook);
    newBook.appendChild(newBookInfo);
    newBook.appendChild(newBookButtons);
    newBookInfo.appendChild(newPTitle);
    newBookInfo.appendChild(newPAuthor);
    newBookInfo.appendChild(newPPages);
    newBookButtons.appendChild(newReadButton);
    newBookButtons.appendChild(newRemoveButton);
    wrapBook.appendChild(newBook);
    wrapBook.appendChild(newHr);

    newRemoveButton.addEventListener("click", (event) => {
        myLibrary = myLibrary.filter(e => e.title !== book.title);
        event.target.parentElement.parentElement.parentElement.textContent = "";
    });
}

newBookBtn.addEventListener("click", () => {
    form.reset();
    modalWindow.style.display = "block";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (myLibrary.some(e => e.title === titleInput.value)) {
        alertMessage.style.display = "block";
    } else {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, true);
        createLayout();
        modalWindow.style.display = "none";
        alertMessage.style.display = "none";
    }
});

window.onclick = function (event) {
    if (event.target === modalWindow) {
        modalWindow.style.display = "none";
    }
}