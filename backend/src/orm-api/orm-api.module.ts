import { Module } from '@nestjs/common';
import { OrmApiController } from './orm-api.controller';
import { OrmApiService } from './orm-api.service';

@Module({
  controllers: [OrmApiController],
  providers: [OrmApiService]
})
export class OrmApiModule {}
