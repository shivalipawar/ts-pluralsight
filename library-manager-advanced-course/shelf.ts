interface ShelfItem{
    title:string;
}
export default class Shelf<T extends ShelfItem>{
    private items:Array<T> = new Array<T>();

    add(item:T):void{
        this.items.push(item);
    }

    getFirst():T{
        return this.items[0];
    }

    findTitle(title:string):T{
        return this.items.filter(item => item.title = title)[0];
    }

    printTitle():void{
        this.items.forEach(item => console.log(item.title));
    }
}