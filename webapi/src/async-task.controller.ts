import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { AsyncTaskService } from './async-task.service';
import { AsyncTask } from './async-task.entity';

// payloadを除外した型
export type AsyncTaskResponse = Omit<AsyncTask, 'payload'>;

function omitPayload(task: AsyncTask | null): AsyncTaskResponse | null {
  if (!task) return null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { payload, ...rest } = task;
  return rest as AsyncTaskResponse;
}

@Controller('async-tasks')
export class AsyncTaskController {
  constructor(private readonly asyncTaskService: AsyncTaskService) {}

  @Get(':id')
  async getAsyncTask(
    @Param('id') id: string,
  ): Promise<AsyncTaskResponse | null> {
    const task = await this.asyncTaskService.findOne(id);
    if (!task) {
      throw new NotFoundException('AsyncTask not found');
    }
    return omitPayload(task);
  }
}
