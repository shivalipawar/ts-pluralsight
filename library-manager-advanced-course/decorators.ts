export function sealed(name:string){                        //With factory to accept argument and default is inner function within.
    return function(target:Function):void{
        console.log(`Sealing the constructor ${name}`);
        Object.seal(target);                                //Avoid constructor from changing seal property.
        Object.seal(target.prototype);
    }
}

//Return new constructor for decorating class
export function logger<TFunction extends Function>(target:Function) :TFunction{
    let newConstructor :Function = ()=>{
        console.log("Creating new instance");
        console.log(target);
    }
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <TFunction>newConstructor;
}

//Method decorator
export function readOnly(target:Object,propertyKey:string,descriptor:PropertyDescriptor){
    console.log(`Setting ${propertyKey} to be readOnly`);
    descriptor.writable = false;
}

export function writable(isWritable:boolean){
    return function(target:Object,propertyKey:string,descriptor:PropertyDescriptor){
        console.log(`Setting ${propertyKey}`);
        descriptor.writable = isWritable;
    }
}