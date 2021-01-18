/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
   
    
    constructor(
        @InjectRepository(Todo)
        private readonly TodoRepository: Repository<Todo>){}



    getHello(): string {return "heloo" }

    findAll(){ return this.TodoRepository.find();}

    create(todo: Todo){this.TodoRepository.save(todo);}

    update(todo:Todo){this.TodoRepository.update(todo.id,todo)}
    
    delete(id: any) {this.TodoRepository.delete(id)}
}
