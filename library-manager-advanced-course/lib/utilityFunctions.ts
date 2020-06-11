import { Book, Magazine } from "../interfaces";
import { Category } from "../enums";

export function purge<T>(inventory:Array<T>) : Array<T> {
    return inventory.splice(2,inventory.length);
}

export function GetAllBooks():Book[]{
    let books = [
        {id:1,title:'Shadow of Wind',author:'Sheryz',available:true,category : Category.Fiction},
        {id:2,title:'Ikigai',author:'Beson',available:false,category : Category.Biography},
        {id:3,title:'Serpents',author:'Tatya',available:true,category : Category.History},
        {id:4,title:'Rumi',author:'Salmon',available:true,category : Category.Poetry},
    ]
    return books;
}

export function GetAllMagazines():Magazine[]{
    let magazine = [
        {id:1,publisher:"CNet",title:'Shadow of Wind',author:'Sheryz',available:true,category : Category.Fiction},
        {id:2,publisher:"KK",title:'Ikigai',author:'Beson',available:false,category : Category.Biography},
        {id:3,publisher:"Quicks",title:'Serpents',author:'Tatya',available:true,category : Category.History},
        {id:4,publisher:"LifeWorld",title:'Rumi',author:'Salmon',available:true,category : Category.Poetry},
    ]
    return magazine;
}

export function LogFirstAvailableBook(books = GetAllBooks()){
    let firstBook = books.filter(book => book.available);
    console.log("Total number of books ",books.length);
    console.log("First book available is ",firstBook);
}

export function getBookTitlesByCategory(category : Category) : Array<string> {
    console.log("Category filter for books : ",Category[category]);
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.category === category).map(book=>book.title);
}

export function logBookTitles(titles :string[]):void{
    titles.map(t => console.log(t));
}

export function getBookById(id:number):Book{
    const allBooks = GetAllBooks();
    // return allBooks.forEach(book=>book.id === id);
    return allBooks.filter(book => book.id == id)[0];
}

export function createCustomerId(name:string, id:number) : string {
    return name+id;
}

export function createCustomer(name:string,age?:number,city?:string) {
    console.log("Creating customer : ",name);

    if (age) {
        console.log("Age is "+age);
    }
    if(city){
        console.log("City is "+city);
    }
}

export function checkOutBooks(customer :string, ...bookId:number[]) :string[] {
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

export function printBook(book:Book) : void{
    console.log(book.title+" by "+book.author);
}