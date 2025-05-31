import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  //   async enableShutdownHooks(app: INestApplication) {
  //     // $onの型が合わない場合はanyキャストで回避
  //     (this as any).$on('beforeExit', async () => {
  //       await app.close();
  //     });
  //   }
}
