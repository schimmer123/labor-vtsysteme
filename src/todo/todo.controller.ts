import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Todo_I} from "./models/todo";
import {TodoService} from "./todo.service";
import {promises} from "dns";
import {DeleteResult, UpdateResult} from "typeorm";

@Controller('todo')
export class TodoController {

    constructor(private itemService: TodoService) {
    }


    @Post()
    createTodo(@Body() todo: Todo_I): Promise<Todo_I>{
        return this.itemService.createTodo(todo)
    }

    @Get()
    getTodos(): Promise<Todo_I[]>{
        return this.itemService.getTodos()
    }

    @Get(':todo')
    getItemById(@Param('todo') todo: string): Promise<Todo_I> {
        return this.itemService.getTodo(todo);
    }


    @Put()
    updateTodo(@Body() todo: Todo_I): Promise<UpdateResult>{
        return this.itemService.updateTodo(todo);
       }

    @Delete(':todo')
    deleteItem(@Param('todo') todo: string): Promise<DeleteResult>{
        return this.itemService.deleteTodo(todo);
       }
}
