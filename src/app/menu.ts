import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class MenuItem{
    Item: string;
    Category: string;
    Price: string;
    constructor(Item: string, Category: string, Price: string){
        this.Item = Item;
        this.Category = Category;
        this.Price = Price;
    }
}