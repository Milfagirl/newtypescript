import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum() : number {
        let sumprice : number = 0;
        this._items.forEach(element => {
            // if (element.price){
                sumprice = sumprice + element.price;
            // }
        });
        return sumprice;
    }
    sumDiscont(value : number) : number {
        let sumprice : number = 0;
        this._items.forEach(element => {
            // if (element.price){
                sumprice = sumprice + element.price;
            // }
        });
        return sumprice - value*sumprice/100;
    }
    deleteItem(value : number) : void {
        let index : number;
        this._items.forEach(element => {
            if (element.id == value){
                index = this._items.indexOf(element)
                this._items.splice(index, 1);
            }
            else {
                return
            }
        });
    }
}