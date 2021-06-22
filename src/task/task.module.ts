import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.respository';
import { TaskService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository])],
  providers: [TaskService],
  controllers: [TaskController],
  exports: [TaskService, TypeOrmModule],
})
export class TaskModule {}