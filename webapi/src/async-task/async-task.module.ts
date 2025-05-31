import { Module } from '@nestjs/common';
import { AsyncTaskService } from './async-task.service';
import { AsyncTaskController } from './async-task.controller';
import { PrismaModule } from '../shared/prisma/prisma.module';
import { AsyncTaskRepositoryImpl } from './async-task.repository.impl';

@Module({
  imports: [PrismaModule],
  controllers: [AsyncTaskController],
  providers: [
    AsyncTaskService,
    { provide: 'AsyncTaskRepository', useClass: AsyncTaskRepositoryImpl },
  ],
})
export class AsyncTaskModule {}
