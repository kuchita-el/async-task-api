import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsyncTaskModule } from './async-task.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AsyncTaskModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
