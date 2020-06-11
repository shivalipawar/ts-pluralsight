"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sealed(name) {
    return function (target) {
        console.log(`Sealing the constructor ${name}`);
        Object.seal(target); //Avoid constructor from changing seal property.
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
//Return new constructor for decorating class
function logger(target) {
    let newConstructor = () => {
        console.log("Creating new instance");
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
//Method decorator
function readOnly(target, propertyKey, descriptor) {
    console.log(`Setting ${propertyKey} to be readOnly`);
    descriptor.writable = false;
}
exports.readOnly = readOnly;
function writable(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log(`Setting ${propertyKey}`);
        descriptor.writable = isWritable;
    };
}
exports.writable = writable;
