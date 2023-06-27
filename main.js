const mainBody = document.querySelector(".main")
const aside = document.querySelector(".aside");
const menu = document.querySelector("#menu")
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
const stat = document.querySelector("#checkbox");
const stats = Boolean(stat.checked);


function showMenu(){
     aside.style.right = "0%";
}
function hideMenu(){
	aside.style.right = "-40%";
}
//Toggle Menu
menu.addEventListener("click", ()=>{

	if (menu.classList.contains("fa-bars")){
		menu.classList.remove("fa-bars");
		menu.classList.add("fa-times");
		showMenu();
	}
	else if (menu.classList.contains("fa-times")){
		menu.classList.remove("fa-times");
		menu.classList.add("fa-bars");
		hideMenu();
	}
})
const library = [];
//Main Book
function Book(title, author, pages, status){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
} 

function addBooks(){
	let bookTitle = title_info.value;
	let bookAuthor = author_info.value;
	let bookPages = pages_info.value;
	let bookstatus = stats;
	let progressMessage;
	if (bookstatus === true){
		bookstatus = "Read";
		progressMessage = "Completed"
	}
	else {
		bookstatus = "Not Read"
		progressMessage = "On progress"
	}
	let newBook = new Book(bookTitle, bookAuthor, bookPages, bookstatus);
	library.push(newBook);
	
	const newElement = document.createElement("div");
	newElement.innerHTML = `<div class="boxes">
								<div class="top-sec">
									<div>
										<h1 id="book-title">${bookTitle}</h1>
										<h2>by <span class="book-author">${bookAuthor}</span></h2>
									</div>
									<span class="page">Pages: <span class="pages">${bookPages}</span> </span>
								</div>
									<hr class="horizontal-line">
									<button class="action-btn">${bookstatus}</button>
									<button class="del-btn" style="height: 18% margin: 1%">Delete</button>
									<hr class="horizontal-line">
									<span id="pro-level">${progressMessage}</span>
							</div>`
	const parentGridAutoRows = getComputedStyle(mainBody).gridAutoRows;
	newElement.style.gridAutoRows = parentGridAutoRows;
	mainBody.appendChild(newElement);
	
}


addBooks();
addBooks();
addBooks();
addBooks();
addBooks();






		
		