/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import {Body, Controller, Delete, Get, Param, Post, Put, Res} from '@nestjs/common';
import { Todo } from './todo.entity';
import {TodoService} from './todo.service';


@Controller()
export class TodoController {

  constructor(private readonly TodoService:TodoService) {}

  

  
  @Get('/heloo')
  getHello(): string {
    return this.TodoService.getHello();
  }

  @Get()
  findAll(){
    return this.TodoService.findAll();
  }

  @Post()
  create(@Body() TodoList: Todo){
    return this.TodoService.create(TodoList);
  }

  @Put(':id')
  update(@Param('id') id, @Body() Todolist: Todo){
    return this.TodoService.update(Todolist);
  }
  
 @Delete(':id')
 remove(@Param('id') id){
   return this.TodoService.delete(id)
 }

}


