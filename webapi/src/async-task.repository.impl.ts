import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AsyncTaskRepository } from '../src/async-task.repository';
import { AsyncTask } from '../src/async-task.entity';

@Injectable()
export class AsyncTaskRepositoryImpl implements AsyncTaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<AsyncTask | null> {
    const record = await this.prisma.asyncTask.findUnique({ where: { id } });
    if (!record) return null;
    // Prismaのレコードからエンティティへ変換
    switch (record.status) {
      case 'WAITING':
        return {
          id: record.id,
          status: 'WAITING',
          createdAt: record.createdAt,
          payload: record.payload,
        };
      case 'RUNNING':
        return {
          id: record.id,
          status: 'RUNNING',
          createdAt: record.createdAt,
          startedAt: record.startedAt!,
          payload: record.payload,
        };
      case 'COMPLETED':
        return {
          id: record.id,
          status: 'COMPLETED',
          createdAt: record.createdAt,
          startedAt: record.startedAt!,
          completedAt: record.completedAt!,
          payload: record.payload,
        };
      case 'ERROR':
        return {
          id: record.id,
          status: 'ERROR',
          createdAt: record.createdAt,
          startedAt: record.startedAt!,
          errorMessage: record.errorMessage!,
          errorStack: record.errorStack!,
          payload: record.payload,
        };
      default:
        return null;
    }
  }
}
