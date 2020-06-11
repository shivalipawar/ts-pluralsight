import { Category } from "./enums";
import { Book,DamagedLogger,Author,Librarian, Magazine } from "./interfaces";
import {  UniversityLibrarian, ReferenceItem } from "./classes";
import Encylopedia from "./encylopedia";
import { purge } from "./lib/utilityFunctions";
import Shelf from "./shelf";

// let encylo = new Encylopedia("Shawshank",1987, 5);

function GetAllBooks():Book[]{
    let books = [
        {id:1,title:'Shadow of Wind',author:'Sheryz',available:true,category : Category.Fiction},
        {id:2,title:'Ikigai',author:'Beson',available:false,category : Category.Biography},
        {id:3,title:'Serpents',author:'Tatya',available:true,category : Category.History},
        {id:4,title:'Rumi',author:'Salmon',available:true,category : Category.Poetry},
    ]
    return books;
}

function LogFirstAvailableBook(books = GetAllBooks()){
    let firstBook = books.filter(book => book.available);
    console.log("Total number of books ",books.length);
    console.log("First book available is ",firstBook);
}

function getBookTitlesByCategory(category : Category) : Array<string> {
    console.log("Category filter for books : ",Category[category]);
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.category === category).map(book=>book.title);
}

function logBookTitles(titles :string[]):void{
    titles.map(t => console.log(t));
}

function getBookById(id:number):Book{
    const allBooks = GetAllBooks();
    // return allBooks.forEach(book=>book.id === id);
    return allBooks.filter(book => book.id == id)[0];
}

function createCustomerId(name:string, id:number) : string {
    return name+id;
}

function createCustomer(name:string,age?:number,city?:string) {
    console.log("Creating customer : ",name);

    if (age) {
        console.log("Age is "+age);
    }
    if(city){
        console.log("City is "+city);
    }
}

function checkOutBooks(customer :string, ...bookId:number[]) :string[] {
    console.log("Checking out books for : "+customer);
    return bookId.map(id => getBookById(id)).filter(book => book.available).map(book => book.title);
}

function getTitles(author:string) : string[];
function getTitles(available:boolean) :string[];
function getTitles(bookProperty:any): string[]{
    const allBooks = GetAllBooks();

    if(typeof bookProperty == 'string'){
        return allBooks.filter(book => book.author === bookProperty).map(book => book.title);
   }else if(typeof bookProperty == 'boolean'){
        return allBooks.filter(book => book.available === bookProperty).map(book => book.title);
   }
}

function printBook(book:Book) : void{
    console.log(book.title+" by "+book.author);
}



// const allBooks = GetAllBooks();
// LogFirstAvailableBook(allBooks);
// LogFirstAvailableBook();                //Default params help avoid param passing.
// const fictionBooks = getBookTitlesByCategory(Category.Fiction);
// logBookTitles(fictionBooks);
// createCustomer("Shivali");
// createCustomer("Shivali",24,"Pune");
// console.log(checkOutBooks("Hitesh",1,3));
// let BesonBooks = getTitles('Beson');
// console.log(BesonBooks);
// let availBooks = getTitles(true);
// console.log(availBooks);
let book :Book= {
    id:5,
    title:"Mrutunjay",
    author:"V V Despande",
    available:true,
    category : Category.History,
    markDamaged : (reason:string) =>console.log("Damaged "+reason)
}
// printBook(book);
// book.markDamaged("cover torn");

// let logDamage : DamagedLogger;
// logDamage = (reason:string) => {console.log("Damage "+reason)};
// logDamage("spilled water")

// let favAuthor = new UniversityLibrarian();
// favAuthor.name ="Sudhensha";
// favAuthor.assistCustomer("Liza");

// let refItem = new ReferenceItem("Summary of paegnant",2019);    //Now its abstract class and cant be intantiated.
// refItem.printItem();
// refItem.publisher = "Penguin";
// console.log(refItem.publisher);

// let refItem : ReferenceItem = new Encylopedia("Summary of paegnant",2019,3);
// refItem.printItem();
// refItem.printCitiation();

//Class expression.
// let Newspaper = class extends ReferenceItem{
//     printCitiation(): void {
//         console.log(`Newspaper : ${this.title}`);
//     }
// }
// let newspprobj = new Newspaper('Gazette',2000);
// newspprobj.printItem();
// newspprobj.printCitiation();

// class Novel extends class{title:string;year:number}{
//     main:string;
// }
// let favNovel = new Novel();
// favNovel.title = "SuperWoman";
// favNovel.year = 2020;
// favNovel.main = "Chakra";

//Test Generic
// let inventory = [...GetAllBooks()];
let inventory = GetAllBooks();
// let purged = purge(inventory);
// purged.forEach(book => console.log(book.title));
// console.log("All books ",GetAllBooks());

//Generic class

let bookShelf :Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst());

let magazines :Magazine[] = [
    {title : 'World of joy',publisher : 'CNet'},
    {title : 'Vogue',publisher : 'Kslit'},
];
let magazineShelf :Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(m => magazineShelf.add(m));
console.log(magazineShelf.getFirst());
console.log(magazineShelf.findTitle('Vogue'));
bookShelf.printTitle();
