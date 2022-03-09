const ul = document.querySelector(".books");
const btn = document.querySelector("#btn");
const authorVal = document.querySelector("#author");
const titleVal = document.querySelector("#title");
const pagesVal = document.querySelector("#pages");
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
});

function renderBookAndDelete(book) {
  const elem = document.createElement("p");
  elem.classList.add("book");
  elem.innerText = `${book.title} by ${book.author} with ${book.pages} pages.`;
  ul.appendChild(elem);

  const delBtn = document.createElement("button");
  delBtn.classList.add("delteBtn");
  delBtn.innerText = "Delete";
  elem.appendChild(delBtn);

  delBtn.addEventListener("click", function (e) {
    e.preventDefault();
    myLibary.filter((book) => {
      book != elem;
      elem.remove();
    });
  });
}

renderBookAndDelete(it);
renderBookAndDelete(bagOfBones);
