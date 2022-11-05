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

function addBookToLibrary() {
    // do stuff here
}

let theHobbit = new Book('The Hobbit', "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());