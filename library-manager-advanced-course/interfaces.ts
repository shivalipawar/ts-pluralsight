import {Category} from './enums'

interface Book {
    id:number,
    title:string,
    author:string,
    available:boolean,
    category : Category,
    pages?:number,
    markDamaged? : (reason :string) => void;
}

//Uncomment when we want to check merged interfaces
// interface Book{
//     publisher:string;
//     hasIndex:boolean;
// }

interface DamagedLogger{
    (reason:string):void;
}

interface Person {
    name:string;
    email:string;
}

interface Author extends Person{
    noOfBooksPublished :number;
}

interface Librarian extends Person{
    department : string;
}

interface Magazine{
    title:string,
    publisher:string
}

export {Book,DamagedLogger,Author,Librarian,Magazine};