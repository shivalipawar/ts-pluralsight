"use strict";
exports.__esModule = true;
var enums_1 = require("../enums");
function purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.purge = purge;
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Shadow of Wind', author: 'Sheryz', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'Ikigai', author: 'Beson', available: false, category: enums_1.Category.Biography },
        { id: 3, title: 'Serpents', author: 'Tatya', available: true, category: enums_1.Category.History },
        { id: 4, title: 'Rumi', author: 'Salmon', available: true, category: enums_1.Category.Poetry },
    ];
    return books;
}
exports.GetAllBooks = GetAllBooks;
function LogFirstAvailableBook(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var firstBook = books.filter(function (book) { return book.available; });
    console.log("Total number of books ", books.length);
    console.log("First book available is ", firstBook);
}
exports.LogFirstAvailableBook = LogFirstAvailableBook;
function getBookTitlesByCategory(category) {
    console.log("Category filter for books : ", enums_1.Category[category]);
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.category === category; }).map(function (book) { return book.title; });
}
exports.getBookTitlesByCategory = getBookTitlesByCategory;
function logBookTitles(titles) {
    titles.map(function (t) { return console.log(t); });
}
exports.logBookTitles = logBookTitles;
function getBookById(id) {
    var allBooks = GetAllBooks();
    // return allBooks.forEach(book=>book.id === id);
    return allBooks.filter(function (book) { return book.id == id; })[0];
}
exports.getBookById = getBookById;
function createCustomerId(name, id) {
    return name + id;
}
exports.createCustomerId = createCustomerId;
function createCustomer(name, age, city) {
    console.log("Creating customer : ", name);
    if (age) {
        console.log("Age is " + age);
    }
    if (city) {
        console.log("City is " + city);
    }
}
exports.createCustomer = createCustomer;
function checkOutBooks(customer) {
    var bookId = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookId[_i - 1] = arguments[_i];
    }
    console.log("Checking out books for : " + customer);
    return bookId.map(function (id) { return getBookById(id); }).filter(function (book) { return book.available; }).map(function (book) { return book.title; });
}
exports.checkOutBooks = checkOutBooks;
function getTitles(bookProperty) {
    var allBooks = GetAllBooks();
    if (typeof bookProperty == 'string') {
        return allBooks.filter(function (book) { return book.author === bookProperty; }).map(function (book) { return book.title; });
    }
    else if (typeof bookProperty == 'boolean') {
        return allBooks.filter(function (book) { return book.available === bookProperty; }).map(function (book) { return book.title; });
    }
}
function printBook(book) {
    console.log(book.title + " by " + book.author);
}
exports.printBook = printBook;
