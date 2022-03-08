const ul = document.querySelector(".books");
const btn = document.querySelector("#btn");
const authorVal = document.querySelector("#author");
const titleVal = document.querySelector("#title");
const pagesVal = document.querySelector("#pages");
let delBtn;
let elem;
let myLibary = [];

function Book() {}

Book.prototype.addBookToLibary = function () {
  myLibary.push(this);
};

function addBook(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

addBook.prototype = Object.create(Book.prototype);

const it = new addBook("It", "Stephen King", 777);
const bagOfBones = new addBook("Bag of Bones", "Stephen King", 666);

it.addBookToLibary();
bagOfBones.addBookToLibary();

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const temp = new addBook(
    `${titleVal.value}`,
    `${authorVal.value}`,
    pagesVal.value
  );
  temp.addBookToLibary();

  renderBookAndDelete(temp);
  console.log(myLibary);
  delBtn.addEventListener("click", function (e) {
    e.preventDefault();
    myLibary.forEach((book, i) => {
      myLibary.splice(i, 1);
      elem.innerText = "";
    });
  });
});

function renderBookAndDelete(book) {
  elem = document.createElement("p");
  elem.classList.add("book");
  elem.innerText = `${book.title} by ${book.author} with ${book.pages} pages.`;
  ul.appendChild(elem);

  delBtn = document.createElement("button");
  delBtn.classList.add("delteBtn");
  delBtn.innerText = "Delete";
  elem.appendChild(delBtn);
}

renderBookAndDelete(it);
renderBookAndDelete(bagOfBones);
