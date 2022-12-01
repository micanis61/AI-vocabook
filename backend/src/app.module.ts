import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmApiModule } from './orm-api/orm-api.module';

@Module({
  imports: [OrmApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
