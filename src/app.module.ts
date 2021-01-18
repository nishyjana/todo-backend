/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo_App/todo.entity';
import {TodoModule} from './todo_App/todo.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'todo',
      entities: [Todo],
    }),
   TodoModule
  ]
  
})
export class AppModule {}
