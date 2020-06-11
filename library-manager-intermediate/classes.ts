import { Book,DamagedLogger,Author,Librarian } from "./interfaces";

class UniversityLibrarian implements Librarian{
    name: string;
    email: string;
    department: string;

    assistCustomer(cust :string){
        console.log(this.name + " is assisting "+cust);
    }

}

abstract class ReferenceItem {
    private _publisher:string;
    static department : string ="Research";
    
    get publisher() : string {
        return this._publisher.toUpperCase();
    }
    
    set publisher(v : string) {
        this._publisher = v;
    }
    
    constructor(public title:string, protected year:number) {
        console.log('Creating reference item');
    }
    printItem():void{
        console.log(`${this.title} was published in the ${this.year}`);
        console.log(`Department is ${ReferenceItem.department}`);
    }

    abstract printCitiation():void;
}

export { UniversityLibrarian ,ReferenceItem};