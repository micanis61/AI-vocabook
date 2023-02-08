import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OcrController } from './ocr/ocr.controller';
import { OcrModule } from './ocr/ocr.module';
import { OcrService } from './ocr/ocr.service';
import { OcrResolver } from './ocr/ocr.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OcrRepository } from './ocr/Ocr.repository';

@Module({
  imports: [
    OcrModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'localhost',
      port: 5432,
      username:'postgres',
      password:'postgres',
      database:'postgres',
      autoLoadEntities: true,
    })
  ],
  controllers: [AppController, OcrController],
  providers: [AppService, OcrService, OcrResolver ,OcrRepository],
})
export class AppModule { }
