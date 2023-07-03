const mainBody = document.querySelector(".main");
const aside = document.querySelector(".aside");
const menu = document.querySelector("#menu");
const title = document.getElementById("book-title");
const author = document.querySelector(".book-author");
const pages = document.querySelector(".pages");
const action_btn = document.querySelector(".action-btn");
const del_btn = document.querySelector(".del-btn");
const progress = document.querySelector("#pro-level");
const title_info = document.getElementById("title");
const author_info = document.getElementById("author");
const pages_info = document.getElementById("number");
const callToAction = document.querySelector(".call-to-action");
let stat = document.querySelector("#checkbox");
const stats = Boolean(stat);
const library = [];

function showMenu() {
  aside.style.right = "0%";
  aside.style.opacity = 1;
}

function hideMenu() {
  aside.style.setProperty("right", "-45%");
  aside.style.opacity = 0;
}

//Toggle Menu
menu.addEventListener("click", () => {
  if (menu.classList.contains("fa-bars")) {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-times");
    showMenu();
  } else if (menu.classList.contains("fa-times")) {
    menu.classList.remove("fa-times");
    menu.classList.add("fa-bars");
    hideMenu();
  }
});

//Main Book
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBooks() {
  let bookTitle = title_info.value;
  let bookAuthor = author_info.value;
  let bookPages = pages_info.value;
  let bookstatus = stats;

  let progressMessage;
  if (bookstatus === true && stat.checked) {
    bookstatus = "Read";
    progressMessage = "Completed";
  } else {
    bookstatus = "Not read";
    progressMessage = "On progress";
  }
  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookstatus);
  library.push(newBook);
  renderLibrary();
}

function renderLibrary() {
  mainBody.innerHTML = ""; // Clear the existing library rendering

  library.forEach((book, index) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = `<div class="boxes" data-index="${index}">
      <div class="top-sec">
        <div>
          <h1 id="book-title">${book.title}</h1>
          <h2>by <span class="book-author">${book.author}</span></h2>
        </div>
        <span class="page">Pages: <span class="pages">${book.pages}</span></span>
      </div>
      <hr class="horizontal-line">
      <button class="action-btn">${book.status}</button>
      <button class="del-btn" style="height: 18% margin: 1%">Delete</button>
      <hr class="horizontal-line">
      <span id="pro-level">${book.status === "Read" ? "Completed" : "On progress"}</span>
    </div>`;

    const deleteBtn = newElement.querySelector(".del-btn");
    deleteBtn.addEventListener("click", () => {
      removeBook(index);
    });
   action_btn.addEventListener('click', ()=>{

   })

    mainBody.appendChild(newElement);
  });
}
function removeBook(index){
	library.splice(index, 1);
	renderLibrary();
}
function toggleAction(){
o0
}


// Form submission button
callToAction.addEventListener("click", (e) => {
  e.preventDefault();
  addBooks();
  if (menu.classList.contains("fa-times")) {
    menu.classList.remove("fa-times");
    menu.classList.add("fa-bars");
    hideMenu();
  }
  stat.checked = false;

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });
});

console.log(library);
