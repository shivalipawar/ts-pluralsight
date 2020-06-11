import * as Interfaces from "./interfaces";
import { sealed,logger, readOnly, writable} from "./decorators";

class Employee {
    title:string;

    addToSchedule():void{
        console.log("Added to schedule");
    }

    logTitle():void{
        console.log("Logged title "+this.title);
    }
}

class Researcher {
    doResearch(topic:string):void{
        console.log("Doing research on "+topic);
    }
}

// @logger
class PublicLibrarian implements Interfaces.Librarian{
    name:string;
    email:string;
    department :string;

    assistCustomer(custName:string){
        console.log('Assisting customer');
    }
    
    @writable(false)
    teachCommunity(){
        console.log('Teaching community');
    }
}

export const CLASS_INFO = Symbol();

// @logger
// @sealed("UniversityLibrarian")
class UniversityLibrarian implements Interfaces.Librarian,Employee,Researcher{          //Multiple classes cn be extended so we have added as interface and we'll use a function to copy their implementation in UniversityLibrarian
    
    title: string;

    [CLASS_INFO]():void{                                                //Being symbol makes it clear it's unique and represents something important.
        console.log("This class represnts a UniversityLibrarian");
    }

    static [Symbol.hasInstance] (obj:Object) {
        return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer');
    }

    addToSchedule(): void {
        throw new Error("Method not implemented.");
    }
    logTitle(): void {
        throw new Error("Method not implemented.");
    }
    doResearch(topic: string): void {
        throw new Error("Method not implemented.");
    }

    name: string;
    email: string;
    department: string;

    // @readOnly
    @writable(true)
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

export { UniversityLibrarian ,ReferenceItem,Employee,Researcher,PublicLibrarian};