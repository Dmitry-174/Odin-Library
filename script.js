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

addBookToLibrary('The Hobbit', "J.R.R. Tolkien", 295, false);
console.log(myLibrary);