import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {Todo} from "./models/todo.entity";
import { Todo_I } from './models/todo';


@Injectable()
export class TodoService {


    
    constructor(@InjectRepository(Todo) private  repositoryTdo: Repository<Todo>) {
    }
    

    async createTodo(todo: Todo_I): Promise<Todo> {
        return this.repositoryTdo.save(todo)
    }

     async getTodos(): Promise<Todo[]> {
        return this.repositoryTdo.find();
    }

    async getTodo(todo: string): Promise<Todo> {
        return this.repositoryTdo.findOneBy({ todo });
    }

    async updateTodo(todo: Todo_I): Promise<UpdateResult> {
        return this.repositoryTdo.update(todo.todo, todo);
    }

    async deleteTodo(todo: string): Promise<DeleteResult> {
        return this.repositoryTdo.delete(todo);
    }
}
