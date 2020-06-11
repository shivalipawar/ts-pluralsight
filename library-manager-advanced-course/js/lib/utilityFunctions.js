"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
function purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.purge = purge;
function GetAllBooks() {
    let books = [
        { id: 1, title: 'Shadow of Wind', author: 'Sheryz', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'Ikigai', author: 'Beson', available: false, category: enums_1.Category.Biography },
        { id: 3, title: 'Serpents', author: 'Tatya', available: true, category: enums_1.Category.History },
        { id: 4, title: 'Rumi', author: 'Salmon', available: true, category: enums_1.Category.Poetry },
    ];
    return books;
}
exports.GetAllBooks = GetAllBooks;
function GetAllMagazines() {
    let magazine = [
        { id: 1, publisher: "CNet", title: 'Shadow of Wind', author: 'Sheryz', available: true, category: enums_1.Category.Fiction },
        { id: 2, publisher: "KK", title: 'Ikigai', author: 'Beson', available: false, category: enums_1.Category.Biography },
        { id: 3, publisher: "Quicks", title: 'Serpents', author: 'Tatya', available: true, category: enums_1.Category.History },
        { id: 4, publisher: "LifeWorld", title: 'Rumi', author: 'Salmon', available: true, category: enums_1.Category.Poetry },
    ];
    return magazine;
}
exports.GetAllMagazines = GetAllMagazines;
function LogFirstAvailableBook(books = GetAllBooks()) {
    let firstBook = books.filter(book => book.available);
    console.log("Total number of books ", books.length);
    console.log("First book available is ", firstBook);
}
exports.LogFirstAvailableBook = LogFirstAvailableBook;
function getBookTitlesByCategory(category) {
    console.log("Category filter for books : ", enums_1.Category[category]);
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.category === category).map(book => book.title);
}
exports.getBookTitlesByCategory = getBookTitlesByCategory;
function logBookTitles(titles) {
    titles.map(t => console.log(t));
}
exports.logBookTitles = logBookTitles;
function getBookById(id) {
    const allBooks = GetAllBooks();
    // return allBooks.forEach(book=>book.id === id);
    return allBooks.filter(book => book.id == id)[0];
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
function checkOutBooks(customer, ...bookId) {
    console.log("Checking out books for : " + customer);
    return bookId.map(id => getBookById(id)).filter(book => book.available).map(book => book.title);
}
exports.checkOutBooks = checkOutBooks;
function getTitles(bookProperty) {
    const allBooks = GetAllBooks();
    if (typeof bookProperty == 'string') {
        return allBooks.filter(book => book.author === bookProperty).map(book => book.title);
    }
    else if (typeof bookProperty == 'boolean') {
        return allBooks.filter(book => book.available === bookProperty).map(book => book.title);
    }
}
function printBook(book) {
    console.log(book.title + " by " + book.author);
}
exports.printBook = printBook;
