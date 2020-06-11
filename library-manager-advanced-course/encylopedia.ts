import { ReferenceItem } from "./classes";

export default class Encylopedia extends ReferenceItem{
    
    constructor(title, year, public edition){   //Dont specific access for super class members.
        super(title,year);
    }
    
    printItem():void{
        super.printItem();                      //this is not mandate
        console.log(`Edition is ${this.edition} in ${this.year}`);
    }
    
    printCitiation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
