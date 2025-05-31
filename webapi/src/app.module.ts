import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsyncTaskModule } from './async-task/async-task.module';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  imports: [AsyncTaskModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
