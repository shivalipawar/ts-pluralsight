"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
class Employee {
    addToSchedule() {
        console.log("Added to schedule");
    }
    logTitle() {
        console.log("Logged title " + this.title);
    }
}
exports.Employee = Employee;
class Researcher {
    doResearch(topic) {
        console.log("Doing research on " + topic);
    }
}
exports.Researcher = Researcher;
// @logger
class PublicLibrarian {
    assistCustomer(custName) {
        console.log('Assisting customer');
    }
    teachCommunity() {
        console.log('Teaching community');
    }
}
__decorate([
    decorators_1.writable(false)
], PublicLibrarian.prototype, "teachCommunity", null);
exports.PublicLibrarian = PublicLibrarian;
exports.CLASS_INFO = Symbol();
// @logger
// @sealed("UniversityLibrarian")
class UniversityLibrarian {
    [exports.CLASS_INFO]() {
        console.log("This class represnts a UniversityLibrarian");
    }
    static [Symbol.hasInstance](obj) {
        return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer');
    }
    addToSchedule() {
        throw new Error("Method not implemented.");
    }
    logTitle() {
        throw new Error("Method not implemented.");
    }
    doResearch(topic) {
        throw new Error("Method not implemented.");
    }
    // @readOnly
    assistCustomer(cust) {
        console.log(this.name + " is assisting " + cust);
    }
}
__decorate([
    decorators_1.writable(true)
], UniversityLibrarian.prototype, "assistCustomer", null);
exports.UniversityLibrarian = UniversityLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating reference item');
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(v) {
        this._publisher = v;
    }
    printItem() {
        console.log(`${this.title} was published in the ${this.year}`);
        console.log(`Department is ${ReferenceItem.department}`);
    }
}
ReferenceItem.department = "Research";
exports.ReferenceItem = ReferenceItem;
