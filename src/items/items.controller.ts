import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Item} from "./item";
import {ItemsService} from "./items.service";

@Controller('items')
export class ItemsController {

    constructor(private itemService: ItemsService) {
    }


    @Post()
    createItems(@Body() item: Item): number{
        return this.itemService.createItem(item)
    }

    @Get()
    getItems(): Item[]{
        return this.itemService.getItems()
    }

    @Get(':id')
    getItemById(@Param('id') id: number): Item {
        return this.itemService.getItemById(id);
    }

    @Put()
    updateItem(@Body() newItem: Item): Item{
        return this.itemService.updateItem(newItem)
    }

    @Delete(':id')
    deleteItem(@Param('id') id: number){
        return this.itemService.deleteItem(id);
    }
}
