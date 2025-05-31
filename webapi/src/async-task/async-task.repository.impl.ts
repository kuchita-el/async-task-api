import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { AsyncTaskRepository } from './async-task.repository';
import { AsyncTask } from './async-task.entity';
import {
  WaitingAsyncTask,
  RunningAsyncTask,
  CompletedAsyncTask,
  ErrorAsyncTask,
} from './async-task.entity';

@Injectable()
export class AsyncTaskRepositoryImpl implements AsyncTaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<AsyncTask | null> {
    const record = await this.prisma.asyncTask.findUnique({ where: { id } });
    if (!record) return null;
    // Prismaのレコードからエンティティへ変換
    switch (record.status) {
      case 'WAITING':
        return new WaitingAsyncTask(
          record.id,
          record.createdAt,
          record.payload,
        );
      case 'RUNNING':
        return new RunningAsyncTask(
          record.id,
          record.createdAt,
          record.startedAt!,
          record.payload,
        );
      case 'COMPLETED':
        return new CompletedAsyncTask(
          record.id,
          record.createdAt,
          record.startedAt!,
          record.completedAt!,
          record.payload,
        );
      case 'ERROR':
        return new ErrorAsyncTask(
          record.id,
          record.createdAt,
          record.startedAt!,
          record.errorMessage!,
          record.errorStack!,
          record.payload,
        );
      default:
        return null;
    }
  }
}
