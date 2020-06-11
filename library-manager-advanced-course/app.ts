import { Category } from "./enums";
import { Book, DamagedLogger, Author, Librarian, Magazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem, Employee, Researcher, CLASS_INFO, PublicLibrarian } from "./classes";
import * as util from "./lib/utilityFunctions";
// import "./LibrarianExtension"; //USe this import for only merge module is uncommented

function printBookInfo({ title: booktitle, author: bookauthor }: Book): void {
    console.log(`${booktitle} was authored by ${bookauthor}`);
}
function logFavouriteBook([book1, book2, ...others]: Book[]) {
    printBookInfo(book1);
    printBookInfo(book2);
    // console.log(others);
}

// logFavouriteBook(util.GetAllBooks());

let [book1, book2] = util.GetAllBooks();
// let {title,author} = book1;
// console.log(title+" "+author);

let poets: string[] = ["Tolystoy", "Gulzar", "Rehman"];
let authors: string[] = ["Collins", ...poets];
// console.log(authors);

interface KeyValue<K, V> extends Array<K | V> {     //Aray can be of type K and V it's union
    0: K;
    1: V
}

let catalog: KeyValue<string, Book> = ['A 23.4', book1, 'B3.4', book2];

//Example of union 
let books = util.GetAllBooks();
let magazine = util.GetAllMagazines();

let readingType: printMaterial = magazine[0]
let readingType1: Book | Magazine = books[0]

//Example of intersection
// let serialNovel : serial = {
//     id:1,publisher:"Summer",title:'Millionare 1',author:'Tim',available:true,category : Category.Biography
// }

//Apply Mixins to apply methods to a class

function applyMixin(derived: any, base: any[]) {
    base.forEach(base => {
        Object.getOwnPropertyNames(base.prototype).forEach(name => {
            derived.prototype[name] = base.prototype[name];
        })
    })
}

// applyMixin(UniversityLibrarian, [Employee, Researcher]);
// let librarian: UniversityLibrarian = new UniversityLibrarian();
// librarian.doResearch("History");

//Restrict type values to certain values using string literals and type alias.

let frequency: "annual" | "monthly" = "annual";

type frequency = "annual" | "monthly";

function getMagazineByFrequency(frequencyMeasure: frequency) { }

type printMaterial = Book | Magazine;
type serial = Book & Magazine;

//Polymorphic this types
class LibraryBook {
    checkin(): this {
        console.log("Checkin the book");
        return this;
    }
    checkout(): this {
        (this instanceof ElectronicBook) ? console.log("Checkout the electronic book") : console.log("Checkout the children book");
        return this;
    }
}

class ChildrenBook extends LibraryBook {
    doClean(): this {
        console.log("Cleaning book");
        return this;
    }
}

class ElectronicBook extends LibraryBook {
    removeFromCustDevice(): this {
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

let obj = { [one]: "unique in all ways" };      //Use symbol as key instaed of strings
// console.log(obj[one]);

//Symbol as computed property declarations 
// librarian[CLASS_INFO]();

//Symbol to change language behaviour where we have custom instanceof method to UniversityLibrarian
// let lib = {name:"Shravs" ,assistCustomer:(name) =>{console.log("Assisting "+name)}};
// if(lib instanceof UniversityLibrarian){
//     console.log("Is Librarian");
// }else{
//     console.log("Not Librarian");
// }

//Decorator with factory 
// let lib = new UniversityLibrarian();
// let lib1 = new PublicLibrarian();

// try {
//     lib.assistCustomer = () =>{console.log('assistFaculty relacement method')};
//     lib1.teachCommunity = () =>{console.log('teachingcommunity relacement method')}
// } catch (error) {
//     console.log(error.message);
// }

// lib.assistCustomer("Shern");
// lib1.teachCommunity();


//Callback
interface callback{
    (err:Error,titles:string[]):void;
}
function getCategoryBooks(cat:Category,callback : callback) {
    setTimeout(()=>{
        try {
            let allBooks = util.getBookTitlesByCategory(cat);
            if(allBooks.length > 0){
                callback(null,allBooks);
            }else{
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error,null);
        }
    },2000)
}

function logCategorySerch(err: Error, title: string[]): void {
    if (err) {
        console.log(`Error is ${err}`);
    } else {
        console.log(`Titles are ${title}`);
    }
}

console.log("Begin Search");
getCategoryBooks(Category.Fiction,logCategorySerch);
getCategoryBooks(Category.Children,logCategorySerch);
console.log("Search submitted")