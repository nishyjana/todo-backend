import { Module } from '@nestjs/common';
import { TodoModule } from './todo_App/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
