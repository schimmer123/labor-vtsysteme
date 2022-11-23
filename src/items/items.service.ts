import { Injectable } from '@nestjs/common';
import { Item } from './item';

@Injectable()
export class ItemsService {

    private items: Item[] = [];

    createItem(item: Item): number{
        this.items.push(item);
        return item.id;
    }

     getItems(): Item[]{
        return this.items;
    }

    getItemById(id: number): Item{
        return this.items[id];
    }

    updateItem(newItem: Item): Item{
        const index = this.items.findIndex(item => item.id == newItem.id);
        if(index > -1){
            this.items[index] = newItem;
            return this.items[index];
        }
    }

    deleteItem(id: number){
        this.items = this.items.filter(item => item.id != id);
    }
}
