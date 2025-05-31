import { Module } from '@nestjs/common';
import { AsyncTaskModule } from './async-task/async-task.module';

@Module({
  imports: [AsyncTaskModule],
})
export class AppModule {}
