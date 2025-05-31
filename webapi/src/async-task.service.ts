import { Injectable } from '@nestjs/common';
import { AsyncTaskRepository } from './async-task.repository';
import { AsyncTask } from './async-task.entity';

@Injectable()
export class AsyncTaskService {
  constructor(private readonly asyncTaskRepository: AsyncTaskRepository) {}

  async findOne(id: string): Promise<AsyncTask | null> {
    return this.asyncTaskRepository.findById(id);
  }
}
