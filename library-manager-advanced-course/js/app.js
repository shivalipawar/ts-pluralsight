"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const util = require("./lib/utilityFunctions");
// import "./LibrarianExtension"; //USe this import for only merge module is uncommented
function printBookInfo({ title: booktitle, author: bookauthor }) {
    console.log(`${booktitle} was authored by ${bookauthor}`);
}
function logFavouriteBook([book1, book2, ...others]) {
    printBookInfo(book1);
    printBookInfo(book2);
    // console.log(others);
}
// logFavouriteBook(util.GetAllBooks());
let [book1, book2] = util.GetAllBooks();
// let {title,author} = book1;
// console.log(title+" "+author);
let poets = ["Tolystoy", "Gulzar", "Rehman"];
let authors = ["Collins", ...poets];
let catalog = ['A 23.4', book1, 'B3.4', book2];
//Example of union 
let books = util.GetAllBooks();
let magazine = util.GetAllMagazines();
let readingType = magazine[0];
let readingType1 = books[0];
//Example of intersection
// let serialNovel : serial = {
//     id:1,publisher:"Summer",title:'Millionare 1',author:'Tim',available:true,category : Category.Biography
// }
//Apply Mixins to apply methods to a class
function applyMixin(derived, base) {
    base.forEach(base => {
        Object.getOwnPropertyNames(base.prototype).forEach(name => {
            derived.prototype[name] = base.prototype[name];
        });
    });
}
// applyMixin(UniversityLibrarian, [Employee, Researcher]);
// let librarian: UniversityLibrarian = new UniversityLibrarian();
// librarian.doResearch("History");
//Restrict type values to certain values using string literals and type alias.
let frequency = "annual";
function getMagazineByFrequency(frequencyMeasure) { }
//Polymorphic this types
class LibraryBook {
    checkin() {
        console.log("Checkin the book");
        return this;
    }
    checkout() {
        (this instanceof ElectronicBook) ? console.log("Checkout the electronic book") : console.log("Checkout the children book");
        return this;
    }
}
class ChildrenBook extends LibraryBook {
    doClean() {
        console.log("Cleaning book");
        return this;
    }
}
class ElectronicBook extends LibraryBook {
    removeFromCustDevice() {
        console.log("Removing from cust device");
        return this;
    }
}
let childBk = new ChildrenBook();
// childBk.checkin().doClean().checkout();
let elecBk = new ElectronicBook();
// elecBk.checkin().removeFromCustDevice().checkout();             //Able to call removeFromCustDevice() as checkin returns instance of electronic book
//Interface merging
// let mergedBook : Book;
// mergedBook.publisher ="Stars";
//Merge Module Declaration 
// let mergedModule :UniversityLibrarian = new UniversityLibrarian();
// mergedModule.phone="456328"
// mergedModule.hostSeminar("Maratha Warriors");
//Custom guards to check if type is book
// function isBook(text:Book|Magazine) : text is Book{
//     return (<Book>text).author !== undefined;
// }
// let readMaterial : Book |Magazine = util.GetAllBooks()[0];
// if(isBook(readMaterial)){
//     console.log("Books author is ",readMaterial.author);
// }else{
//     console.log("Magazin publisher is ",readMaterial.publisher);
// }
//Symbol as constants
let one = Symbol("first");
let two = Symbol("first");
// console.log(one === two);    //Uniqueness is not on value
// console.log(typeof one);    //New primitive type
let obj = { [one]: "unique in all ways" }; //Use symbol as key instaed of strings
function getCategoryBooks(cat, callback) {
    setTimeout(() => {
        try {
            let allBooks = util.getBookTitlesByCategory(cat);
            if (allBooks.length > 0) {
                callback(null, allBooks);
            }
            else {
                throw new Error('No books found');
            }
        }
        catch (error) {
            callback(error, null);
        }
    }, 2000);
}
function logCategorySerch(err, title) {
    if (err) {
        console.log(`Error is ${err}`);
    }
    else {
        console.log(`Titles are ${title}`);
    }
}
console.log("Begin Search");
getCategoryBooks(enums_1.Category.Fiction, logCategorySerch);
getCategoryBooks(enums_1.Category.Children, logCategorySerch);
console.log("Search submitted");
