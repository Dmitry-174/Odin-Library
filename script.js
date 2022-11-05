"use strict";

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ` +
        (this.read ? 'have read' : 'not read yet');
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function createBookCard(book) {
    let card = document.createElement('div');
    card.classList.add("card");

    let title = document.createElement('h3')
    title.classList.add('title');
    title.textContent = book.title

    let description = document.createElement('ul')
    description.classList.add('description');

    let author = document.createElement('li')
    author.classList.add('author');
    author.textContent = book.author

    let pages = document.createElement('li')
    pages.classList.add('pages');
    pages.textContent = `${book.pages} pages`

    let read = document.createElement('li')
    read.classList.add('read');
    read.textContent = book.read ? 'have read' : 'not read yet';

    description.appendChild(author);
    description.appendChild(pages);
    description.appendChild(read);

    card.appendChild(title);
    card.appendChild(description);
    return card
}

function showBooks(library) {
    for (let book of library) {
        let card = createBookCard(book);
        let cards = document.querySelector(".cards");
        cards.appendChild(card);
    }
}


addBookToLibrary('The Hobbit', "J.R.R. Tolkien", 295, false);
addBookToLibrary('The Test', "T. Test", 25, true);
showBooks(myLibrary);
